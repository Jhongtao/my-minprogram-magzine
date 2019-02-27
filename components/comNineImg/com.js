// components/comNineImg/com.js
import {mybehavior} from "../../utils/my-behaviors"
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[mybehavior],
  properties: {
      // mainTitle:String,
      // imgSrc:Array,
      // imgNum:Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
      
  },
  lifetimes: {
    attached() {
      //  this.setData({
      //    imgNum:this.data.imgSrcArr.length,
      //  })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //在新页面中全屏预览图片
     imgShow(e){
       let imgArr = this.data.imgSrc;
       let index = e.currentTarget.dataset.index;
        wx.previewImage({
          current:imgArr[index],
          urls: imgArr,
          // success(){
          // }
        })
     }
  }
})
