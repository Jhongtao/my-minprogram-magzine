// components/comNav/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    magazineTypeArr:Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
     activeId:0,
     magazineId:'magazineId0'
  },

  /**
   * 组件的方法列表
   */

  methods: {
     ontapId(e){
          let id = this._parseId(e.target.id);
          let setId = id>1?this.data.magazineTypeArr.length -1:0;      
          this.setData({
            activeId:id,
            magazineId:`magazineId${setId}`
          })
          this.triggerEvent('mytap',{data:id},{})
     },
     _parseId(id){
      return Number(id.match(/\d+/g)[0])
    },
  }
})
