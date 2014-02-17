/**
 * IndexController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */


var fs = require('fs');



var siteList = [];

var demoList = [];

function walkSite(path){  
    var dirList = fs.readdirSync(path);

    dirList.forEach(function(item){
        if(fs.statSync(path + '/' + item).isDirectory()){
            siteList.push(item);
        }
    });
}

function walkDemo(path){  
    var dirList = fs.readdirSync(path);

    dirList.forEach(function(item){
        if(fs.statSync(path + '/' + item).isDirectory()){
            demoList.push(item);
        }
    });
}

walkSite('views/site');
walkDemo('views/demo');


module.exports = {

    /**
        * Overrides for the settings in `config/controllers.js`
        * (specific to IndexController)
    */
    _config: {

    },


    index: function(req, res){
        // todo: fetch sites and demos

        // render
        res.view({
            siteList : siteList.reverse(),
            demoList : demoList.reverse()
        })
    }


};
