// components/comLike/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    markArticle:Object,
    isLike:Boolean,
  },

  /**
   * 组件的初始数据
   */
  attached(){
    this._setLike()
  },
  data: {
    //  islike:false,
    //  markListStorage:[]
  },
  //  attached(){
  //    wx.getStorageSync({
  //      key:'markListStorage',
  //      success(res){
  //         console.log(res)
  //      }
  //    })
  //  },
  /**
   * 组件的方法列表
   */
  methods: {
    // onuserinfo(e){
    //   console.log(e)
    // },
    onLike(e){
      // console.log(this.data.markArticle)
        this.setData({
          isLike:!this.data.isLike,
        })
        this.triggerEvent('getlike',{data:this.data.isLike},{})
        // if(this.data.islike){
        //   let markarticle=this.data.markArticle;
        //   markarticle.islike = true;

        // }
    },
    _setLike(){
      let artId = this.data.markArticle.artId;
      let marklist = wx.getStorageSync('markListStorage')
      marklist.map(item=>{
        if(item.artId === artId){
          this.setData({
            isLike:true,
          })
        }
      })
      // console.log(this.data.articleList)
    },
  }
})
