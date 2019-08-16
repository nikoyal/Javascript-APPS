function getInfo() {
    let id = document.getElementById("stopId");
    let button = document.getElementById("submit");
    let div = document.getElementById("stopName");
    let ul = document.getElementById("buses");
    let bus = fetch(`https://judgetests.firebaseio.com/businfo/${id.value}.json`)
        .then(response => {
            return response.json();
        })
        .then(function (myJson) {
            div.textContent = myJson.name;
            let buses = Object.entries(myJson.buses);
            for (let [busNumber,busTime] of buses){
                let li = document.createElement("li");
                li.textContent = `Bus ${busNumber} arrives in ${busTime}`
                ul.appendChild(li);
            }
        })
        .catch(function(){
            div.textContent = "Error"
        })
}