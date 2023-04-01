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
import sounds from './sounds.js'


let isPlaying = false
let started = false

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

        sound.pressButton()

        started = true
        console.log("Button play " + timer.itsOn);
        timer.countDown()
        controls.togglePlayPause()
        console.log("Final do play " + timer.itsOn);
    })

    buttonPause.addEventListener("click", function (){
        sound.pressButton()

        timer.hold()
        controls.togglePlayPause()
    })
    
    buttonStop.addEventListener("click", function (){
        sound.pressButton()

        if(started){
            controls.togglePlayPause()
        }
        timer.hold()
        timer.resetTimer()
        started = false
    })
    
    buttonPlus.addEventListener("click", function (){
        sound.pressButton()

        timer.addMinutes()
    })
    
    buttonMinus.addEventListener("click", function (){
        sound.pressButton()

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
