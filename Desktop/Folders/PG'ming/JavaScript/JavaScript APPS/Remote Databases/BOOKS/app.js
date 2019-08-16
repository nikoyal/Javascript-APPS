const kinveyUsername = "nikoyal"
const kinveyPassword = "nikoyal123"
const appkey = "kid_HkU-spSfr"
const appsecret = "de82ff037ca3476e86abd8f09974f683"
const url = "https://baas.kinvey.com/appdata/kid_HkU-spSfr/books"

let loadbtn = document.getElementById("loadBooks").addEventListener("click",load);
let submitbtn = document.getElementById("submit").addEventListener("click",post)
let tbody = document.querySelectorAll("tbody")[0];

window.onload = function(){
    tbody.innerHTML = "<tbody></tbody>"
    fetch(url,{
        method:"GET",
        headers: new Headers ({
            'Authorization': 'Basic '+btoa(kinveyUsername+":"+kinveyPassword),
            'Content-Type': "application/json"
        })
    })
    .then(data => data.json())
    .then(function(data){
        for(let i = 0;i < data.length;i++){
            let tr = document.createElement("tr");
            let title = document.createElement("td")
            title.textContent = data[i].title
            let author = document.createElement("td")
            author.textContent = data[i].author
            let lsbn = document.createElement("td")
            lsbn.textContent = data[i].isbn
            let btns = document.createElement("td")
            let edit = document.createElement("button")
            edit.textContent = "Edit"
            edit.addEventListener("click",function(){
                let distitle = document.getElementById("title")
                let disauthor = document.getElementById("author")
                let disisbn = document.getElementById("isbn");
                if (edit.textContent == "Edit"){
                    edit.textContent = "Finish";
                    distitle.value = title.textContent;
                    disauthor.value = author.textContent;
                    disisbn.value = lsbn.textContent;
                    document.getElementById("submit").style.display = "none"
                }
                else{
                    edit.textContent = "Edit"
                    let dat = {
                        "title":distitle.value,
                        "author":disauthor.value,
                        "isbn":disisbn.value,
                    }
                    fetch(url + "/" + data[i]._id,{
                        method:"PUT",
                        headers: new Headers ({
                            'Authorization': 'Basic '+btoa(kinveyUsername+":"+kinveyPassword),
                            'Content-Type': "application/json"
                        }),
                        body: JSON.stringify(dat)
                    })
                    document.getElementById("submit").style.display = "block"
                }
            })
            let del = document.createElement("button")
            del.textContent = "Delete";
            del.addEventListener("click",function(){
                fetch(url + "/" + data[i]._id,{
                    method:"DELETE",
                    headers: new Headers ({
                        'Authorization': 'Basic '+btoa(kinveyUsername+":"+kinveyPassword),
                        'Content-Type': "application/json"
                    }),
                })
                tbody.removeChild(tr);
            })
            btns.appendChild(edit)
            btns.appendChild(del)
            tr.appendChild(title)
            tr.appendChild(author)
            tr.appendChild(lsbn)
            tr.appendChild(btns)
            tbody.appendChild(tr);
        }
    })
}
function load(ev){
    tbody.innerHTML = "<tbody></tbody>"
    fetch(url,{
        method:"GET",
        headers: new Headers ({
            'Authorization': 'Basic '+btoa(kinveyUsername+":"+kinveyPassword),
            'Content-Type': "application/json"
        })
    })
    .then(data => data.json())
    .then(function(data){
        for(let i = 0;i < data.length;i++){
            let tr = document.createElement("tr");
            let title = document.createElement("td")
            title.textContent = data[i].title
            let author = document.createElement("td")
            author.textContent = data[i].author
            let lsbn = document.createElement("td")
            lsbn.textContent = data[i].isbn
            let btns = document.createElement("td")
            let edit = document.createElement("button")
            edit.textContent = "Edit"
            edit.addEventListener("click",function(){
                let distitle = document.getElementById("title")
                let disauthor = document.getElementById("author")
                let disisbn = document.getElementById("isbn");
                if (edit.textContent == "Edit"){
                    edit.textContent = "Finish";
                    distitle.value = title.textContent;
                    disauthor.value = author.textContent;
                    disisbn.value = lsbn.textContent;
                    document.getElementById("submit").style.display = "none"
                }
                else{
                    edit.textContent = "Edit"
                    let dat = {
                        "title":distitle.value,
                        "author":disauthor.value,
                        "isbn":disisbn.value,
                    }
                    fetch(url + "/" + data[i]._id,{
                        method:"PUT",
                        headers: new Headers ({
                            'Authorization': 'Basic '+btoa(kinveyUsername+":"+kinveyPassword),
                            'Content-Type': "application/json"
                        }),
                        body: JSON.stringify(dat)
                    })
                    document.getElementById("submit").style.display = "block"
                }
            })
            let del = document.createElement("button")
            del.textContent = "Delete";
            del.addEventListener("click",function(){
                fetch(url + "/" + data[i]._id,{
                    method:"DELETE",
                    headers: new Headers ({
                        'Authorization': 'Basic '+btoa(kinveyUsername+":"+kinveyPassword),
                        'Content-Type': "application/json"
                    }),
                })
                tbody.removeChild(tr);
            })
            btns.appendChild(edit)
            btns.appendChild(del)
            tr.appendChild(title)
            tr.appendChild(author)
            tr.appendChild(lsbn)
            tr.appendChild(btns)
            tbody.appendChild(tr);
        }
    })
}

function post(ev){
    ev.preventDefault()
    let title = document.getElementById("title")
    let author = document.getElementById("author")
    let isbn = document.getElementById("isbn");
    let data = {
        title:title.value,
        author:author.value,
        isbn:isbn.value,
    }
    fetch(url,{
        method:"POST",
        headers: new Headers ({
            'Authorization': 'Basic '+btoa(kinveyUsername+":"+kinveyPassword),
            'Content-Type': "application/json"
        }),
        body: JSON.stringify(data)
    })
    .then(data => data.json())
}