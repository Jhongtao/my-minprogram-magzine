// components/comVideo/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoSrc:String,
    coverImgSrc:String,
    mainTitle:String,
    videoId:String,
    duration:String,
  },
  /**生命周期函数 */
  lifetimes:{
    attached(){
      this.video = wx.createVideoContext(this.data.videoId,this)
    }
  
  },
  /**
   * 组件的初始数据
   */
  data: {
    playImgSrc:"./image/Icon_play.png",
    ishidden:true,
    myvideo:{},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _toggleHidden(){
      let hidden = !this.data.ishidden
      this.setData({
         ishidden:hidden
      })
    },
     autoplay(){
       this._toggleHidden()
       this.video.play()
     },
     change(){
       this._toggleHidden()
       this.video.pause()
      //  this.video.seek(0)
     },
     playend(){
      this._toggleHidden()
     }
  }
})
