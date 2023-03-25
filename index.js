let x = true;
let x_wins = false;
let y_wins = false;
let comp = true;
let x_wcount = 0;
let y_wcount = 0;
let draw = 0;
let x_array = [];
let y_array = [];
let main = [];

const timer = ms => new Promise(res=>setTimeout(res,ms));


async function wait(){
    await timer(1000);
}
    

function Onclick(id){
    if(x==true && comp==true && !x_array.includes(id) && !y_array.includes(id) && x_wins == false && y_wins == false){
        document.getElementById(id).innerHTML = 'X';
        let audio = document.getElementById('audio');
        document.getElementById('P1').style.color = 'rgb(49, 49, 49)';
        document.getElementById('P2').style.color = 'white';

        document.getElementById('player_xscore').style.color = 'rgb(49, 49, 49)';
        document.getElementById('player_yscore').style.color = 'white';
        audio.pause();
        audio.play();
        x_array.push(id);
        main.push(id);
        console.log(main);
        x_array.sort();
        

        x = false;
 
       
 
        if(x_array.includes('1') && x_array.includes('4') && x_array.includes('7')){
         document.getElementById('1').style.color = "rgb(216, 15, 216)";
         document.getElementById('2').style.color = "gray";
         document.getElementById('3').style.color = "gray";
         document.getElementById('4').style.color = "rgb(216, 15, 216)";
         document.getElementById('5').style.color = "gray";
         document.getElementById('6').style.color = "gray";
         document.getElementById('7').style.color = "rgb(216, 15, 216)";
         document.getElementById('8').style.color = "gray";
         document.getElementById('9').style.color = "gray";
         x_wins = true;
         x_wcount ++;
         var score = document.getElementById('player_xscore');
         score.innerHTML = x_wcount;
 
        }
 
        if(x_array.includes('2') && x_array.includes('5') && x_array.includes('8')){
         document.getElementById('1').style.color = "gray";
         document.getElementById('2').style.color = "rgb(216, 15, 216)";
         document.getElementById('3').style.color = "gray";
         document.getElementById('4').style.color = "gray";
         document.getElementById('5').style.color = "rgb(216, 15, 216)";
         document.getElementById('6').style.color = "gray";
         document.getElementById('7').style.color = "gray";
         document.getElementById('8').style.color = "rgb(216, 15, 216)";
         document.getElementById('9').style.color = "gray";
         x_wins = true;
         x_wcount ++;
         var score = document.getElementById('player_xscore');
         score.innerHTML = x_wcount;
        }
 
        if(x_array.includes('3') && x_array.includes('6') && x_array.includes('9')){
         document.getElementById('1').style.color = "gray";
         document.getElementById('2').style.color = "gray";
         document.getElementById('3').style.color = "rgb(216, 15, 216)";
         document.getElementById('4').style.color = "gray";
         document.getElementById('5').style.color = "gray";
         document.getElementById('6').style.color = "rgb(216, 15, 216)";
         document.getElementById('7').style.color = "gray";
         document.getElementById('8').style.color = "gray";
         document.getElementById('9').style.color = "rgb(216, 15, 216)";
         x_wins = true;
         x_wcount ++;
         var score = document.getElementById('player_xscore');
         score.innerHTML = x_wcount;
        }
 
 
        if(x_array.includes('1') && x_array.includes('2') && x_array.includes('3')){
         document.getElementById('1').style.color = "rgb(216, 15, 216)";
         document.getElementById('2').style.color = "rgb(216, 15, 216)";
         document.getElementById('3').style.color = "rgb(216, 15, 216)";
         document.getElementById('4').style.color = "gray";
         document.getElementById('5').style.color = "gray";
         document.getElementById('6').style.color = "gray";
         document.getElementById('7').style.color = "gray";
         document.getElementById('8').style.color = "gray";
         document.getElementById('9').style.color = "gray";
         x_wins = true;
         x_wcount ++;
         var score = document.getElementById('player_xscore');
         score.innerHTML = x_wcount;
        }
 
        if(x_array.includes('4') && x_array.includes('5') && x_array.includes('6')){
         document.getElementById('1').style.color = "gray";
         document.getElementById('2').style.color = "gray";
         document.getElementById('3').style.color = "gray";
         document.getElementById('4').style.color = "rgb(216, 15, 216)";
         document.getElementById('5').style.color = "rgb(216, 15, 216)";
         document.getElementById('6').style.color = "rgb(216, 15, 216)";
         document.getElementById('7').style.color = "gray";
         document.getElementById('8').style.color = "gray";
         document.getElementById('9').style.color = "gray";
         x_wins = true;
         x_wcount ++;
         var score = document.getElementById('player_xscore');
         score.innerHTML = x_wcount;
        }
 
        if(x_array.includes('7') && x_array.includes('8') && x_array.includes('9')){
         document.getElementById('1').style.color = "gray";
         document.getElementById('2').style.color = "gray";
         document.getElementById('3').style.color = "gray";
         document.getElementById('4').style.color = "gray";
         document.getElementById('5').style.color = "gray";
         document.getElementById('6').style.color = "gray";
         document.getElementById('7').style.color = "rgb(216, 15, 216)";
         document.getElementById('8').style.color = "rgb(216, 15, 216)";
         document.getElementById('9').style.color = "rgb(216, 15, 216)";
         x_wins = true;
         x_wcount ++;
         var score = document.getElementById('player_xscore');
         score.innerHTML = x_wcount;
        }
 
 
        if(x_array.includes('1') && x_array.includes('5') && x_array.includes('9')){
         document.getElementById('1').style.color = "rgb(216, 15, 216)";
         document.getElementById('2').style.color = "gray";
         document.getElementById('3').style.color = "gray";
         document.getElementById('4').style.color = "gray";
         document.getElementById('5').style.color = "rgb(216, 15, 216)";
         document.getElementById('6').style.color = "gray";
         document.getElementById('7').style.color = "gray";
         document.getElementById('8').style.color = "gray";
         document.getElementById('9').style.color = "rgb(216, 15, 216)";
         x_wins = true;
         x_wcount ++;
         var score = document.getElementById('player_xscore');
         score.innerHTML = x_wcount;
        }
 
        if(x_array.includes('3') && x_array.includes('5') && x_array.includes('7')){
         document.getElementById('1').style.color = "gray";
         document.getElementById('2').style.color = "gray";
         document.getElementById('3').style.color = "rgb(216, 15, 216)";
         document.getElementById('4').style.color = "gray";
         document.getElementById('5').style.color = "rgb(216, 15, 216)";
         document.getElementById('6').style.color = "gray";
         document.getElementById('7').style.color = "rgb(216, 15, 216)";
         document.getElementById('8').style.color = "gray";
         document.getElementById('9').style.color = "gray";
         x_wins = true;
         x_wcount ++;
         var score = document.getElementById('player_xscore');
         score.innerHTML = x_wcount;
        }

        checkdraw();
        compplay();
 
        
 
        
     }

   else if(x==true && !x_array.includes(id) && !y_array.includes(id) && x_wins == false && y_wins == false){
       document.getElementById(id).innerHTML = 'X';
       let audio = document.getElementById('audio');
       document.getElementById('P1').style.color = 'rgb(49, 49, 49)';
       document.getElementById('P2').style.color = 'white';

       document.getElementById('player_xscore').style.color = 'rgb(49, 49, 49)';
       document.getElementById('player_yscore').style.color = 'white';
       audio.pause();
       audio.play();
       x_array.push(id);
       main.push(id);
       console.log(main);
       x_array.sort();
       x = false;

      

       if(x_array.includes('1') && x_array.includes('4') && x_array.includes('7')){
        document.getElementById('1').style.color = "rgb(216, 15, 216)";
        document.getElementById('2').style.color = "gray";
        document.getElementById('3').style.color = "gray";
        document.getElementById('4').style.color = "rgb(216, 15, 216)";
        document.getElementById('5').style.color = "gray";
        document.getElementById('6').style.color = "gray";
        document.getElementById('7').style.color = "rgb(216, 15, 216)";
        document.getElementById('8').style.color = "gray";
        document.getElementById('9').style.color = "gray";
        x_wins = true;
        x_wcount ++;
        var score = document.getElementById('player_xscore');
        score.innerHTML = x_wcount;

       }

       if(x_array.includes('2') && x_array.includes('5') && x_array.includes('8')){
        document.getElementById('1').style.color = "gray";
        document.getElementById('2').style.color = "rgb(216, 15, 216)";
        document.getElementById('3').style.color = "gray";
        document.getElementById('4').style.color = "gray";
        document.getElementById('5').style.color = "rgb(216, 15, 216)";
        document.getElementById('6').style.color = "gray";
        document.getElementById('7').style.color = "gray";
        document.getElementById('8').style.color = "rgb(216, 15, 216)";
        document.getElementById('9').style.color = "gray";
        x_wins = true;
        x_wcount ++;
        var score = document.getElementById('player_xscore');
        score.innerHTML = x_wcount;
       }

       if(x_array.includes('3') && x_array.includes('6') && x_array.includes('9')){
        document.getElementById('1').style.color = "gray";
        document.getElementById('2').style.color = "gray";
        document.getElementById('3').style.color = "rgb(216, 15, 216)";
        document.getElementById('4').style.color = "gray";
        document.getElementById('5').style.color = "gray";
        document.getElementById('6').style.color = "rgb(216, 15, 216)";
        document.getElementById('7').style.color = "gray";
        document.getElementById('8').style.color = "gray";
        document.getElementById('9').style.color ="rgb(216, 15, 216)";
        x_wins = true;
        x_wcount ++;
        var score = document.getElementById('player_xscore');
        score.innerHTML = x_wcount;
       }


       if(x_array.includes('1') && x_array.includes('2') && x_array.includes('3')){
        document.getElementById('1').style.color = "rgb(216, 15, 216)";
        document.getElementById('2').style.color = "rgb(216, 15, 216)";
        document.getElementById('3').style.color = "rgb(216, 15, 216)";
        document.getElementById('4').style.color = "gray";
        document.getElementById('5').style.color = "gray";
        document.getElementById('6').style.color = "gray";
        document.getElementById('7').style.color = "gray";
        document.getElementById('8').style.color = "gray";
        document.getElementById('9').style.color = "gray";
        x_wins = true;
        x_wcount ++;
        var score = document.getElementById('player_xscore');
        score.innerHTML = x_wcount;
       }

       if(x_array.includes('4') && x_array.includes('5') && x_array.includes('6')){
        document.getElementById('1').style.color = "gray";
        document.getElementById('2').style.color = "gray";
        document.getElementById('3').style.color = "gray";
        document.getElementById('4').style.color = "rgb(216, 15, 216)";
        document.getElementById('5').style.color = "rgb(216, 15, 216)";
        document.getElementById('6').style.color ="rgb(216, 15, 216)";
        document.getElementById('7').style.color = "gray";
        document.getElementById('8').style.color = "gray";
        document.getElementById('9').style.color = "gray";
        x_wins = true;
        x_wcount ++;
        var score = document.getElementById('player_xscore');
        score.innerHTML = x_wcount;
       }

       if(x_array.includes('7') && x_array.includes('8') && x_array.includes('9')){
        document.getElementById('1').style.color = "gray";
        document.getElementById('2').style.color = "gray";
        document.getElementById('3').style.color = "gray";
        document.getElementById('4').style.color = "gray";
        document.getElementById('5').style.color = "gray";
        document.getElementById('6').style.color = "gray";
        document.getElementById('7').style.color = "rgb(216, 15, 216)";
        document.getElementById('8').style.color = "rgb(216, 15, 216)";
        document.getElementById('9').style.color = "rgb(216, 15, 216)";
        x_wins = true;
        x_wcount ++;
        var score = document.getElementById('player_xscore');
        score.innerHTML = x_wcount;
       }


       if(x_array.includes('1') && x_array.includes('5') && x_array.includes('9')){
        document.getElementById('1').style.color = "rgb(216, 15, 216)";
        document.getElementById('2').style.color = "gray";
        document.getElementById('3').style.color = "gray";
        document.getElementById('4').style.color = "gray";
        document.getElementById('5').style.color = "rgb(216, 15, 216)";
        document.getElementById('6').style.color = "gray";
        document.getElementById('7').style.color = "gray";
        document.getElementById('8').style.color = "gray";
        document.getElementById('9').style.color = "rgb(216, 15, 216)";
        x_wins = true;
        x_wcount ++;
        var score = document.getElementById('player_xscore');
        score.innerHTML = x_wcount;
       }

       if(x_array.includes('3') && x_array.includes('5') && x_array.includes('7')){
        document.getElementById('1').style.color = "gray";
        document.getElementById('2').style.color = "gray";
        document.getElementById('3').style.color = "rgb(216, 15, 216)";
        document.getElementById('4').style.color = "gray";
        document.getElementById('5').style.color = "rgb(216, 15, 216)";
        document.getElementById('6').style.color = "gray";
        document.getElementById('7').style.color = "rgb(216, 15, 216)";
        document.getElementById('8').style.color = "gray";
        document.getElementById('9').style.color = "gray";
        x_wins = true;
        x_wcount ++;
        var score = document.getElementById('player_xscore');
        score.innerHTML = x_wcount;
       }

       

       checkdraw();

       
    }


    else if(x==false &&  !y_array.includes(id) && !x_array.includes(id) && y_wins == false && x_wins == false){
        document.getElementById(id).innerHTML = 'O';
        x = true;
        document.getElementById('P1').style.color = 'white';
        document.getElementById('P2').style.color = 'rgb(49, 49, 49)';
        document.getElementById('player_xscore').style.color = 'white';
        document.getElementById('player_yscore').style.color = 'rgb(49, 49, 49)';
        let audio = document.getElementById('audio');
        audio.pause();
        audio.play();
        y_array.push(id);
        main.push(id);
        y_array.sort();

        if(y_array.includes('1') && y_array.includes('4') && y_array.includes('7')){
            document.getElementById('1').style.color = "rgb(216, 15, 216)";
            document.getElementById('2').style.color = "gray";
            document.getElementById('3').style.color = "gray";
            document.getElementById('4').style.color = "rgb(216, 15, 216)";
            document.getElementById('5').style.color = "gray";
            document.getElementById('6').style.color = "gray";
            document.getElementById('7').style.color = "rgb(216, 15, 216)";
            document.getElementById('8').style.color = "gray";
            document.getElementById('9').style.color = "gray";
            y_wins = true;
            y_wcount += 1;
            var score = document.getElementById('player_yscore');
            score.innerHTML = y_wcount;
           }
    
           if(y_array.includes('2') && y_array.includes('5') && y_array.includes('8')){
            document.getElementById('1').style.color = "gray";
            document.getElementById('2').style.color = "rgb(216, 15, 216)";
            document.getElementById('3').style.color = "gray";
            document.getElementById('4').style.color = "gray";
            document.getElementById('5').style.color = "rgb(216, 15, 216)";
            document.getElementById('6').style.color = "gray";
            document.getElementById('7').style.color = "gray";
            document.getElementById('8').style.color = "rgb(216, 15, 216)";
            document.getElementById('9').style.color = "gray";
            y_wins = true;
            y_wcount += 1;
            var score = document.getElementById('player_yscore');
            score.innerHTML = y_wcount;
           }
    
           if(y_array.includes('3') && y_array.includes('6') && y_array.includes('9')){
            document.getElementById('1').style.color = "gray";
            document.getElementById('2').style.color = "gray";
            document.getElementById('3').style.color = "rgb(216, 15, 216)";
            document.getElementById('4').style.color = "gray";
            document.getElementById('5').style.color = "gray";
            document.getElementById('6').style.color = "rgb(216, 15, 216)";
            document.getElementById('7').style.color = "gray";
            document.getElementById('8').style.color = "gray";
            document.getElementById('9').style.color = "rgb(216, 15, 216)";
            y_wins = true;
            y_wcount += 1;
            var score = document.getElementById('player_yscore');
            score.innerHTML = y_wcount;
           }
    
    
           if(y_array.includes('1') && y_array.includes('2') && y_array.includes('3')){
            document.getElementById('1').style.color = "rgb(216, 15, 216)";
            document.getElementById('2').style.color = "rgb(216, 15, 216)";
            document.getElementById('3').style.color = "rgb(216, 15, 216)";
            document.getElementById('4').style.color = "gray";
            document.getElementById('5').style.color = "gray";
            document.getElementById('6').style.color = "gray";
            document.getElementById('7').style.color = "gray";
            document.getElementById('8').style.color = "gray";
            document.getElementById('9').style.color = "gray";
            y_wins = true;
            y_wcount += 1;
            var score = document.getElementById('player_yscore');
            score.innerHTML = y_wcount;
           }
    
           if(y_array.includes('4') && y_array.includes('5') && y_array.includes('6')){
            document.getElementById('1').style.color = "gray";
            document.getElementById('2').style.color = "gray";
            document.getElementById('3').style.color = "gray";
            document.getElementById('4').style.color = "rgb(216, 15, 216)";
            document.getElementById('5').style.color = "rgb(216, 15, 216)";
            document.getElementById('6').style.color = "rgb(216, 15, 216)";
            document.getElementById('7').style.color = "gray";
            document.getElementById('8').style.color = "gray";
            document.getElementById('9').style.color = "gray";
            y_wins = true;
            y_wcount += 1;
            var score = document.getElementById('player_yscore');
            score.innerHTML = y_wcount;
           }
    
           if(y_array.includes('7') && y_array.includes('8') && y_array.includes('9')){
            document.getElementById('1').style.color = "gray";
            document.getElementById('2').style.color = "gray";
            document.getElementById('3').style.color = "gray";
            document.getElementById('4').style.color = "gray";
            document.getElementById('5').style.color = "gray";
            document.getElementById('6').style.color = "gray";
            document.getElementById('7').style.color = "rgb(216, 15, 216)";
            document.getElementById('8').style.color = "rgb(216, 15, 216)";
            document.getElementById('9').style.color = "rgb(216, 15, 216)";
            y_wins = true;
            y_wcount += 1;
            var score = document.getElementById('player_yscore');
            score.innerHTML = y_wcount;
           }
    
    
           if(y_array.includes('1') && y_array.includes('5') && y_array.includes('9')){
            document.getElementById('1').style.color = "rgb(216, 15, 216)";
            document.getElementById('2').style.color = "gray";
            document.getElementById('3').style.color = "gray";
            document.getElementById('4').style.color = "gray";
            document.getElementById('5').style.color = "rgb(216, 15, 216)";
            document.getElementById('6').style.color = "gray";
            document.getElementById('7').style.color = "gray";
            document.getElementById('8').style.color = "gray";
            document.getElementById('9').style.color = "rgb(216, 15, 216)";
            y_wins = true;
            y_wcount += 1;
            var score = document.getElementById('player_yscore');
            score.innerHTML = y_wcount;
           }
    
           if(y_array.includes('3') && y_array.includes('5') && y_array.includes('7')){
            document.getElementById('1').style.color = "gray";
            document.getElementById('2').style.color = "gray";
            document.getElementById('3').style.color = "rgb(216, 15, 216)";
            document.getElementById('4').style.color = "gray";
            document.getElementById('5').style.color = "rgb(216, 15, 216)";
            document.getElementById('6').style.color = "gray";
            document.getElementById('7').style.color = "rgb(216, 15, 216)";
            document.getElementById('8').style.color = "gray";
            document.getElementById('9').style.color = "gray";
            y_wins = true;
            y_wcount += 1;
            var score = document.getElementById('player_yscore');
            score.innerHTML = y_wcount;
           }
           checkdraw();
    }
   
}

