import { Objects } from "app/bundles/objects";
import { AutoAPI } from 'protolib/api'
import { Protofy } from 'protolib/base'
import { Application } from 'express';
import { getLogger } from "protolib/base"
import { getAuth } from "protolib/api";
import fs from 'fs'
import path from "path";

const root = path.join(process.cwd(), '..', '..')
const logger = getLogger()

Protofy("type", "AutoAPI")
Protofy("object", "plant")
const { name, prefix } = Objects.plant.getApiOptions()
const initialData = {
    "24323432": {
        "id": "24323432",
        "name": "lettuce",
        "nutrients": [
            {
                "pump": "pumpproducta",
                "name": "BLOOM",
                "npkRatio": [
                    0,
                    5,
                    4
                ],
                "ratio": 3
            },
            {
                "pump": "pumpproductb",
                "name": "MICRO",
                "npkRatio": [
                    5,
                    0,
                    1
                ],
                "ratio": 1
            },
            {
                "pump": "pumpproductc",
                "name": "K",
                "npkRatio": [
                    0,
                    0,
                    20
                ],
                "ratio": 0.5
            }
        ]
    }
}

const PlantAPI = AutoAPI({
    modelName: name,
    modelType: Objects.plant,
    initialData,
    prefix: prefix
})

export default Protofy("code", (app: Application, context) => {
    PlantAPI(app, context)
    //you can add more apis here, like:
    /*
    app.get('/api/v1/test/Plant', (req, res) => {
        //you code goes here
        //reply with res.send(...)
    })
    */
})