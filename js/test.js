function btnclick (){
    if(window.__wxjs_environment === 'miniprogram'){
        console.log(window.__wxjs_environment === 'miniprogram')
        wx.miniProgram.navigateTo({url:'pages/index/index'})
    }
}