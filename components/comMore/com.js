// components/comMore/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
     onShowMore(){
       wx.showActionSheet({
         itemList:['内容已过期',`内容和心里不相关`,`不再显示来自心里的内容`],
         success(){
           wx.showToast({
             title:"发送成功",
             icon:'success',
             duraion:1000,
           })
         },
         fail(){
          wx.showToast({
            title:"发送失败",
            icon:'none',
            duraion:1000
          })
         }
       })
     }
  }
})
