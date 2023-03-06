const buttonAdd = document.getElementById("buttonAdd");
const buttonClean = document.getElementById("buttonClean")
let cleanControl = true
let res = document.getElementById("res");
let lista = [];

buttonAdd.addEventListener("click", add);
buttonClean.addEventListener("click", clean);

function add(){
    let item = document.getElementById("item");
    let itemformat = item.value.toUpperCase();
    if (item.value == "") {
        alert("[ERRO] Digite um valor válido")

    } else if (lista.includes(itemformat)){
        alert("[ERRO] Esse item já foi adicionado")
        item.value = "";
        item.focus()
    }

    else {
        lista.push(itemformat)
        item.value = "";
        item.focus()

        let listaNumerada = lista.map(function(item, index) {
            return (index + 1) + ". " + item + "<br>";
          }).join("")

        res.innerHTML = listaNumerada


        res.style.display="flex";
        buttonClean.style.display = "flex";
    }

}

function clean(){
    if (cleanControl == true){
        lista = []
        res.innerHTML = lista
        item.focus()
        res.style.display ="none"
        buttonClean.style.display = "none";
    }
}



