import {Protofy} from 'protolib/base';
import FilltankApi from "./filltank";
import PhotoperiodApi from "./photoperiod";
import PhrangeApi from "./phrange";
import Plant from './plant';
import NutrientsAutoApi from "./nutrientsAuto";

const autoApis = Protofy("apis", {
    Filltank: FilltankApi,
    Photoperiod: PhotoperiodApi,
    Phrange: PhrangeApi,
    Plant: Plant,
    NutrientsAuto: NutrientsAutoApi
})

export default (app, context) => {
    Object.keys(autoApis).forEach((k) => {
        autoApis[k](app, context)
    })
}