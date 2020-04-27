var orm = require('../config/orm')

var burgers = {
    all:function(cb) {
        orm.all('burgers', function(res) {
            cb(res)
        })
    },

    eat: function(id,cb) {
        orm.eat("burgers", id, cb);
    }
    
}


module.exports = burgers;