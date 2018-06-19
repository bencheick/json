// JavaScript Document
var xhr = new XMLHttpRequest();
xhr.open('GET','data.json',true);

xhr.send();

xhr.onreadystatechange = function(){
    console.log(xhr);  
    console.log(xhr.readyState);
    console.log(xhr.status);
}

xhr.onload =  function(){
    if(xhr.status==200){
        var stuff = JSON.parse(xhr.responseText)
        console.log(stuff);
    }
}