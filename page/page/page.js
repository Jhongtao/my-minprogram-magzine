// page/page/page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  enterpage:function(e){
    // console.log(e)
    //   wx.navigateTo({
    //   url:"/page/page2/page2"
    // })
    // console.log(e,this)
      wx.redirectTo({
        url:"/page/page2/page2"
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       console.log('onload')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
        console.log('rend')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log('show')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
     console.log('hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('unload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('pullfresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('bottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('share')
  }
})