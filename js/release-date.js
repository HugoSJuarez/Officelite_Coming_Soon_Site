const releaseDate = new Date("31 August 2023 00:00:00");
const releaseDateText = document.querySelector(".release-date");
const releaseDateTextOptions = { day: 'numeric', month: 'short', year: 'numeric'};

releaseDateText.innerText = (releaseDate.toLocaleDateString("en-GB", releaseDateTextOptions));

let timeLeft=[]; //[seconds, minutes, hours, days, 1] The last 1 is for it to give me the time left as days 
let timeAux;
const timeForEachToPass = [1000, 60, 60, 24];

function convertMiliToDays(mili) {
    timeLeft=[];
    if (mili<0) {
        timeLeft=["00", "00", "00", "00"];
    }
    else{
        for(let i=0; i<(timeForEachToPass.length-1); i++){
            mili/= timeForEachToPass[i];
            timeAux = Math.floor( mili%timeForEachToPass[i+1] );
            mili-=timeAux;
            timeAux = timeAux.toString();
            timeLeft.push( ( timeAux < 10 ) ? ( "0"+timeAux ) : timeAux );
        }
        
        timeLeft.push(Math.floor(mili/timeForEachToPass[timeForEachToPass.length-1]));
        timeLeft.reverse();
    }
}


const timeText = document.querySelectorAll(".number");

setInterval(()=>{
    let today = new Date();
    convertMiliToDays(releaseDate-today);
    timeText.forEach((text, i)=>{
        text.innerText=timeLeft[i];
    })
}, 1000)
