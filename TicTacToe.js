let myboxs = document.querySelectorAll(".Box");
let resetbtn = document.querySelector("#Reset-butt");
let newGameBtn = document.querySelector("#New-butt");
let msgContainer = document.querySelector(".msg-container ");
let msg = document.querySelector("#msg");

// let arr = ["apple", "banana","orange"];
// let arr2 = [["mango","papaya"]["coconut","kiwi"]["luchi","grapes"]];

let turnO = true;// playerX, player0
// console.log ("nitn");

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];  
const resetGame = () =>{
  turnO = true;
  enabledBoxes();
  msgContainer.classList.add("hide");
} ;

myboxs.forEach((Box) => {
  Box.addEventListener("click", () => {
    console.log("Box was clicked");
    if(turnO === true){
        Box.innerText = "O";
        turnO = false;
    }else{
        Box.innerText = "x";
        turnO = true;
        
    }
    Box.disabled = true;
    checkWinner();
  });
}) ;
    
    const DisabledBoxes = () =>{
      for  (let Box of myboxs){
         Box.Disabled = true;
        
      }
    };

    const enabledBoxes = () =>{
      for  (let Box of myboxs){  
         Box.Disabled = false;
         Box.innerText=""; 
      }
    };

    
    const showWinner = (Winner) => {
      msg.innerText = `congratulation , Winner is ${Winner}`;
      msgContainer.classList.remove("hide");
      DisabledBoxes();
    };

     const  checkWinner = ()  => {
     for(let pattern of winpatterns){
     let pos1Val = myboxs[pattern[0]].innerText;
     let pos2Val = myboxs[pattern[1]].innerText;
     let pos3Val = myboxs[pattern[2]].innerText;
    
      if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
       if (pos1Val ===  pos2Val && pos2Val === pos3Val){
         showWinner (pos1Val);
         return true;
      }
     }
  }
};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
