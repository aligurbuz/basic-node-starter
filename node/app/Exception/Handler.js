class Handler {

  index(callback,message) {

    //login view
    callback({"status" : false,"errorMessage" : message});
  }


}

module.exports=new Handler();