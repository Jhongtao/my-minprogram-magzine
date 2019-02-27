// components/comTag/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String,
    tagId:Number
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
     onLinkto(e){
      //  console.log(e)
         wx.navigateTo({
           url:"/pages/index/index?" + e.currentTarget.dataset.id
         })
     }
  }
})
