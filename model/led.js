var execSync = require('child_process').execSync;

module.exports={
    status: function(){
        var status = execSync('../bash/led.sh').toString();
        return {status:status}},
    detect:function(){
      var status = execSync('bash ./bash/detect.sh').toString();
      return {status:status}
    }
}
