import {Request} from "./request-modules"
class WeaterData extends Request{
    constructor(){
        super('http://t.weather.sojson.com/api/weather/city/')
    }
    getWeaterData(cityId){
       return this.getData({url:cityId})
    }
}
export {WeaterData}