let body = document.getElementById("mbody")
let loading = document.getElementById("pre-loading")
let form = document.getElementById("form")
loading.classList.remove("d-none");
let jsona;
let data;

async function initLoad(){
    body.classList.add("d-flex")
    body.classList.add("flex-wrap")
    jsona = await fetch("colors.json")
    data = await jsona.json();

    for(const color of data){
        form.classList.remove("d-none")
        let div = document.createElement("div")
        div.style.width = "200px";
        div.style.height = "100px";
        div.style.background = color.cssValue;
        div.innerText = color.name;
        div.style.textAlign = "center"
        if(color.textColor == "light"){
            div.style.color = "white"
        }
        else{
            div.style.color = "black"
        }
        div.classList.add("cuccli")
        body.appendChild(div)
    }
    
}

async function displayColors(){
    document.querySelectorAll(".cuccli").forEach(el => el.remove())
    
    for(const color of data){
        form.classList.remove("d-none")
        let div = document.createElement("div")
        div.style.width = "200px";
        div.style.height = "100px";
        div.style.background = color.cssValue;
        div.innerText = color.name;
        div.style.textAlign = "center"
        if(color.textColor == "light"){
            div.style.color = "white"
        }
        else{
            div.style.color = "black"
        }
        div.classList.add("cuccli")
        body.appendChild(div)
    }
    
}

setTimeout(() => {
    loading.classList.add("d-none")
    initLoad()
},3000)


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formdata = new FormData(form);
    
    let cname = formdata.get("add_color");
    let chex = formdata.get("add_hex");
    
    let ctcolor = form.elements["add_text_color"];
    let cucc;
    if(ctcolor.checked){
        cucc = "white"
    }
    else{
        cucc = "black"
    }
    
    let cobj = {
        "name": cname,
        "cssValue": chex,
        "textColor": cucc
    }

    data.push(cobj);
    displayColors();
});