async function compplay(){
    await wait()
    let id = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    let randomIndex = Math.floor(Math.random() * id.length);
    let item = id[randomIndex]
    if(main.includes(item)){
        compplay()
    }
    else{
        Onclick(id[randomIndex]);
    }
    
    
}

function checkdraw(){
    if(main.length == 9 && x_wins == false && y_wins==false){
        draw ++;
        var score = document.getElementById('draw_score');
        score.innerHTML = draw;
    }
    else{
        return;
    }
}

function playAgain(){
    main = [];
    x_array = [];
    y_array = [];
    x_wins = false;
    y_wins = false;
    x = true;
    document.getElementById('P1').style.color = "white";
    document.getElementById('P2').style.color = 'rgb(49, 49, 49)';


    document.getElementById('player_xscore').style.color = 'white';
    document.getElementById('player_yscore').style.color = 'rgb(49, 49, 49)';
    
    document.getElementById('1').style.color = "black";
    document.getElementById('2').style.color = "black";
    document.getElementById('3').style.color = "black";
    document.getElementById('4').style.color = "black";
    document.getElementById('5').style.color = "black";
    document.getElementById('6').style.color = "black";
    document.getElementById('7').style.color = "black";
    document.getElementById('8').style.color = "black";
    document.getElementById('9').style.color = "black";

    document.getElementById('1').innerHTML = "";
    document.getElementById('2').innerHTML = "";
    document.getElementById('3').innerHTML = "";
    document.getElementById('4').innerHTML = "";
    document.getElementById('5').innerHTML = "";
    document.getElementById('6').innerHTML = "";
    document.getElementById('7').innerHTML = "";
    document.getElementById('8').innerHTML = "";
    document.getElementById('9').innerHTML = "";
}

function changeMode(){
    if(comp == true){
         x_wcount = 0;
         y_wcount = 0;
         draw = 0;
         var score = document.getElementById('player_xscore');
         score.innerHTML = x_wcount;
         var score = document.getElementById('player_yscore');
         score.innerHTML = y_wcount;
         var score = document.getElementById('draw_score');
        score.innerHTML = draw;
        playAgain();
        comp = false;
        document.getElementById('mode').innerHTML = 'Play with Computer'
        document.getElementById('P2').innerHTML = 'Player-2 (O)'
        document.getElementById('P1').innerHTML = 'Player-1 (X)'
    }

    else{
        var score = document.getElementById('player_xscore');
         score.innerHTML = x_wcount;
         var score = document.getElementById('player_yscore');
         score.innerHTML = y_wcount;
         var score = document.getElementById('draw_score');
        score.innerHTML = draw;
        x_wcount = 0;
         y_wcount = 0;
         draw = 0;
        playAgain();
        comp = true;
        document.getElementById('mode').innerHTML = 'Two Player'
        document.getElementById('P2').innerHTML = 'Computer (O)'
        document.getElementById('P1').innerHTML = 'Player (X)'
    }
}

