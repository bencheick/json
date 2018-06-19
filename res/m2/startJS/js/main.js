// JavaScript Document
var start = '{"color":"yellow","Food":"bread"}';

var obj = JSON.parse(start);
//console.log(obj);

var str = JSON.stringify(obj);
//console.log(str);

//document.getElementById('message').innerHTML = obj.Food;

var data = '{"Jane":{"age":"29","degree":{"AAS":"VMI","BA":"VA"}}, "Jim":{"age":"29","degree":"MFA"}}';
var dataObj = JSON.parse(data);
console.log(dataObj);
document.getElementById('message').innerHTML = dataObj.Jane.age;