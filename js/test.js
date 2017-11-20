function btnclick (){
    if(window.__wxjs_environment === 'miniprogram'){
        console.log(window.__wxjs_environment === 'miniprogram')
        wx.miniProgram.reLaunch({url:'pages/index/index'})
    }
}