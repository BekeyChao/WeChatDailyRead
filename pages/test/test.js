import Base64 from '../../lib/we-base64.js'
// test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res:[{v:"开发测试专用"}]
  },
  bindTap:function(e){
    var db = require('../../utils/modDb.js')
    db.get('my')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  getRes:function(e){
    if (e.detail.value != "520"){
      // this.setData({res:"开发测试专用"})
      return false;
    }
    let that = this
    let db = require("../../utils/modDb.js")
    db.findAll(function(data){
      that.setData({res:data.data})
    })
  }
})