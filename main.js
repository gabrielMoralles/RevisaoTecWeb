function logo(){

    alert("logo clickado")


}

ads=document.querySelector(".ulADS");
ads.addEventListener("click",function(event){


    el=this
    alert(el)




})

function dev(){


    alert("DevOps")

}

function tec(){

    alert("TechWeb")

}

function sql(){


    alert("SQL")
}
function lp(){

    alert("LP2")


}


var tabela = document.querySelector(".tabela")
var td= tabela.querySelectorAll("td")

td.addEventListener("click",function(event){

    var paiElemento=this.parentNode
    paiElemento.remove()


}

)

function(){


    this.remove()

}