(() => {

     renderCatTemplate();

     function renderCatTemplate() {
         let temp = document.getElementById("cat-template").innerHTML;
         let compile = Handlebars.compile(temp)
         let rendered = compile({
             cats:window.cats
         })
         document.getElementById("allCats").innerHTML = rendered;
     }
     let button = document.getElementsByClassName("showBtn");
     let status = document.getElementsByClassName("status");
     for(let i = 0;i < button.length;i++){
         button[i].addEventListener("click",function(){
             status[i].style.display = "block";
         })
     }
})()
