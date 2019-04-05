let baseurl = 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine';
module.exports = {
    con(){
        console.log('outfunction')
    },
    getData(obj){
        wx.request({
            url:baseurl + obj.url,
            success:function(data){
                // console.log(data);
               if(data.data.code === 0){
                //    console.log(111)
                   obj.success(data.data)
               }else{
                //    console.log(222)
                   showfail();
               }
            },
            fail:function(){
                showfail()
            }
        })
     }
}
function showfail(){
    wx.showToast({
        title:'数据接受失败',
        icon:'loading'
    })
}