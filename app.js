//app.js
App({
  //生命周期函数--监听小程序初始化
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  //生命周期函数--监听小程序显示
  onShow:function(){

  },
  //生命周期函数--监听小程序隐藏
  onHide:function(){
    
  },
  //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  onError:function(err){

  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    translateRequest:"https://fanyi.youdao.com/openapi.do?keyfrom=DailyRead-Wechat&key=1746786396&type=data&doctype=json&version=1.1&q=",
    //mobApi提供的key,可以实现多项功能
    mobKey:"1e0b9c1c91e79",
    //请求端口,基本访问格式为:mobPort/modal/function?key=mobKey&params=
    mobPort:"https://apicloud.mob.com/",
  },
  //访问mobApi接口,中文字符按需求自行encode
  mobRequest:function(params){
    wx.request({
      url: this.globalData.mobPort + params.url + "?key=" + this.globalData.mobKey,
      data:params.data,
      dataType:'json',
      success:function(res){
        if (typeof params.success === 'function')
          params.success(res.data)
        else
          console.log( "未定义回调函数")
      },
      fail:function(err){
        if (typeof params.fail === 'function')
          params.fail(err)
        else
          console.log(err)
      },
      complete:function(res){
        if (typeof params.complete === 'function')
          params.complete(res)
      }
    })
  },
  //打印异常
  logErr:function(msg,err){
    console.error(msg);
    if(err)
      console.log(err);
  }
})