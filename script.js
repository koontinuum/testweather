let key = "2cfda1f27f8f18422038c85cc30073ad"
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${42.882004}&lon=${74.582748}&lang=ru&units=metric&appid=${key}`

let $title = document.querySelector('.title')
let $currentImg = document.querySelector('.icon')
let $feels = document.querySelector('.feels')
let $main = document.querySelector('.main')
let $head = document.querySelector('.head')
let $hourly = document.querySelector('.hourly')
let $date = document.querySelector('.date')
let $dewPoint = document.querySelector('.dewpoint')
let $daily = document.querySelector('.daily')
let $weather = document.querySelector('.weather')
let $feels1 = document.querySelector('.feels1')
let date = new Date()
// alert(date.getDate())
fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        let current = data.current
        let hourly = data.hourly
        let daily = data.daily
        // let weather = data.daily
        $main.textContent = current.weather[0].main
        $title.textContent = current.temp
        $feels.textContent = current.feels_like
        $head.textContent = data.timezone
        $dewPoint.textContent = current.dew_point
        $date.textContent = date.toDateString()
        $hourly.insertAdjacentHTML('beforeend', ` 
        <p>${hourly[0].temp}<p> 
        <p>${hourly[1].temp}<p> 
        <p>${hourly[2].temp}<p> 
        <p>${hourly[3].temp}<p> 
        <p>${hourly[4].temp}<p> 
        <p>${hourly[5].temp}<p> 
        <p>${hourly[6].temp}<p> 
        <p>${hourly[7].temp}<p> 
        <p>${hourly[8].temp}<p> 
        <p>${hourly[9].temp}<p> 
        <p>${hourly[10].temp}<p> 
        `)
        $daily.insertAdjacentHTML('beforeend', `
        <p>${daily[0].temp.day}<p>
        <p>${daily[1].temp.day}<p> 
        <p>${daily[2].temp.day}<p> 
        <p>${daily[3].temp.day}<p> 
        <p>${daily[4].temp.day}<p> 
        <p>${daily[5].temp.day}<p> 
        <p>${daily[6].temp.day}<p> 
        <p>${daily[7].temp.day}<p> 
        `)
        $weather.insertAdjacentHTML('beforeend', `
        <p>${daily[0].weather[0].main}<p>
        <p>${daily[1].weather[0].main}<p> 
        <p>${daily[2].weather[0].main}<p> 
        <p>${daily[3].weather[0].main}<p> 
        <p>${daily[4].weather[0].main}<p> 
        <p>${daily[5].weather[0].main}<p> 
        <p>${daily[6].weather[0].main}<p> 
        <p>${daily[7].weather[0].main}<p> 
        `)
        $feels1.insertAdjacentHTML('beforeend', `
        <p>${daily[0].feels_like.day}<p>
        <p>${daily[1].feels_like.day}<p>
        <p>${daily[2].feels_like.day}<p>
        <p>${daily[3].feels_like.day}<p>
        <p>${daily[4].feels_like.day}<p>
        <p>${daily[5].feels_like.day}<p>
        <p>${daily[6].feels_like.day}<p>
        <p>${daily[7].feels_like.day}<p>
        `)
    })
