// pages/options/options.js
import {tagInfoList} from "../../utils/tagList"
import {optionList} from "../../utils/option-storage"
const optionlist = new optionList();
// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagOptionList :[],
    selected:false,
    markTypeList:[],
    value:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getMarkTypeList(){
    let list = optionlist.getOptionList();
    let marklist = [];
    list.map(item=>{
        item.tagList.map(item=>{
          if(item.selected){
              marklist.push({
                type:item.tag,
                tagId:item.tagId
              })
          }
        })
    })
    this.setData({
      markTypeList:marklist
    })

  },
  setStorageList(){
    optionlist.getOptionList()?"": optionlist.setOptionList(tagInfoList)
    this.setData({
      tagOptionList:optionlist.getOptionList()
      })


  },
  onTapSelected(e){
        let selected =e.detail.selected;
        let tagId = e.detail.tagId;
        let title = e.currentTarget.dataset.title;
        let list = optionlist.getOptionList();
      list.map((item)=>{
            if(item.title == title){
              item.tagList.map((item)=>{               
                    if(item.tagId == tagId){
                      item.selected =selected;
                    }
              })
            }
            // console.log(item)
        })
        optionlist.setOptionList(list)
        this.getMarkTypeList()
  },
  onLoad: function (options) {
      this.setStorageList()
      this.getMarkTypeList()
      // this._getUserInfo()
      // console.log(citylist,provinecslist,cityIdlist)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
       this.setData({
         value:'',
       })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})