var orm = require('../config/orm')

var burgers = {
    all:function(cb) {
        orm.all('burgers', function(res) {
            cb(res)
        })
    }
}


module.exports = burgers;