function attachEvents() {
    let loadbtn = document.getElementById("btnLoad");
    let pb = document.getElementById("phonebook");
    loadbtn.addEventListener("click", function () {
        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
            .then(req => req.json())
            .then(function (loaded) {
                let values = Object.values(loaded)
                for (let value of values) {
                    let li = document.createElement("li");
                    li.textContent = `${value.person}: ${value.phone}`
                    let btn = document.createElement("button");
                    btn.textContent = "DELETE";
                    btn.addEventListener("click", function () {
                        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json', {
                            method: 'DELETE',
                            mode: "no-cors",
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({'person': value.person,'phone': value.phone})
                          })
                          .then(res => res.text()) // OR res.json()
                          .then(res => console.log(res))
                    })
                    li.appendChild(btn);
                    pb.appendChild(li);
                }
            })
    })
    let inputs = document.querySelectorAll("input");
    let createbtn = document.getElementById("btnCreate");

    createbtn.addEventListener("click", function () {
        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'person': inputs[0].value, 'phone': inputs[1].value})
        })
        .then(response => response.json())
    })
}

attachEvents();