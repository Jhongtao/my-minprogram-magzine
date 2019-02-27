// components/comImg/com.js
import {mybehavior} from "../../utils/my-behaviors";
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[mybehavior],
  properties: {
      // imgSrc:{
      //   type:String,
      //   value:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547097924745&di=900bc6d0324d2832d565c1c3e97f75c9&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F77094b36acaf2edd019ea9f38d1001e9390193b9.jpg',
      //   observer:function(newVal, oldVal, changePath){
      //     // console.log(newVal)
      //     // console.log(oldVal)
      //     // console.log(changePath)
      //   }
      // },
      // minText:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
     imgSrc:'',
     text:"",
     imgLoading:true,
    },

  /**
   * 组件的方法列表
   */
  methods: {
    imgLoaded(e){
      this.setData({
        imgLoading:false,
      })
    }
  }
})
