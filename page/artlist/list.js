// page/artlist/list.js
let fn = require('../../commonjs/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //  likelist:[true,false,true,false,true,false,true,false]
  },
   getmessage(e){
    //  console.log(e.currentTarget.dataset.message);
     wx.showActionSheet({
       itemList:['内容过期了','内容和' +  e.currentTarget.dataset.message + '不相关' , '不再显示来自' +  e.currentTarget.dataset.message+ '的内容'],
       success:function(data){
        //  console.log(data)
       }
      })
   },
   gototype(e){
     let typeId = e.currentTarget.dataset.typeid
     wx.navigateTo({
       url:`/page/type/type?typeid=${typeId}`,
     })
   },
   setlike:function(e){
         let index = e.target.dataset.like;
         let list = this.data.likelist;
         let like = !this.data.likelist[index];
         list[index] = like; 
        //  console.log(list)
         this.setLikeStorage(list)

   },
   setLikeStorage(list){
    if(wx.getStorageSync('likelist')){
      if(list){
        wx.setStorageSync('likelist', list)
      }
    }else{
      wx.setStorageSync('likelist',[])
    } 
    let data = wx.getStorageSync('likelist');
      this.setData({
        likelist:data,
      })

    // console.log(res)
  //  wx.setStorage({
  //    key : 'likelist',
  //    data: [true,false,true,false,true,false,true,false]
  //  })
  // wx.getStorage({
  //   key:'likelist',
  //   success(res){
  //     console.log(res.data)
  //   }
  // }
  // )
    
   },
   getdata(){
    let _self = this;
    wx.request({
      url:'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/home',
      success:function(data){
        _self.setData({
          recommend:data.data.recommend,
          markType:data.data.markType,
          articleList:data.data.articleList,
        })
        // console.log(data.data,_self.data)
      }
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getdata()
     this.setLikeStorage();
    //  wx.showToast({
    //    title:'loading..',
    //    duration:2000,
    //    mask:true,
    //  })
    // wx.showModal({
    //   tltle:'show',
    //   content:'show cotent'
    // })
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
      // console.log("refresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("rachbottom")
  },

  /**
   * 页面滚动时触发的处理函数
   */
  // onPageScroll:function(e){
  //   console.log(e)
  // },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('share')
  }
})