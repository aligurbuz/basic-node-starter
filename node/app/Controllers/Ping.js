class Ping {

  index(callback) {

    //login view
    callback({"status" : "ok","connection" : "works"});
  }


}

module.exports=new Ping();