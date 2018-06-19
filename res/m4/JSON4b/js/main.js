// JavaScript Document

var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        var jsonOnject = JSON.parse(xhr.responseText);
        console.log(jsonOnject);
        
        for(i=0; i < jsonOnject.presidents.length; i++){
            console.log(jsonOnject.presidents[i].first);
            console.log(jsonOnject.presidents[i].last);
            console.log(jsonOnject.presidents[i].served)
        }
        
        for
    
    } // end if
} // end function

// JavaScript Document

/*var xhrArray = new XMLHttpRequest();
xhrArray.open('GET', "dataArray.json", true);
xhrArray.responseType = 'text';
xhrArray.send();


xhrArray.onload = function() {
    if(xhrArray.status === 200) {
        var jsonArray = JSON.parse(xhrArray.responseText);
        console.log(jsonArray);
        
    
    } 
}*/

/*var jsonObject = {"presidents":[
 {"first":"George","last":"Washington","served":"1789-1797"},{"first":"John","last":"Adams","served":"1797-1801"},
 {"first":"Thomas","last":"Jeffeson","served":"1801-1809"}
],
 "vicepresidents":[
 {"first":"John","last":"Adams"},
 {"first":"Thomas","last":"Jefferson"},
 {"first":"Aaron","last":"Burr"}
]
};
console.log(jsonObject);

var jsonArray = [
 {"first":"George","last":"Washington","served":"1789-1797"},
 {"first":"John","last":"Adams","served":"1797-1801"},
 {"first":"Thomas","last":"Jefferson","served":"1801-1809"}
];
console.log(jsonArray);*/