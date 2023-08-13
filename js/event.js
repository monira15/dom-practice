console.log("this is separate")
// option-1:directly set on the html element

// option 2: add onclick function
function makeRed(){
    document.body.style.backgroundColor='red';
}
// option 3:
const makeblueButton=   document.getElementById('make-blue');
    makeblueButton.onclick=makeBlue;
    function makeBlue(){
        document.body.style.backgroundColor='blue'
    }
    // option-3:another
    const purpleButton=document.getElementById('make-purple');
      
    purpleButton.onclick=function makePurple(){
        document.body.style.backgroundColor='purple';
    }