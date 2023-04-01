export default function(){


    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const forest = new Audio("./sounds/Floresta.wav")
    const rain = new Audio("./sounds/Chuva.wav")
    const coffee = new Audio("./sounds/Cafeteria.wav")
    const fireplace = new Audio("./sounds/lareira.wav")
    let isPlaying = false

    forest.loop = true;
    rain.loop = true;
    coffee.loop = true;
    fireplace.loop = true;
    let forestIsPlaying = false;

    let whoIsPlaying = ' ';

    function audioStartPause(audio){
        console.log(whoIsPlaying);
        if(whoIsPlaying.includes(audio.src)){
            audio.pause() 
            whoIsPlaying = ''
        } else { 
            whoIsPlaying = ''
            audio.play()
            whoIsPlaying = audio.src
        } 

    }

    function pressButton(){
        buttonPressAudio.play()
    }
    
    function forestAudioStart(audio){
        audioStartPause(audio)
      
    }

   

    function rainAudioStart(){

        // if(isPlaying){
        //     reset()
        //     rain.pause()
        //     isPlaying = false
        // }else{
            rain.play()
        //     isPlaying = true
        // }
    }

    function reset(audio){

        // audio.

        forest.pause()
        rain.pause()
        coffee.pause()
        fireplace.pause()
    
    }

    function setVolume(audio, volume){
        audio.volume = volume / 100;
    }

    return{
        reset,
        forest,
        rain,
        coffee,
        fireplace,
        forestAudioStart,
        rainAudioStart,
        setVolume,
        audioStartPause,
        pressButton
    }

}