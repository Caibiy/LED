var execSync = require('child_process').execSync;

module.exports={
    status: function(){
        var status = execSync('bash ./bash/led.sh').toString();
        return {'status':Trim(status)}},
    detect:function(){
      var status = execSync('bash ./bash/detect.sh').toString();
      return {'status':Trim(status)}
    }
}
function Trim(str)
 { 
  return str.replace(/(^\s*)|(\s*$)/g, ""); 
}
