// components/comArticle/com.js
// import {randomStr} from '../../utils/ranomStr.js'
import {BaseData} from "../../utils/base-data"
import {SearchData} from "../../utils/search-data"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       isover:Boolean,
       articleList:Array,
       moreArticle:{
         type:String,
         value:'',
         observer:'_getMoreData'
       },
       type:String,
       searchWord:String,
       magazineId:{
         type:Number,
         value:0,
         observer(){
           this.setData({
            isover:false,
            isloading:false,
           })
           wx.pageScrollTo({
            scrollTop: 0,
            // duration: 300
          })
         }
       },
      //  isover:Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
   isloading:false,
   isover:false,
   markListStorage:[],
   page:''
  //  isLike:false,
  },
     attached(){
    this._getStorageMarkList()
    // const page = getCurrentPages()[1]
    // this.setData({
    //   page:page.route
    // })
    console.log(this.data.page)

  },
  /**
   * 组件的方法列表
   */
  methods: {
    _getStorageMarkList(){
      const res = wx.getStorageSync('markListStorage')
      if(res){
        this.setData({
          markListStorage:res
        })
      }
    },
     _getMoreData(){
       if(this.data.isloading || this.data.isover){
         return
       } 
       this.setData({
         isloading:true,
       }) 
      //  console.log(this.data.type,this.data.searchWord)
      let datalist = this.data.articleList;  
      if(this.data.type==='search'){
        this._searchData().then(res=>{
          datalist = datalist.concat(res);
          // console.log(datalist)
          this._isover(datalist.length)
          this.setData({
            articleList:datalist,
          })
         this._loadover()
        })
      }else{ 
        this._requestData().then(data=>{
             datalist = [...datalist, ...data];
              this._isover(datalist.length)
              this.setData({
                articleList:datalist,
              })
             this._loadover()
        })
      }
 
     },
     _searchData(){
        const request = new SearchData();
        let len = this.data.articleList.length;
        let key = this.data.searchWord;
        return request.getSearchArticleList(len,key);
     },

     _requestData(){
      const request = new BaseData();
      let len = this.data.articleList.length;
      let id = this.data.magazineId;
      let articleList = request.articleList(id,len);
      return articleList;
     },

    _isover(len) {
      if (this.data.articleList.length == len) {
        this.setData({
          isover: true
        })
      }
    },
    _loadover() {
      this.setData({
        isloading: false
      })
    },
    getlike(e){
      this._getStorageMarkList();
      let idArr = e.currentTarget.dataset.detail;
      let like = e.detail.data;
      let marklist = this.data.markListStorage;
      if(like){
        let articleDetail = this.data.articleList[idArr[1]]
        // articleDetail.like = true;
        marklist.forEach(item=>{
          if(item.artId == articleDetail.artId){
            return
          }                 
        })
        marklist.unshift(articleDetail)
        wx.setStorageSync('markListStorage',marklist)
        this.setData({
          markListStorage:marklist
        });
       
      }else{
      let id = idArr[0]
      marklist =  marklist.filter(item=>{
          return item['artId'] != id ;
        })
        wx.setStorageSync('markListStorage',marklist)
        this.setData({
          markListStorage:marklist
        });
      }
    },
    test(){
      // console.log(222)
    },
    tolower(){
      console.log('lower',this.data.isover)

      this._getMoreData()
    }
  },
 

})
