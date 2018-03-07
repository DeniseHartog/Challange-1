var animate = setInterval(barAnimation, 1000);
var counter = 513;

function barAnimation() {

  if(counter == 3){
    counter = 513;
  } else {
    counter = counter - 10;
  }

  document.getElementById('bar').setAttributeNS(null, 'width', counter);
 
}

