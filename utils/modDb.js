//modDb.js 负责管理k-v储存
import Base64 from '../lib/we-base64.js'
module.exports = {
  put:put,
  get:get,
  del:del,
  findAll:findAll
}
var app = getApp();
var dTable = "userLogin";
function put(k,v){
  k = Base64.encode(k,true);
  v = Base64.encode(v,true);
  app.mobRequest({
    url:'ucache/put',
    data:{k:k,v:v,table:dTable},
    success:function(data){
      if(data.retCode != "200"){
        app.logErr("k-v储存失败,原因"+data.msg);
        return false;
      }
      console.info("储存成功")
    }
  })
}

function get(k,callback){
  k = Base64.encode(k,true)
  app.mobRequest({
    url:"ucache/get",
    data:{k:k,table:dTable},
    success:function(data){
      if(data.retCode != "200"){
        app.logErr("查询失败,原因"+data.msg)
        return false;
      }
      let v = data.result.v
      if(typeof callback === "function"){
        callback.call(v)
      }else {
        app.logErr("未定义回调函数")
      }
    }
  })
}

function del(k){
  k = Base64.encode(k,true)
  app.mobRequest({
    url:"ucache/del",
    data:{k:k,table:dTable},
    success:function(data){
      if (data.retCode != "200") {
        app.logErr("删除失败,原因" + data.msg)
        return false;
      }
      console.info("删除成功")
    }
  })
}

function findAll(callback,page,size){
  app.mobRequest({
    url:"ucache/getall",
    data:{table:dTable,page:page || 1,size:size || 20},
    success:function(data){
      if (data.retCode != "200") {
        app.logErr("查询失败,原因" + data.msg)
        return false;
      }
      if(typeof callback === 'function'){
        console.log(data.result)
        callback(data.result)
      }else {
        app.logErr("未定义回调函数")
      }
    }
  })
}