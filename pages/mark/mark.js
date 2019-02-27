// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       userInfo:{},
       accredit:false,
       markArticleList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onGetInfo(e){
    this.setData({
      userInfo:e.detail.userInfo,
      accredit:true,
    })
  },
  _getAccedit(){
    wx.getSetting({
      success:res=>{
        if(res.authSetting['scope.userInfo']){
          this._getUserInfo()
       }
      }
    })
  },
  _getUserInfo(){
      wx.getUserInfo({
        success:res=>{
          this.setData({
            userInfo:res.userInfo,
            accredit:true,
          })
        }
      }) 
  },
  _getStorageMarkList(){
    const res = wx.getStorageSync('markListStorage')
    if(res){
      this.setData({
        markArticleList:res
      })
    }
  },
  onLoad: function (options) {
    this._getAccedit()
    this._getStorageMarkList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this._getStorageMarkList()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})