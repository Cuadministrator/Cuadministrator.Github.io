function btnclick (){
    if(window.__wxjs_environment === 'miniprogram'){
        console.log(window.__wxjs_environment === 'miniprogram')
        wx.miniProgram.navigateTo({
            url:'/pages/inquiry/inquiry?inquiryKey=5564330985548330207&uuid=f7723935-21b2-4a67-84c1-57ec05122929&categoryId=1',
            success: ()=>{console.log("navigateTo Success")},
            fail: ()=>{console.log("navigateTo Fail")},
            complete: ()=>{console.log("navigateTo Final")},
        })
}