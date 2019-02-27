class optionList{
    constructor(key='optionList'){
             this.key = key
    }
    setOptionList(value){
        wx.setStorageSync(this.key,value)
    }
    getOptionList(){
        return wx.getStorageSync(this.key)
    }
}

export {optionList}