/* 
* @Author: hanjiyun
* @Date:   2014-02-19 15:49:52
* @Last Modified by:   hanjiyun
* @Last Modified time: 2014-02-25 18:04:34
*/

var div = document.createElement('div');

var href = window.location.href;
var link;

if(href.indexOf('demo') > -1){
    link = '#demo';
} else if(href.indexOf('site') > -1){
    link = '#site';
}


div.innerHTML = '<div id="mondrian-backhome" style="position:fixed;top:10px;left:10px;"><a href="/'+ link +'" style="font-size:20px;color:#fff;font-family:serif;z-index:999;background:#333332;height:40px; width:40px;line-height:40px; text-align:center; display:inline-block;text-decoration:none">&lt;</a></div>'

document.body.appendChild(div)

// document.head.appendChild(div)
