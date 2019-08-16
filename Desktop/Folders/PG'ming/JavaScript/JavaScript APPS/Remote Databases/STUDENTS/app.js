window.onload = function () {
    let tbody = document.querySelectorAll("tbody")[0];
    fetch("https://baas.kinvey.com/appdata/kid_HkU-spSfr/students", {
        method: "GET",
        headers: new Headers({
            'Authorization': 'Basic ' + btoa("nikoyal:nikoyal123"),
            'Content-Type': "application/json"
        })
    })
        .then(data => data.json())
        .then(function (data) {
            console.log(data)
            data.sort(function(a, b){
                var keyA = new Date(a.ID),
                    keyB = new Date(b.ID);
                // Compare the 2 dates
                if(keyA < keyB) return -1;
                if(keyA > keyB) return 1;
                return 0;
            });
            for (let i = 0; i < data.length; i++) {
                let tr = document.createElement("tr");
                let id = document.createElement("td");
                id.textContent = data[i].ID;
                let name = document.createElement("td");
                name.textContent = data[i].FIrstName;
                let lastname = document.createElement("td");
                lastname.textContent = data[i].LastName;
                let facnum = document.createElement("td");
                facnum.textContent = data[i].FacultyNumber;
                let grade = document.createElement("td");
                grade.textContent = data[i].Grade;
                tr.appendChild(id)
                tr.appendChild(name)
                tr.appendChild(lastname)
                tr.appendChild(facnum)
                tr.appendChild(grade)
                tbody.appendChild(tr)
            }
        });
}