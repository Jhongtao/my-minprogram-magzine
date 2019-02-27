// components/comAdd/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     selected:Boolean,
     tagId:Number,
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
    onTap(){
      this.setData({
        selected:!this.data.selected
      })
      this.triggerEvent('selected',{selected:this.data.selected,
                                    tagId:this.data.tagId},{})
   },
  }
})
