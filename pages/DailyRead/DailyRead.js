var app = getApp();
// DailyRead.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    onButtom:0,
    translateWord:"",
    article:{},
    send:0,
    sendKey:""
  },

  /**
   * 生命周期函数--监听页面加载
   * 初始化文章数据
   */
  onLoad: function (options) {
    // var app = getApp();
    // app.globalData.article = app.globalData.article + 1;
    var article = require("../../utils/article.js");
    this.setData({
      article: article.getArticle()
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
    let nickname = app.globalData.userInfo.nickName
    if(this.data.send == 0){
      this.setData({ sendKey: nickname + new Date().getDay() + Math.round(Math.random() * 100)})
    }
    this.setData({send:this.data.send + 1})
    let db = require("../../utils/modDb.js")
    let infor = { name: nickname, data: new Date(), click: this.data.onButtom }
    db.put(this.data.sendKey, JSON.stringify(infor))
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    let nickname = app.globalData.userInfo.nickName
    if (this.data.send == 0) {
      this.setData({ sendKey: nickname + new Date().getDay() + Math.round(Math.random() * 100) })
    }
    this.setData({ send: this.data.send + 1 })
    let db = require("../../utils/modDb.js")
    let infor = { name: nickname, data: new Date(), click: this.data.onButtom }
    db.put(this.data.sendKey, JSON.stringify(infor))
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
      this.setData({
        onButtom:true
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },
  //段落翻译,段落翻译是配置提供的
  translat:function(e){
    //获取index
    var index = e.target.dataset.id;
    //获取内容与翻译
    var content = this.data.article.paragArray[index].content;
    var translate = this.data.article.paragArray[index].translate;
    if(!translate){
      translate = "不要总是依靠翻译"
    }
    //配置参数
    var param = {}
    var str = "article.paragArray["+index+"].content";
    var tra = "article.paragArray[" + index +"].translate";
    param[str] = translate;
    param[tra] = content;
    //传入参数
    this.setData(param)
  },
  translteClipboard:function(){
    //console.log("ininininininini")
    wx.navigateTo({
      url: '../translate/translate'
    })
  },
  signUp:function(){
    this.setData({ onButtom: this.data.onButtom + 1})
    // alert("今天的打卡密码是:0517")
    var msgList = ["打卡成功,我建议你不要按第二下!", "(⊙o⊙)…我建议你从上面返回", "你真的那么固执吗?","你再按一次我就对你表白了o(╯□╰)o","我喜欢你"]
    var msg = msgList[this.data.onButtom - 2] || msgList[msgList.length - 1];
    wx.showToast({
      title: msg,
      icon:'success',
      duration:2500
    })
  }
})