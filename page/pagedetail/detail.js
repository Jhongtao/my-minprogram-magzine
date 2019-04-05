// page/pagedetail/detail.js
let res = require('../../commonjs/request');
const audio =  wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isplay:true,
    playing:false,
    curtime:0,
    process:0,
    preWidth:550,
    curleft:0,
    endleft:0,
    left:0,
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      },
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 6
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 10
      }]
  },
  getdata(id){
    let _self = this;
    res.getData({
      url:'/getArticleDetail/' + id,
      success:function(data){
        // console.log(data);
        let Odata = data;
        // console.log(Odata.data.content)
        Odata.data.content = _self.getpara(Odata.data.content)
        _self.setData({
          articleDetail:Odata.data
        })
      }
    })
  },
  getpara(data){
    // let para = data.split('\n');
    // let str = ''
    // para.forEach((item)=>{
    //    if(item){
    //      str += item + '\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    //    }
    // })

   return data.replace(/\n/g,'\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
  },

  playvideo(e){
   let flag = !this.data.isplay;
   let myvideo = wx.createVideoContext('invideo');
   myvideo.play();
   this.setData({
     isplay:flag
   })
  },
  autoPlay:function(){
    let playing = this.data.playing;
    audio.src = this.data.articleDetail.audio.src;
    if(playing){
      audio.pause()
    }else{
      audio.play()
    }
    this.setData({
      playing : !playing, 
    })
 
  },
  listenEvent(){
    let _self = this;
   audio.onPlay(function(){
      
   })
   audio.onEnded(function(){
       audio.puase();
       _self.setData({
        playing:false,
        curtime:0,
        process:0,
   })
   })
   audio.onTimeUpdate(function(){
     let duration = _self.data.articleDetail.audio.duration;
     let curtime = audio.currentTime;
     let process =  (curtime/duration)*100;
     let left =  (process/100)*_self.data.preWidth;
     _self.setData({
          curtime:curtime.toFixed(),
          process:process.toFixed(),
          left:left.toFixed(),
     })
   })
  },
  onstart(e){
    let curleft = e.touches[0].pageX;
    audio.pause();
    this.setData({
      curleft:curleft,
      playing:false,
    })
  },
  onmove(e){
    let nowleft = e.touches[0].pageX;
    
    let left = (nowleft - this.data.curleft + this.data.endleft/this.getPhonepre())*this.getPhonepre();
    let process = (left/this.data.preWidth)*100;
    let curtime = (process/100)*this.data.articleDetail.audio.duration;
    if(left >= 0 && left <=550){
      this.setData({
        curtime:curtime.toFixed(),
        left:left,
        process:process.toFixed(),
      })
    }
  },
  onend(e){
    let endleft = this.data.left;
    audio.seek( parseInt( this.data.curtime ))
    this.setData({
      endleft:endleft,
    })
    this.autoPlay();
  },
  getPhonepre(){
    var pre;
    wx.getSystemInfo({
      success(res){
        pre = (750/res.screenWidth).toFixed()
      }
    })
    // console.log(pre)
    return pre;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //  console.log(options.id)
  
   this.getdata(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.listenEvent();
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