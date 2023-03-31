export default function Timer({
    minutesDisplay,
    secondsDisplay
}){

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)
    let itsOn = false
    console.log('declaração ' + itsOn)

    function updateDisplay(newMinutes, seconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
        updateMinutes(minutes)
    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function countDown(){
    
        timerTimeOut = setTimeout(function(){
            
            itsOn = true
            console.log('To no timer' + itsOn);
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <=0
            
            updateDisplay(minutes, 0)
            
            if(isFinished){
                // itsOn = false
                return
            }
            
            if( seconds <= 0){
                seconds = 60
                --minutes
            }
            
            
            updateDisplay(minutes, String(seconds -1))
            
            countDown()
        }, 1000) 
        
    }
    
    function addMinutes(){
        let Ismax = minutes === 60
        if(Ismax){
            return
        }
        minutes = minutes + 5
        updateDisplay(minutes)
    }

    function removeMinutes(){
        let Ismin = minutes === 5
        if(Ismin){
            return
        }
        minutes = minutes -5
        updateDisplay(minutes)
    }

    function hold(){
        if(itsOn){
            clearTimeout(timerTimeOut)
            // controls.togglePlayPause()

            // itsOn = false
            console.log(itsOn)
        }
        return
    }

    function resetTimer(){

        updateDisplay(5,0)
    }

    return{
        updateDisplay,
        updateMinutes,
        countDown,
        addMinutes,
        removeMinutes,
        hold,
        Timer,
        resetTimer,
        itsOn
    }

}