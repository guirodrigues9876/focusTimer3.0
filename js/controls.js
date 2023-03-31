import { buttonForest, buttonRain, buttonCoffee, buttonFire } from "./elements.js"

export default function Controls({
    // buttonForest
}){

    // const forestCardOn = document.querySelector('.forest')

    function toggleTheme(){
        document.querySelector('body').classList.toggle('dark-theme')
        document.querySelector('.moon').classList.toggle('hide')
        document.querySelector('.sun').classList.toggle('hide')

    }

    function togglePlayPause(){
        document.querySelector('button.play').classList.toggle('hide')
        document.querySelector('button.pause').classList.toggle('hide')
    }

    function forestCardActive(){

        buttonForest.classList.toggle('card-on')

        buttonRain.classList.remove('card-on')
        buttonCoffee.classList.remove('card-on')
        buttonFire.classList.remove('card-on')

    }

    function rainCardActive(){
        buttonRain.classList.toggle('card-on')

        buttonForest.classList.remove('card-on')
        buttonCoffee.classList.remove('card-on')
        buttonFire.classList.remove('card-on')
    }

    function coffeeCardActive(){
        buttonCoffee.classList.toggle('card-on')

        buttonForest.classList.remove('card-on')
        buttonRain.classList.remove('card-on')
        buttonFire.classList.remove('card-on')

    }

    function fireCardActive(){
        buttonFire.classList.toggle('card-on')

        buttonForest.classList.remove('card-on')
        buttonCoffee.classList.remove('card-on')
        buttonRain.classList.remove('card-on')
    }

    
    return{
        forestCardActive,
        rainCardActive,
        coffeeCardActive,
        fireCardActive,
        toggleTheme,
        togglePlayPause
    }
}
