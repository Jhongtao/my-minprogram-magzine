// components/search/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value:String,
  },

  /**
   * 组件的初始数据
   */
  attached(){

  },

  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _jumpTo(data){
      // console.log(data)
      if(data !== '读书'){
        wx.showToast({
          title:"只能搜索读书",
          icon:'none'
        })
        return
      }
       wx.navigateTo({
         url:`/pages/search/search?searchUrl=${data}`
       })
    },
    onBlur(e){
        let value = e.detail.value;
        this.setData({
          value
        })
    },
    onTap(e){
      this._jumpTo(e.detail.value || this.data.value)
    }
  }
})
