let getbtn = document.getElementById("getVenues");
getbtn.addEventListener("click",function(){
    let val = document.getElementById("venueDate").value;
    fetch("https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/custom/calendar?query=" + val +".json",{
        method : "GET",
        headers: new Headers ({
            'Authorization': 'Basic '+btoa("guest:pass"),
            'Content-Type': "application/json"
        })
    })
    .then(data => data.json())
    .then(data => console.log(data))
})