//capturing HTMl ELEMENTS present on viewport 

const statsdiv = document.querySelector('.stauts');
const resetdiv = document.querySelector('.reset');
const celldivs = document.querySelectorAll('.game-cell');
//console.log(statusdiv,resetdiv,celldivs);




// game variable
let gameislive= true;
let xIsNext = true;
let winner = null;


// found winner function
const winnerfunc = (i_found_winner) => {
    gameislive = false;
    winner = i_found_winner;
    console.log(winner);
    
}

//functions to check winner
const checksgamestatus = () => {

    const boxA1  = celldivs[0].classList[2];
    const boxA2 = celldivs[1].classList[2];
    const boxA3 = celldivs[2].classList[2];
    const boxA4 = celldivs[3].classList[2];
    const boxA5 = celldivs[4].classList[2];
    const boxA6 = celldivs[5].classList[2];
    const boxB1 = celldivs[6].classList[2];
    const boxB2 = celldivs[7].classList[2];
    const boxB3 = celldivs[8].classList[2];
    const boxB4= celldivs[9].classList[2];
    const boxB5 = celldivs[10].classList[2];
    const boxB6 = celldivs[11].classList[2];
    const boxC1 = celldivs[12].classList[2];
    const boxC2 = celldivs[13].classList[2];
    const boxC3 = celldivs[14].classList[2];
    const boxC4 = celldivs[15].classList[2];
    const boxC5 = celldivs[16].classList[2];
    const boxC6= celldivs[17].classList[2];
    const boxD1= celldivs[18].classList[2];
    const boxD2 = celldivs[19].classList[2];
    const boxD3 = celldivs[20].classList[2];
    const boxD4 = celldivs[21].classList[2];
    const boxD5 = celldivs[22].classList[2];
    const boxD6 = celldivs[23].classList[2];
    const boxE1 = celldivs[24].classList[2];
    const boxE2 = celldivs[25].classList[2];
    const boxE3 = celldivs[26].classList[2];
    const boxE4 = celldivs[27].classList[2];
    const boxE5 = celldivs[28].classList[2];
    const boxE6 = celldivs[29].classList[2];
    const boxF1 = celldivs[30].classList[2];
    const boxF2 = celldivs[31].classList[2];
    const boxF3 = celldivs[32].classList[2];
    const boxF4 = celldivs[33].classList[2];
    const boxF5 = celldivs[34].classList[2];
    const boxF6 = celldivs[35].classList[2];

    //console.log(box0,    box1 ,    box2 ,    box3 ,    box4 ,    box5 ,    box6 ,    box7 ,    box8 ,    box9 ,    box10,    box11,    box12,    box13,    box14,    box15,    box16,    box17,    box18,    box19,    box20,    box21,    box22,    box23,  box24,    box25,    box26,    box27,    box28,    box29,    box30,    box31,    box32,box33,box34,box35);
 
 //horizontal A line check
    if(boxA1 && boxA1 == boxA2  && boxA1==boxA3 && boxA1==boxA4){
       winnerfunc(boxA1);
    }
    else if(boxA2 && boxA2 == boxA3  && boxA2==boxA4 && boxA2==boxA5){
        winnerfunc(boxA2);;
    }
    else if(boxA3 && boxA3 == boxA4  && boxA3==boxA5 && boxA3==boxA6){
        winnerfunc(boxA3);
    }
 //horizontal B line check
    else if(boxB1 && boxB1 == boxB2  && boxB1==boxB3 && boxB1==boxB4){
       winnerfunc(boxB1);
    }
    else if(boxB2 && boxB2 == boxB3  && boxB2==boxB4 && boxB2==boxB5){
        winnerfunc(boxB2);;
    }
    else if(boxB3 && boxB3 == boxB4  && boxB3==boxB5 && boxB3==boxB6){
        winnerfunc(boxB3);
    }
 //horizontal C line check
    else if(boxC1 && boxC1 == boxC2  && boxC1==boxC3 && boxC1==boxC4){
        winnerfunc(boxC1);
     }
     else if(boxC2 && boxC2 == boxC3  && boxC2==boxC4 && boxC2==boxC5){
         winnerfunc(boxC2);;
     }
     else if(boxC3 && boxC3 == boxC4  && boxC3==boxC5 && boxC3==boxC6){
         winnerfunc(boxC3);
     }

};



// //event handlers for reset
const handlereset = (e) => {
 //console.log(e);
};


//event handler for click on cells
const handlecellclick = (e) => 
{
   // console.log(e.target.classList);
    const classList = e.target.classList;
    const location = classList[1];

    if(classList[2]=='x' || classList[2]=='o')
    {
        return;

    }
    if(xIsNext){
        classList.add('x');

        checksgamestatus();

        xIsNext=!xIsNext;
    }
    else {
        classList.add('o');

        checksgamestatus();

        xIsNext=!xIsNext;
    }
};

//event listner 
resetdiv.addEventListener('click',handlereset);

for(const celldiv of celldivs)
{
    celldiv.addEventListener('click',handlecellclick)
}
