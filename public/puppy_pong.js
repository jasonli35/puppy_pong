//this program is wrapped with event listen to make 
document.addEventListener("DOMContentLoaded", (event)=> {

    var   theBody = document.querySelector('body');
    var   theImg = document.querySelector("img");                                  
    var   theX=0, theY=0;
    var   theDeltaX=2;
    var   theDeltaY=3;
    
      //this function update the horrizontal position of the poppy picture
      function updateX() {
        theX+=theDeltaX;
        theImg.style.left=`${theX}px`;
        if(theX<0 || theX>theBody.offsetWidth-theImg.offsetWidth) {
          theDeltaX*=-1;
        }
        
      }

      var bar = document.getElementById("bar");
      //this fucntion make sure the position of the bar and mousePosition is updated as mouse move
      document.addEventListener("mousemove", movebar);
      function movebar(e){
        mousePosition = e.clientX;
        
        bar.style.left = String(mousePosition - 150).concat("px");
      }

      var score = document.getElementById("score");
      var game_over = document.getElementById("game_over_text");
      var reset = document.getElementById("reset_button");
      var numTimePlayed = document.getElementById("times_count");
      //Handle reset button is clicked
      reset.addEventListener("click", (event) => {
        game_over.style.visibility = "hidden";
        numTimePlayed.innerHTML = Number(numTimePlayed.innerHTML) + 1;
        poppy_move();
      });

      //update the vertical position of the poppy picture
      function updateY() {
        theY+=theDeltaY;
        theImg.style.top=`${theY}px`;
        var bottomReach = theY>theBody.offsetHeight-theImg.offsetHeight;
        if(bottomReach){
            var poppy_right_pos = theX + 200;
            var bar_left_pos = mousePosition - 150;
            var bar_right_pos = mousePosition + 150;
            if((bar_left_pos < poppy_right_pos && theX < bar_right_pos) || (bar_right_pos > theX && bar_left_pos < poppy_right_pos)){
                score.innerHTML = String(Number(score.innerHTML)+1);
            }
            else{
                game_over.style.visibility = "visible";
                clearTimeout(poppy_timeout);
                clearTimeout(score_timeout);
            }
        }
        if(theY<0 || theY>theBody.offsetHeight-theImg.offsetHeight) {
          theDeltaY*=-1;
        }
        
      }
      times = document.getElementById("time");
      console.log(times);

      function updateTime(){
        times.innerHTML = Number(times.innerHTML) + 1;
      }
      poppy_move();
      //This function allow poppy to start moving
      function poppy_move(){
        score.innerHTML = 0;
        times.innerHTML = 0;
        score_timeout = setInterval(updateTime,1000);
        poppy_timeout = setInterval(function() {
            updateX();
            updateY();
          }, 25);
      }

      popppy_move();

      
      



});
