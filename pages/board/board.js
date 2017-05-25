// board.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMessage:true,
    message:{"key":"eggs","msg":"我今天给你准备了一个小彩蛋",read:false}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var key = this.data.message.key
    var read =  wx.getStorageSync(key)
    if(read){
      this.setData({ showMessage:false})
    }
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },
  back:function(){
    // var key = this.data.message.key
    // wx.setStorageSync(key, "read");
    wx.navigateBack();
  },
  read: function (e) {
    var key = e.target.dataset.key;

    wx.setStorageSync(key, "read");
  }
})