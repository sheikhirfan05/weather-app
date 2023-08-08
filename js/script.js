const apiKey = "0cead8697a088f9c28dcc690a64525be";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "img/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "img/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "img/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "img/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    }


   

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

const list = document.getElementById('list');
const bars = document.querySelector('.bars');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

function myNav(){
    if(list.style.display == "none"){
        list.style.display = "flex";
        bars.style.height = '26px';
        bars.style.transform = 'rotate(45deg)';
        bar3.style.display = 'none';
        bar1.style.height = '100%';
        bar1.style.position = 'relative';
        bar1.style.left = '-1px';
        bar1.style.width = '2px';
        bar2.style.position = 'relative';
        bar2.style.height = '2px';
        bar2.style.bottom = '13px';
        bar1.style.backgroundColor = "white";
        bar2.style.backgroundColor = "white";
        bar3.style.backgroundColor = "white";

    }
    else{
        list.style.display="none";
        bars.style.height = '17px';
        bars.style.transform = 'none';
        bar3.style.display = 'block';
        bar1.style.height = '2px';
        bar1.style.position = 'relative';
        bar1.style.left = '0';
        bar1.style.width = '100%';
        bar2.style.position = 'relative';
        bar2.style.height = '2px';
        bar2.style.bottom = '0';
        bar1.style.backgroundColor = "black";
        bar2.style.backgroundColor = "black";
        bar3.style.backgroundColor = "black";
    }
}