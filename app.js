// Class lai . ra Id lai #
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");


let turnO = true; //true=O aucha else x ko turn
let count =0; // Added variable to track the number of moves
//storing winning patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],   
    [2,4,6],   
    [3,4,5],   
    [6,7,8],   
];

const resetGame= () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
      // HigherLevelFunction   
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("button was clicked");
        if(turnO){
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count ==9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


const disableBoxes= ( )=>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]); stores index of the winning pattern as they are also stored in form of arrays in winPatterns matlab patterns ma winning indexes of the boxes huncha.
            let pos1Val =boxes[pattern[0]].innerText;
            let pos2Val =boxes[pattern[1]].innerText; 
            let pos3Val =boxes[pattern[2]].innerText;
    
            //if boxes haru empty chaina bhane matra kam gar
            if(pos1Val!=" " && pos2Val!="" && pos3Val!=" "){
                if (pos1Val===pos2Val && pos2Val===pos3Val){
                    console.log("WINNER!", pos1Val);
                    showWinner(pos1Val);
                }
            }
        }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
