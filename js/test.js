function btnclick (){
    if(window.__wxjs_environment === 'miniprogram'){
        console.log(window.__wxjs_environment === 'miniprogram')
        wx.miniProgram.navigateTo({
            url:'/pages/index/index',
            success: ()=>{console.log("reLaunch Success")},
            fail: ()=>{console.log("reLaunch Fail")},
            complete: ()=>{console.log("reLaunch Final")},
        })
    }
}