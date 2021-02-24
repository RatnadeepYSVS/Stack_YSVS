const check = document.querySelector('input')
let val = check.value
let divo = document.querySelector('.dispo')
let dets = document.createElement('h1')
dets.innerHTML = ''
divo.append(dets)
let city = document.createElement('p')
city.innerHTML = ''
divo.append(city)
let latlng = document.createElement('p')
latlng.innerHTML = ''
divo.append(latlng)
let temp = document.createElement('p')
temp.innerHTML = ''
divo.append(temp)
let humidity = document.createElement('p')
humidity.innerHTML = ''
divo.append(humidity)
let weatherdesc = document.createElement('p')
weatherdesc.innerHTML = ''
divo.append(weatherdesc)
document.querySelector('button').addEventListener('click', () => {
    val = check.value
    fetch(`http://api.weatherstack.com/current?access_key=f6852c19283f8ac50961a43083dd1b2a&query=${val}`).then(res => res.json()).then(weat => {
        console.log(weat)
        dets.innerHTML = 'Weather-Details.'
        city.innerHTML = `City = ${weat.request.query}`
        latlng.innerHTML = `Co-ordinates = ${weat.location.lat},${weat.location.lon}`
        temp.innerHTML = `Temparture = ${weat.current.temperature} deg-C`
        humidity.innerHTML = `Humidity = ${weat.current.humidity} air-g.kg-1`
        weatherdesc.innerHTML = `Weather_Description = kind of ${weat.current.weather_descriptions[0]}.`
    })
})
