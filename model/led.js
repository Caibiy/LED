var execSync = require('child_process').execSync;

module.exports=function(){
    status:function(){
        var status = execSync('../bash/led.sh').toString();
        return {status:status}
    }

}