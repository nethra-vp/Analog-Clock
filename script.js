// A full rotation of any clock hand is 360 degrees

// Hour hand:
// Completes 360° in 12 hours → 30° per hour
// It moves continuously, so each minute adds 0.5°
// Hour hand angle = (30 × hours) + (0.5 × minutes)

// Minute hand:
// Completes 360° in 60 minutes → 6° per minute
// Minute hand angle = 6 × minutes

// Second hand:
// Completes 360° in 60 seconds → 6° per second
// Second hand angle = 6 × seconds

let hour_hand = document.querySelector(".hour-hand")
let min_hand = document.querySelector(".min-hand")
let sec_hand = document.querySelector(".sec-hand")
let digital_hours = document.querySelector(".dhours")
let digital_minutes = document.querySelector(".dminutes")
let digital_seconds = document.querySelector(".dseconds")


setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let hours_rotation = 30*hours + hours/2;
    let minutes_rotation = 6*minutes;
    let seconds_rotation = 6*seconds;

    hour_hand.style.transform = `rotate(${hours_rotation}deg)`
    min_hand.style.transform = `rotate(${minutes_rotation}deg)`
    sec_hand.style.transform = `rotate(${seconds_rotation}deg)`

    digital_hours.innerHTML = (hours < 10? '0'+ hours : hours) > 12 ? hours -= 12 : h;
    digital_minutes.innerHTML = minutes < 10? '0'+ minutes : minutes;
    digital_seconds.innerHTML = seconds < 10? '0'+ seconds : seconds;
})
