/*

app is an express object, you can use app.get/app.post to create new endpoints
you can define newendpoints like:

app.get('/api/v1/testapi', (req, res) => {
    //you code goes here
    //reply with res.send(...)
})

the session argument is a session object, with the following shape:
{
    user: { admin: boolean, id: string, type: string },
    token: string,
    loggedIn: boolean
}

use the chat if in doubt
*/

import { getAuth } from "protolib/api";
import { Protofy, API } from "protolib/base";
import { getLogger } from "protolib/base";
import { Application } from "express";
import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "..", "..");
const logger = getLogger();

Protofy("type", "CustomAPI");

export default Protofy("code", async (app: Application, context) => {
  context.deviceSub(
    "garden1",
    "floatswitch",
    "status",
    async (message, topic, done) =>
      context.flow.switch(
        message,
        "OFF",
        "equals",
        async () => {
          await context.deviceAction("garden1", "freshwater", "on");
          context.executeAutomation("nutrientsauto", null, null, false);
        },
        async () => {
          await context.deviceAction("garden1", "freshwater", "off");
        },
        null
      )
  );
  const initialValue = await context.deviceMonitor(
    "garden1",
    "floatswitch",
    "status"
  );
  await context.flow2.switch({
    condition: initialValue == "OFF",
    then: async (output) => {
      await context.deviceAction(
        "garden1",
        "freshwater",
        "on",
        undefined,
        null,
        null
      );
    },
    otherwise: async (output) => {
      await context.deviceAction(
        "garden1",
        "freshwater",
        "off",
        undefined,
        null,
        null
      );
    },
  });
  app.get("/api/v1/", async (req, res) => {
    await context.deviceAction(
      "garden1",
      "freshwater",
      "pulsed_on",
      1000,
      null,
      null
    );
    res.send("Response");
    await context.logs.log({
      message: "data",
      data: initialValue,
      level: "info",
    });
  });
  await context.logs.log({
    message: "initialData",
    data: initialValue,
    level: "info",
  });
});
