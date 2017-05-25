// translate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{},
    inputShowed: false,
    inputVal: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log("This is onLoad")
    wx.getClipboardData({
      success: function(res) {
        if(res.data){
          that.getTranslation(res.data);
        }else{
          that.setData({
            data: {
              query: "faild",
              translation: "获取剪切板数据失败,请返回重试"
            }
          })
        }
      },
      fail: function(res) {
        alert("获取剪切板内容失败,请返回")
      }
    })
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
  //选词翻译,使用有道翻译api
  getTranslation: function (word) {
    var that = this;
    word = encodeURI(word, "UTF-8");
    var url = getApp().globalData.translateRequest + word;
    wx.request({
      url: url,
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            data: res.data
          })
        }
      },
      fail: function (err) {
        that.setData({
          data:{
            query:word,
            translation:"网络错误,请返回重试"
          }
        })
      }
    })
  },
  //
  back:function(){
    wx.navigateBack()
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  search:function(e){
    var word = e.detail.value
    console.log(word);
    this.getTranslation(word);
  }
})