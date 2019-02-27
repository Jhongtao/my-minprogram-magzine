// pages/index/index.js
import {BaseData} from "../../utils/base-data.js";
import {randomStr} from '../../utils/ranomStr.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
       isover:false,
       magazineId:0,
       loading:true,
       magazineTypeArr:['轻芒','兴趣','物质','世界','新事','灵魂'],
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onOption(e){
      // console.log(e)
      wx.switchTab({
        url:"/pages/options/options"
      })
  },
  _getBaseData(magazineId){
    const request = new BaseData();
    const articleList = request.articleList(magazineId);
    const recommendInfo = request.recommendInfo(magazineId);
    const markTypeList = request.markTypeList(magazineId);
    Promise.all([articleList, recommendInfo, markTypeList]).then(data=>{
     this.setData({
       articleList:data[0],
       recommendInfo:data[1],
       markTypeList : data[2],
     })
     this._loadover();
    })
  },
  _loadover(){
    this.setData({
      loading:false,
    })
  },
  _showRedDot(){
    wx.showTabBarRedDot({
      index:1
    })
  },
  _hideRedDot(){
    wx.hideTabBarRedDot({
      index:1
    })
  },
  ongetDataList(e){
    let id = e.detail.data;
    if(this.data.magazineId === id){
      return
    }
    this.setData({
      magazineId:id,
      isover:false,
      loading:true,
    })
    this._getBaseData(id)
  },
  onReachBottom(){
    this.setData({
      moreArticle:randomStr(10),
    })
  },
  onLoad: function (options) {
    //  wx.showLoading()
     this._getBaseData()
  },
  onShow:function(){
    this._showRedDot()
  },
  onHide:function(){
    // console.log(111)
    this._hideRedDot()
  }
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

})