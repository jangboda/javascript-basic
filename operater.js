
alert(1==1)
alert("one"="one")
alert("one"="two")
alert("one"="0")
alert(null == undefined);       //true
alert(null === undefined);      //false
alert(true == 1);               //true
alert(true === 1);              //false
alert(true == '1');             //true
alert(true === '1');            //false
 
alert(0 === -0);                //true
alert(NaN === NaN);

while(true){
    document.write('coding everybody <br />');
    
  
 for(var i = 0; i<10; i++){
     for(var j = 0; j<10; j++){
        document.write(coding everyday +i+j+ '<br />');
     }
 }   

 function numbering(){
    i = 0;
    while(i < 10){
    document.write(i);
    i += 1;
}   
}
numbering();

var member =['eogoing','k8805','dadadas']

var grades = {'egoing':10, 'k8805':20,'sorialgi':80}
for(key in grades){
    document.write("")
}

var grades = {
    'list' :{'egoing':10, 'k8805':20,'sorialgi':80},
    'show':function(){
        alert("hellow world");
    }

}
alert(grades['list']['egoing']);

var grades = {
    'list' :{'egoing':10, 'k8805':20,'sorialgi':80},
    'show':function(){
        alert("hellow world");
    }

}
grades['show']();
var grades = {
    'list' :{'egoing':10, 'k8805':20,'sorialgi':80},
    'show':function(){
        console(this.list);
    }

}
grades['show']();