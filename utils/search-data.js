import {Request} from "../utils/request-modules"
class SearchData extends Request {
    constructor(){
        super('https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine')
    }
    getSearchArticleList(start=0,key='读书'){
      return  this.getData({url:`/searchArticleList/${key}/${start}`})
    }
    getsearchArticleRecommend(key="读书"){
        return this.getData({
            url:`/searchArticleRecommend/${key}`
        })
    }
}
export {SearchData}