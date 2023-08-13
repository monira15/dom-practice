console.log("this is separate")
// option-1:directly set on the html element
 

// option 2: add onclick function
// important:we will use this
/* <button onclick="makeRed()">make red</button> */
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
    // option-4:
    const makeButton=document.getElementById('make-pink');
    makeButton.addEventListener('click',makepink)
    function makepink(){
      document.body.style.backgroundColor='pink'
    }
    // option:4 aonther
    const makeGreenButton = document.getElementById('make-green');
    makeGreenButton.addEventListener('click', function makegreen(){
       document.body.style.backgroundColor = 'green';
    })

    // option:4 final
    // IMPORTANT:we will use this
    document.getElementById('make-goldenRod').addEventListener('click',function(){
        document.body.style.backgroundColor='goldenrod'
       })
      