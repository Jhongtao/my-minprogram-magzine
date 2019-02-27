import {Request} from './request-modules.js'
class BaseData extends Request{
    constructor(){
        super('https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine')
    }
    articleList(magazineId=0, list=0){
        return this.getData({url:`/getIndexArticleList/${magazineId}/${list}`})
    }
    recommendInfo(magazineId=0){
        return this.getData({url:`/getRecommendInfo/${magazineId}`})
    }
    markTypeList(magazineId=0){
        return this.getData({url:`/getMarkTypeList/${magazineId}`})
    }
}
export {BaseData}