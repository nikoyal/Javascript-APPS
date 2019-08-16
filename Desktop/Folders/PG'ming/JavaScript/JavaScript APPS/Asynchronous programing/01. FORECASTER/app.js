function attachEvents() {
    let input = document.getElementById("location");
    let getbtn = document.getElementById("submit");
    let forecastdiv = document.getElementById("forecast");
    let current = document.getElementById("current");
    let upcoming = document.getElementById("upcoming");
    getbtn.addEventListener("click",function(){
        fetch("https://judgetests.firebaseio.com/locations.json")
        .then(data => data.json())
        .then(function(samedata){
            let id = samedata.filter(x => x.name == input.value)[0].code;
            console.log(id)
            fetch(`https://judgetests.firebaseio.com/forecast/today/${id}.json`)
            .then(todayw => todayw.json())
            .then(function(todaydata){
                forecastdiv.style.display = "block";
                let condsymbol = document.createElement("span");
                condsymbol.className = "condition symbol";
                console.log(todaydata.forecast.condition)
                if(todaydata.forecast.condition == "Sunny"){
                    condsymbol.textContent = `☀`;
                }
                if(todaydata.forecast.condition == "Partly sunny"){
                    condsymbol.textContent = `⛅`;
                }
                if(todaydata.forecast.condition == "Overcast"){
                    condsymbol.textContent = `☁`;
                }
                if(todaydata.forecast.condition == "Rain"){
                    condsymbol.textContent = `☂`;
                }
                let forecasts = document.createElement("div");
                forecasts.className = "forecasts"
                let condition = document.createElement("span");
                condition.className = "condition";
                let name = document.createElement("span");
                name.className = "forecast-data";
                name.textContent = todaydata.name;
                let temp = document.createElement("span");
                temp.className = "forecast-data";
                temp.textContent = todaydata.forecast.low + "°/" + todaydata.forecast.high + "°"
                let condname = document.createElement("span");
                condname.className = "forecast-data"
                condname.textContent = todaydata.forecast.condition;
                condition.appendChild(name);
                condition.appendChild(temp);
                condition.appendChild(condname)
                forecasts.appendChild(condsymbol)
                forecasts.appendChild(condition)
                current.appendChild(forecasts);
                fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${id}.json`)
                .then(upcoming => upcoming.json())
                .then(function(upcomingdat){
                    let forecastinfo = document.createElement("div");
                    forecastinfo.class = "forecast-info";
                    //0
                    let upcoming0 = document.createElement("span");
                    upcoming0.className = "upcoming";
                    let condsymbol0 = document.createElement("span");
                    condsymbol0.className = "symbol";
                    if(upcomingdat.forecast[0].condition == "Sunny"){
                        condsymbol0.textContent = `☀`;
                    }
                    if(upcomingdat.forecast[0].condition == "Partly sunny"){
                        condsymbol0.textContent = `⛅`;
                    }
                    if(upcomingdat.forecast[0].condition == "Overcast"){
                        condsymbol0.textContent = `☁`;
                    }
                    if(upcomingdat.forecast[0].condition == "Rain"){
                        condsymbol0.textContent = `☂`;
                    }
                    let temp0 = document.createElement("span");
                    temp0.className = "forecast-data";
                    temp0.textContent = upcomingdat.forecast[0].low + "°/" + upcomingdat.forecast[0].high + "°"
                    let condname0 = document.createElement("span");
                    condname0.className = "forecast-data"
                    condname0.textContent = upcomingdat.forecast[0].condition;
                    upcoming0.appendChild(condsymbol0);
                    upcoming0.appendChild(temp0);
                    upcoming0.appendChild(condname0);
                    forecastinfo.appendChild(upcoming0)
                    //1
                    let upcoming1 = document.createElement("span");
                    upcoming1.className = "upcoming";
                    let condsymbol1 = document.createElement("span");
                    condsymbol1.className = "symbol";
                    if(upcomingdat.forecast[1].condition == "Sunny"){
                        condsymbol1.textContent = `☀`;
                    }
                    if(upcomingdat.forecast[1].condition == "Partly sunny"){
                        condsymbol1.textContent = `⛅`;
                    }
                    if(upcomingdat.forecast[1].condition == "Overcast"){
                        condsymbol1.textContent = `☁`;
                    }
                    if(upcomingdat.forecast[1].condition == "Rain"){
                        condsymbol1.textContent = `☂`;
                    }
                    let temp1 = document.createElement("span");
                    temp1.className = "forecast-data";
                    temp1.textContent = upcomingdat.forecast[1].low + "°/" + upcomingdat.forecast[1].high + "°"
                    let condname1 = document.createElement("span");
                    condname1.className = "forecast-data"
                    condname1.textContent = upcomingdat.forecast[1].condition;
                    upcoming1.appendChild(condsymbol1);
                    upcoming1.appendChild(temp1);
                    upcoming1.appendChild(condname1);
                    forecastinfo.appendChild(upcoming1)
                    //2
                    let upcoming2 = document.createElement("span");
                    upcoming2.className = "upcoming";
                    let condsymbol2 = document.createElement("span");
                    condsymbol2.className = "symbol";
                    if(upcomingdat.forecast[2].condition == "Sunny"){
                        condsymbol2.textContent = `☀`;
                    }
                    if(upcomingdat.forecast[2].condition == "Partly sunny"){
                        condsymbol2.textContent = `⛅`;
                    }
                    if(upcomingdat.forecast[2].condition == "Overcast"){
                        condsymbol2.textContent = `☁`;
                    }
                    if(upcomingdat.forecast[2].condition == "Rain"){
                        condsymbol2.textContent = `☂`;
                    }
                    let temp2 = document.createElement("span");
                    temp2.className = "forecast-data";
                    temp2.textContent = upcomingdat.forecast[2].low + "°/" + upcomingdat.forecast[2].high + "°"
                    let condname2 = document.createElement("span");
                    condname2.className = "forecast-data"
                    condname2.textContent = upcomingdat.forecast[2].condition;
                    upcoming2.appendChild(condsymbol2);
                    upcoming2.appendChild(temp2);
                    upcoming2.appendChild(condname2);
                    forecastinfo.appendChild(upcoming2)
                    //
                    upcoming.appendChild(forecastinfo);
                })
            })
        })
    })
}

attachEvents();