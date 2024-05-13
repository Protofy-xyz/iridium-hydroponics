import { ProtoModel, SessionDataType, z } from "protolib/base";
import { Protofy, Schema, BaseSchema } from 'protolib/base'
import { getLogger } from 'protolib/base';

const logger = getLogger()
Protofy("features", {})

export const BasePlantSchema = Schema.object(Protofy("schema", {
	name: z.string().size(2).hint('Name of your plant'),
	nutrients: z.array(z.object({pump: z.string(), name: z.string(), npkRatio: z.array(z.number()).size(3), ratio: z.number()})).size(3).optional()
}))

export const PlantSchema = Schema.object({
    ...BaseSchema.shape,
    ...BasePlantSchema.shape
});

export type PlantType = z.infer<typeof PlantSchema>;

export class PlantModel extends ProtoModel<PlantModel> {
    constructor(data: PlantType, session?: SessionDataType, ) {
        super(data, PlantSchema, session, "Plant");
    }

    public static getApiOptions() {
        return {
            name: 'plants',
            prefix: '/api/v1/'
        }
    }

    create(data?):PlantModel {
        const result = super.create(data)
        return result
    }

    read(extraData?): PlantType {
        const result = super.read(extraData)
        return result
    }

    update(updatedModel: PlantModel, data?: PlantType): PlantModel {
        const result = super.update(updatedModel, data)
        return result
    }

	list(search?, session?, extraData?, params?): PlantType[] {
        const result = super.list(search, session, extraData, params)
        return result
    }

    delete(data?): PlantModel {
        const result = super.delete(data)
        return result
    }

    protected static _newInstance(data: any, session?: SessionDataType): PlantModel {
        return new PlantModel(data, session);
    }

    static load(data: any, session?: SessionDataType): PlantModel {
        return this._newInstance(data, session);
    }
}
