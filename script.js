// let key = "2cfda1f27f8f18422038c85cc30073ad"
// let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${42.882004}&lon=${74.582748}&lang=ru&units=metric&appid=${key}`

// let $title = document.querySelector('.title')
// let $currentImg = document.querySelector('.icon')
// let $feels = document.querySelector('.feels')
// // let $main = document.querySelector('.main')
// // let $head = document.querySelector('.head')
// let $hourly = document.querySelector('.hourly')
// let $date = document.querySelector('.date')
// let $dewPoint = document.querySelector('.dewpoint')
// let $daily = document.querySelector('.daily')
// let $weather = document.querySelector('.weather')
// let $feels1 = document.querySelector('.feels1')
// let date = new Date()
// alert(date.getDate())
// fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data)
//         let current = data.current
//         let hourly = data.hourly
//         let daily = data.daily
//         // let weather = data.daily
//         $main.textContent = current.weather[0].main
//         $title.textContent = current.temp
//         $feels.textContent = current.feels_like
//         $head.textContent = data.timezone
//         $dewPoint.textContent = current.dew_point
//         $date.textContent = date.toDateString()
//         $hourly.insertAdjacentHTML('beforeend', `
//         <p>${hourly[0].temp}<p>
//         <p>${hourly[1].temp}<p>
//         <p>${hourly[2].temp}<p>
//         <p>${hourly[3].temp}<p>
//         <p>${hourly[4].temp}<p>
//         <p>${hourly[5].temp}<p>
//         <p>${hourly[6].temp}<p>
//         <p>${hourly[7].temp}<p>
//         <p>${hourly[8].temp}<p>
//         <p>${hourly[9].temp}<p>
//         <p>${hourly[10].temp}<p>
//         `)
//         $daily.insertAdjacentHTML('beforeend', `
//         <p>${daily[0].temp.day}<p>
//         <p>${daily[1].temp.day}<p>
//         <p>${daily[2].temp.day}<p>
//         <p>${daily[3].temp.day}<p>
//         <p>${daily[4].temp.day}<p>
//         <p>${daily[5].temp.day}<p>
//         <p>${daily[6].temp.day}<p>
//         <p>${daily[7].temp.day}<p>
//         `)
//         $weather.insertAdjacentHTML('beforeend', `
//         <p>${daily[0].weather[0].main}<p>
//         <p>${daily[1].weather[0].main}<p>
//         <p>${daily[2].weather[0].main}<p>
//         <p>${daily[3].weather[0].main}<p>
//         <p>${daily[4].weather[0].main}<p>
//         <p>${daily[5].weather[0].main}<p>
//         <p>${daily[6].weather[0].main}<p>
//         <p>${daily[7].weather[0].main}<p>
//         `)
//         $feels1.insertAdjacentHTML('beforeend', `
//         <p>${daily[0].feels_like.day}<p>
//         <p>${daily[1].feels_like.day}<p>
//         <p>${daily[2].feels_like.day}<p>
//         <p>${daily[3].feels_like.day}<p>
//         <p>${daily[4].feels_like.day}<p>
//         <p>${daily[5].feels_like.day}<p>
//         <p>${daily[6].feels_like.day}<p>
//         <p>${daily[7].feels_like.day}<p>
//         `)
//     })

let key = "f5d9234be1bfda95ccf0f5b0a787d029"

let cities = [
    {
        lat: 42.882004,
        lon: 74.582748
    },
    {
        lat: 40.513996,
        lon: 72.816101
    },
    {
        lat: 42.822377,
        lon: 75.317895
    },
    {
        lat: 40.054846,
        lon: 70.820914
    },
    {
        lat: 42.531763,
        lon: 72.230457
    },
    {
        lat: 41.427395,
        lon: 75.984059
    },
    {
        lat: 40.933154,
        lon: 72.981488
    },
    {
        lat: 42.47821,
        lon: 78.395599
    }

]
getData(cities[0])


async function getData(city) {
    let url = (`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&lang=ru&units=metric&appid=${key}`)
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data);
    currentWeather(data.current)
    hourlyWeather(data.hourly)
    dailyWeather(data.daily)
}

function currentWeather(data) {
    let $title = document.querySelector('.title')
    let $currentImg = document.querySelector('.icon')
    let $description = document.querySelector('.description')
    let $feels = document.querySelector('.feels')

    $title.textContent = data.temp + '°'
    $description.textContent = data.weather[0].description
    $feels.textContent = 'Ощущается:  ' + data.feels_like + '°C'
    $currentImg.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

}
function hourlyWeather(data) {
    let $hourly = document.querySelector('.hourly')
    data.forEach((element, index) => {
        $hourly.insertAdjacentHTML('beforeend', `
        <div class='hour'>
        <p>${index == 0 ? 'Cейчас' : times[new Date().getHours() + index]}</p>
        <img src='http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png'>
        <p>${element.temp}</p>
        </div>
        `)
    })
}

function dailyWeather(data) {
    let $daily = document.querySelector('.daily')
    data.forEach((element, index) => {
        $daily.insertAdjacentHTML('beforeend', `
        <div class ='day'>
        <hr>
        <p>${index == 0 ? 'Cейчас ' : dayss[new Date().getDay() + index]}</p>
        <img src='http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png'>
        <p>${element.weather[0].description}</p>
        <p>${element.temp.day}</p>
        </div>
        `)
    })
}


document.querySelector('select').addEventListener('change', function () {
    switch (this.value) {
        case 'osh':
            getData(cities[1])
            break
        case 'bishkek':
            getData(cities[0])
            break
        case 'tokmok':
            getData(cities[2])
            break
        case 'batken':
            getData(cities[3])
            break
        case 'talas':
            getData(cities[4])
            break
        case 'naryn':
            getData(cities[5])
            break
        case 'djalalAbad':
            getData(cities[6])
            break
        case 'karakol':
            getData(cities[7])
            break
    }
})

let times = [
    "24",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23"
]
let dayss = [
    "Вс",
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб",
    "Вс",
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
]

