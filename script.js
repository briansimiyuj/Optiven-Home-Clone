const slides = document.querySelectorAll(".slides")

const current = document.querySelector(".current")  

const currentBall = document.querySelector(".current-ball")

const prevBTN  = document.querySelector("#prev-btn")

const balls = document.querySelectorAll(".ball")

const auto = true

const nextBTN = document.querySelector("#next-btn")

const intervalTime = 5000

let nextInterval 


console.log(balls)


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

       console.log('working')

}

nextSlide()