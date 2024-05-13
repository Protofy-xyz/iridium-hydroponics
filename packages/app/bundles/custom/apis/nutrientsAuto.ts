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
  //PUT YOUR API HERE
  //context.devicePub function allows to communicate with devices via mqtt
  //context.deviceSub allows to receive notifications from devices via mqtt
  //app is a normal expressjs object
  //context.mqtt is a mqttclient connection
  context.automations.automation({
    name: "nutrientsauto",
    responseMode: "wait",
    app: app,
    onRun: async (params, res) =>
      context.object.read(
        "plant",
        "24323432",
        context.objects,
        null,
        async (item) => {
          const nutrients = item.nutrients;
          await context.flow2.forEach({
            list: nutrients,
            mode: "series",
            onEach: async (item, stop, next) => {
              ratioSum += item.ratio;
            },
          });
          context.deviceSub(
            "garden1",
            "phectemp",
            "EC",
            async (message, topic, done) => {
              context.flow.inRange(
                message,
                0.8,
                0.2,
                null,
                async (delta) => {
                  await context.flow2.forEach({
                    list: nutrients,
                    mode: "series",
                    onEach: async (item, stop, next) => {
                      const result = Number(
                        ((ml * item.ratio) / ratioSum).toFixed(2)
                      );
                      const duration = result ? convertMlToMs(result) : 1000;
                      await context.deviceAction(
                        "garden1",
                        item.pump,
                        "pulsed_on",
                        duration
                      );
                    },
                  });
                },
                async (delta) => {
                  context.executeAutomation("phrange", null, null, false);
                },
                null
              );
              setTimeout(async () => {
                context.executeAutomation("nutrientsauto", null, null, false);
                await context.logs.log({
                  message: "back at it again",
                  data: "timer",
                  level: "info",
                });
              }, 10000);
              done();
            }
          );
        },
        null
      ),
  });
  const msPerMl = 10000 / 2.1;
  const convertMlToMs = (ml) => {
    return ml * msPerMl;
  };
  var ratioSum = 0;
  var duration = 0;
  var ml = 1;
});
