const slides = document.querySelectorAll(".slide")

const current = document.querySelector(".current")  

const currentBall = document.querySelector(".current-ball")

const prevBTN  = document.querySelector("#prev-btn")

const balls = document.querySelectorAll(".ball")

const auto = true

const nextBTN = document.querySelector("#next-btn")

const intervalTime = 5000

let nextInterval 



const nextSlide = () =>{

       current.classList.remove("current")


       if (current.nextElementSibling) {
           
            current.nextElementSibling.classList.add("current")

       } else {

            slides[0].classList.add("current")                                
           
       }



       currentBall.classList.remove("current-ball")


       if (currentBall.nextElementSibling) {
           
            currentBall.nextElementSibling.classList.add("current-ball")

       } else {

            balls[0].classList.add("current-ball")                                
           
       }


}









const previousSlide = () =>{

       current.classList.remove("current")


       if (current.previousElementSibling) {
           
            current.previousElementSibling.classList.add("current")

       } else {

        slides[slides.length - 1].classList.add("current")                                
           
       }



       currentBall.classList.remove("current-ball")


       if (currentBall.previousElementSibling) {
           
            currentBall.previousElementSibling.classList.add("current-ball")

       } else {

            balls[balls.length - 1].classList.add("current-ball")                                
           
       }

      

       console.log('working')

}


previousSlide()