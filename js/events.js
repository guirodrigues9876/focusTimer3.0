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
    volumeForest,
    volumeRain,
    volumeCoffee,
    volumeFireplace
} from './elements.js'
import sounds from './sounds.js'


let isPlaying = false
let started = false

export default function ({controls, timer, sound}){
    
    // Theme Button
    buttonSun.addEventListener("click", function(){
        controls.toggleTheme()
    })
    
    buttonMoon.addEventListener("click", function(){
        controls.toggleTheme()
    })

    // Controls timer buttons
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

        if(started){
            controls.togglePlayPause()
        }
        timer.hold()
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

    // Card buttons
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

    // Volume card buttons
    volumeForest.addEventListener("input", function(){
        let audio = sound.forest;
        let volume = volumeForest.value;
        sound.setVolume(audio, volume);
    })
    
    volumeRain.addEventListener("input", function(){
        let audio = sound.rain;
        let volume = volumeRain.value;
        sound.setVolume(audio, volume);
    })
    
    volumeCoffee.addEventListener("input", function(){
        let audio = sound.coffee;
        let volume = volumeCoffee.value;
        sound.setVolume(audio, volume);
    })
    
    volumeFireplace.addEventListener("input", function(){
        let audio = sound.fireplace;
        let volume = volumeFireplace.value;
        sound.setVolume(audio, volume);
    })
}
