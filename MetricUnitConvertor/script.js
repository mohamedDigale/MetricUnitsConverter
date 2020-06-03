


document.getElementById("kilo").onclick=function(){ 
  convert(document.getElementById("kilo").value)
}

document.getElementById("hecto").onclick=function(){ 
  convert(document.getElementById("hecto").value)
}
document.getElementById("centi").onclick=function(){ 
  convert(document.getElementById("centi").value)
}
document.getElementById("milli").onclick=function(){ 
  convert(document.getElementById("milli").value)
}
document.getElementById("mile").onclick=function(){ 
  convert(document.getElementById("mile").value)
}
document.getElementById("yard").onclick=function(){ 
  convert(document.getElementById("yard").value)
}

function convert(value){
  
  var meters=prompt("Enter the meters you want to convert")

let answer=0;
  if(value=="Kilometer"){
    answer=meters*1000
  }else if(value=="Hectometer"){
    answer=meters*100
  }else if(value=="Centimeter"){
    answer=meters/100
  }else if(value=="Millimeter"){
    answer=meters/1000
  }else if(value=="Mile"){
    answer=meters/1609
  }else if(value=="Yard"){
    answer=meters*1.094
  }

  //this deletes the previous answer
if(document.getElementById('answer').hasChildNodes&&document.getElementById('answer').firstChild!=null){
  document.getElementById('finalUnit').remove();
  }
    var h1=document.createElement('h1');
    

    var textAnswer=document.createTextNode('The answer is '+answer+" "+value)
    h1.setAttribute('id','finalUnit');
    h1.appendChild(textAnswer);
    document.getElementById('answer').appendChild(h1);
}