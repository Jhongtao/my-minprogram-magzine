// components/comBtn/com.js
Component({
  /**
   * 组件的属性列表
   */

  properties: {
     openType:String,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    onUserInfo(e){
      this.setData({
        userInfo:e.detail.userInfo,
        accredit:true,
      })
      this.triggerEvent('getinfo',{
        userInfo:this.data.userInfo,
      },
      {

      })
    }
  }
})
