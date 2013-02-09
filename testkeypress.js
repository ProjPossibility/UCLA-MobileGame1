//First try to enable rhythm based key input
//Only allow UP keypress within certain interval
var cow = new Audio("music/beep-7.wav");
var dog = new Audio("music/beep-8.wav");
//Use audio to tell when interval is open
var myTimer = setInterval(function(){Timer()},1);
var inputString = ['-', '-', '-', '-'];
var keyPressed = false;
var keyTimer = 0;
var timer = 0;
var tempoIntervals = [false,false,false,false];
//To prevent holding down of keys, reset keyTimer when key is lifted up
//only when keyTimer is <50 is the input valid (aka they did not hold it down)
function setKeyPressed()
{
        keyPressed = true;
}
function setKeyReleased()
{
        keyPressed = false;
        keyTimer = 0;
}
function Timer()
{
        timer = timer+1;
        if(keyPressed)
                keyTimer +=1;
//If timer is 1000 <= timer <= 1200, allow key input. 
        if(timer == 1000) {
                cow.play();
                tempoIntervals[0] = true;
        }
        if(timer == 1200) {
                tempoIntervals[0] = false;
                dog.play();
        }
        if(timer == 2000) {
                tempoIntervals[1] = true;
                cow.play();
        }
        if(timer == 2200) {
                tempoIntervals[1] = false;
                dog.play();
        }
        if(timer == 3000) {
                tempoIntervals[2] = true;
                cow.play();
        }
        if(timer == 3200) {
                tempoIntervals[2] = false;
                dog.play();
        }
        if(timer == 4000) {
                tempoIntervals[3] = true;
                cow.play();
        }
        if(timer == 4200) {
                tempoIntervals[3] = false;
                dog.play();
        }
        if(timer>=5000) {
                alert(inputString);
                timer = 0;
        }
        if(Key.isDown(Key.UP) &&keyTimer<50)
        {
                for(var i = 0; i<4;i++)
{
                        if(tempoIntervals[i])
                                inputString[i] = 'U';
                }
        }

}

