let myInput=document.getElementById('r1');
let pass=document.getElementById('r2');
let box=document.getElementById('c3');
function fxn() {
  
    if((myInput && myInput.value) && (pass && pass.value) && (box.checked!=false))
        {
            location=window.open("https://www.google.com")
        }
        else{
            alert("Field is empty");
        }
      
}



