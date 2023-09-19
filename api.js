const userInput = document.getElementById("input")
const e = document.getElementById("errorMessage")
const city=document.getElementById("city")
const country=document.getElementById("country")
const longitude=document.getElementById("longitude")
const latitude=document.getElementById("latitude")
const weatherType=document.getElementById("wtype")
const temp=document.getElementById("t")
const minTemp=document.getElementById("mint")
const maxTemp=document.getElementById("maxt")
const windSpeed=document.getElementById("windSpeed")
const timeZone=document.getElementById("timeZone")
const cloud=document.getElementById("cloud")
const info =async (event) => {    
        // alert("Working")
        let search = userInput.value;
        if (search === "") {
            document.getElementById("error").style.visibility = "visible"
            document.getElementById("report").style.visibility = "hidden"
            e.textContent = "Enter a city name!"
        }
        else {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d6ed47988fa6c2c73c8a1daea0d48170`;
            const response=await fetch(url)
            const data=await response.json()
            if(data.cod==404)
            {
                document.getElementById("report").style.visibility="hidden"
                document.getElementById("error").style.visibility="visible"
                e.textContent="Enter a valid city name!"
            }
            else
            {
                const arr=[data]
                console.log(arr[0])
                document.getElementById("error").style.visibility="hidden"
                document.getElementById("report").style.visibility="visible"
                city.textContent=data.name
                country.textContent=data.sys.country
                longitude.textContent=data.coord.lon
                latitude.textContent=data.coord.lat
                weatherType.textContent=data.weather[0].description
                temp.textContent=(data.main.temp-273.15).toFixed(2)
                minTemp.textContent=(data.main.temp_min-273.15).toFixed(2)
                maxTemp.textContent=(data.main.temp_max-273.15).toFixed(2)
                windSpeed.textContent=data.wind.speed
                timeZone.textContent=data.timezone
                let source=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                cloud.setAttribute("src",source)
            }        
        }
    }
    


document.getElementById("submit").addEventListener("click", info)
document.getElementById("user-input").addEventListener("keydown", e=>{
    event.stopPropagation()
    if(e.keyCode===13)
    {
        info()
    }
})