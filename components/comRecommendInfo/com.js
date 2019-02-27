// components/recommendInfo/com.js
import {cityList,provinecsList} from "../../utils/cityList"
import {cityIdList} from "../../utils/cityIdList"
import {WeaterData} from "../../utils/weater-data"
const citylist = cityList;
const provinecslist = provinecsList;
const cityIdlist = cityIdList;
const weaterdata = new WeaterData();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommendInfo:Object,
    magazineTypeArr:Array,
    magazineId:{
      type:Number,
      value:0,
      observer:'_setdateTitle'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
     dateTitle:'',
     imgLoading:true,
     weater:'',
     weaterBtn:true
  },

  /**
   * 组件的方法列表
   */
  attached(){
     this._setdateTitle();
     this._getUserInfo();
  },
  methods: {
      _getDte(){
        let mounthArr = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
        let dateArr = ['一日','二日','三日','四日','五日','六日','七日','八日','九日','十日','十一日','十二日','十三日','十四日','十五日','十六日','十七日','十八日','十九日','二十日','二十一日','二十二日','二十三日','二十四日','二十五日','二十六日','二十七日','二十八日','二十九日','三十日','三十一日']
        let nowdate = new Date();
        let mounth = nowdate.getMonth();
        let day = nowdate.getDate()
        return mounthArr[mounth] + dateArr[day+1]
      },
      _setdateTitle(){
        let id = this.data.magazineId
        let dateTitle = id === 0? this._getDte() : this.data.magazineTypeArr[id];
        this.setData({
          dateTitle
        })
      },
      imgLoaded(e){
        this.setData({
          imgLoading:false,
        })
      },
      _getUserInfo(){
        wx.getSetting({
          success:res=>{
            if(res.authSetting['scope.userInfo']){
              this.setData({
                weaterBtn:false
              })
            }else{
              this.setData({
                weaterBtn:true
              })
            }
              console.log(res.authSetting['scope.userInfo'])
          }
        })
        wx.getUserInfo({
          success:res=>{
            const province = provinecslist[res.userInfo.province];
            const city = citylist[res.userInfo.city];
            // console.log(province,city)
            let cityId = null
            cityIdlist.forEach(item=>{
              if(item.province === province){
                item.city.forEach(item=>{
                  if(item.cityName === city){
                    cityId = item.cityId
                  }
                })
              }
            })
           weaterdata.getWeaterData(cityId).then(res=>{
             this.setData({
               weater:res
             })
             console.log(this.data.weater)
           })
     
          }
        })
      },
  }
})
