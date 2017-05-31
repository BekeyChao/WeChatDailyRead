//index.js
//获取应用实例
var app = getApp();
var db = require("../../utils/modDb.js")
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      //url: '../logs/logs'
      url:'../test/test'
    })
  },
  toDailyRead:function() {
    wx.navigateTo({
      url: '../DailyRead/DailyRead',
    })
  },
  toTranslator: function () {
    wx.navigateTo({
      url: '../translate/translate',
    })
  }, 
  toBoard: function () {
    wx.navigateTo({
      url: '../board/board',
    })
  },
  onLoad: function () {
    console.log('onLoad')
    let that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    
  },
  onReady:function(){
    
  }
})
