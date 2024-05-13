import {Protofy} from 'protolib/base'
import { PlantModel } from "./plant";

export default Protofy("objects", {
    plant: PlantModel
})