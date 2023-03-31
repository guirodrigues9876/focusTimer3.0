import { 
    buttonSun,
    buttonMoon,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonForest,
    buttonRain,
    buttonCoffee,
    buttonFire,
    volumeForest
} from './elements.js'


let isPlaying = false

export default function ({controls, timer, sound}){

    document.querySelector(".input")

    volumeForest.addEventListener("input", function(){
        let audio = sound.forest;
        let volume = volumeForest.value;
        sound.setVolume(audio, volume);
    })

    buttonSun.addEventListener("click", function(){
        controls.toggleTheme()
    })

    buttonMoon.addEventListener("click", function(){
        controls.toggleTheme()
    })

    buttonPlay.addEventListener("click", function (){
        console.log("To no play " + timer.itsOn);
        timer.countDown()
        controls.togglePlayPause()
        console.log("Final do play " + timer.itsOn);
    })

    buttonPause.addEventListener("click", function (){
        timer.hold()
        controls.togglePlayPause()
    })
    
    buttonStop.addEventListener("click", function (){
        console.log("To no event " + timer.itsOn);
        if(timer.itsOn){
            controls.togglePlayPause()
        }
        timer.hold()
        timer.resetTimer()
    })
    
    buttonPlus.addEventListener("click", function (){
        timer.addMinutes()
    })
    
    buttonMinus.addEventListener("click", function (){
        timer.removeMinutes()
    })   
    
    buttonForest.addEventListener("click", function (){
        controls.forestCardActive()
        sound.reset()
        sound.audioStartPause(sound.forest)
    
    })
    
    buttonRain.addEventListener("click", function (){
        controls.rainCardActive()
        sound.reset()
        sound.audioStartPause(sound.rain)
    
    })



    volumeForest.addEventListener("input", function(){
        let audio = sound.forest;
        let volume = volumeForest.value;
        sound.setVolume(audio, volume);
    })

    // volumeForest.addEventListener("input", function(){
    //     let audio = sound.forest;
    //     let volume = volumeForest.value;
    //     sound.setVolume(audio, volume);
    // })
    
    buttonCoffee.addEventListener("click", function (){
        
        controls.coffeeCardActive()
        sound.reset()
        if(isPlaying){
            sound.coffee.pause()
            isPlaying = false
        }else{      
            sound.coffee.play()
            isPlaying = true
        } 
    
    })


    
    buttonFire.addEventListener("click", function (){
        
        controls.fireCardActive()
        sound.reset()
        if(isPlaying){
            sound.fireplace.pause()
            isPlaying = false
        }else{ 
            sound.fireplace.play()
            isPlaying = true
        } 
    
    })


}
