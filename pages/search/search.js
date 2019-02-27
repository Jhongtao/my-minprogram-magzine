// pages/search/search.js
import {SearchData} from '../../utils/search-data'
import {randomStr} from '../../utils/ranomStr'
const searchdata = new SearchData();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     value:'',
     searchArticleList:[],
     searchArticleRecommend:{},
     moreArticle:'',
     type:'search',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onTapBottom(e){
      console.log(e)
  },
  _getSearchData(){
    const searchArticleList = searchdata.getSearchArticleList();
    const searchArticleRecommend = searchdata.getsearchArticleRecommend();
    Promise.all([searchArticleList,searchArticleRecommend]).then(res=>{
      this.setData({
       searchArticleList:res[0],
       searchArticleRecommend:res[1]
      })
    }).catch(err=>{
      console.log(err)
    })
  },
  onLoad: function (options) {
       this.setData({
         value:options.searchUrl
       })
       this._getSearchData()
      //  console.log(options.searchUrl)

      //  console.log(searchdata)
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function (e) {
    console.log(e)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
    this.setData({
      moreArticle:randomStr(10)
    })
    // console.log(this.data.moreArticle)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})