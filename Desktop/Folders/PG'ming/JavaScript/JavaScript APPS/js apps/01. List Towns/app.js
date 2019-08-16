function solution(){
    let btn = document.getElementById("btnLoadTowns");
    let input = document.getElementById("towns");
    btn.addEventListener("click",function(){
        let towns = input.value.split(", ").map(town =>
            ({name:town})
        );
        renderTowns(towns)
    })
}
function renderTowns(towns){
    console.log("fun")
    let template = document.getElementById("towns-template").innerHTML;
    let compiled = Handlebars.compile(template);
    let rendered = compiled({towns});
    document.getElementById("shortcut").innerHTML = rendered
}
solution()