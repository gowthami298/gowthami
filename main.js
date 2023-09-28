 var name="my name is gow";
var number=8688860453;
var flag='true';
var arrayValues=['gow','gowtham','gowthami','reddy'];
var objValues={
    name: "gowthami reddy",
    phone: 8688860453,
    industry:"It"
};


function getName(){
     document.getElementById("name").textContent = name; 
}
function getnumber(){
    document.getElementById("number").textContent = number;
    
}
function getFlag(){
     document.getElementById("flag").textContent = flag;
}
function getArray(){
    document.getElementById("arrayValues").textContent = arrayValues;
}
function getObj(){
     //document.getElementById("objValues").textContent = objValues;
    document.getElementById("objValues").innerHTML = objValues;
    
}

function  call(){
    getName();
    getnumber();
    getFlag();
    getArray();
    getObj();
    
}
