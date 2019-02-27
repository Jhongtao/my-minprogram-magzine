class Request{
    constructor(baseUrl){
      this.baseUrl = baseUrl;
    }
    getData({url, method="GET", data={}}){
        let baseUrl = this.baseUrl;
       return new Promise((resolve, reject)=>{
        wx.request({
            url:baseUrl + url,
            method:method,
            data:data,
            success(res){
                if(res.data.code == 0){
                    resolve(res.data.data)
                }else if(!res.data.code && res.statusCode == 200){
                    resolve(res.data)
                }else{
                    Err('code is undefiend')
                }
            },
            fail(err){
                Err(err)
                reject(err)
            }
          }) 
       })
    }
}
function Err(err){
    wx.showToast({
        tite:`${err}`,
        icon:"loading",
        duration:1000

    })
}
export {Request}