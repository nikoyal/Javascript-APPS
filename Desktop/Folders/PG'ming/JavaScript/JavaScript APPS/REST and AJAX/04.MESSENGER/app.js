function attachEvents() {
    let textarea = document.getElementById("messages")
    let author = document.getElementById("author");
    let content = document.getElementById("content");
    let submitbtn = document.getElementById("submit");
    let refreshbtn = document.getElementById("refresh");
    refreshbtn.addEventListener("click",function(){
        fetch(`https://rest-messanger.firebaseio.com/messanger.json`)
        .then((msges) => msges.json())
        .then(function(messages){
            let messagesval = Object.values(messages);
            for (let message of messagesval){
                textarea.textContent += `${message.author}: ${message.content}\n`
            }
        })
    })
    submitbtn.addEventListener("click",function(){
        fetch(`https://rest-messanger.firebaseio.com/messanger.json`,{
            method: 'POST',
            body: JSON.stringify({'author': author.value,'content': content.value})
        })
        .then(response => response.json());
    })
}

attachEvents();