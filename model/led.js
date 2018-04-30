var execSync = require('child_process').execSync;

module.exports={
    status: function(){
        var status = execSync('../bash/led.sh').toString();
        return {status:status}
    }
}
