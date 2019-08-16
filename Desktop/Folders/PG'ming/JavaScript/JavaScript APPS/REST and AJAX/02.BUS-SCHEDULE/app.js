function solve() {
    let buttons = document.querySelectorAll("input");
    let url = `https://judgetests.firebaseio.com/schedule/depot.json` 
    let stopname = "";
    function depart() {
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(function(stop){
            document.getElementsByClassName("info")[0].textContent = `Next stop ${stop.name}`;
            stopname = stop.name;
            url = `https://judgetests.firebaseio.com/schedule/${stop.next}.json` 
        })
        buttons[0].disabled = true;
        buttons[1].disabled = false;
    }

    function arrive() {
        document.getElementsByClassName("info")[0].textContent = `Arriving at ${stopname}`
        buttons[0].disabled = false;
        buttons[1].disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();