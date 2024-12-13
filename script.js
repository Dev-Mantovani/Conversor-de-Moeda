
const converter = document.querySelector("button")
const moeda = document.querySelector(".moeda")
const moeda2 = document.querySelector (".moeda2")
const real = document.querySelector(".real1");
const convert2 = document.querySelector (".convert2")




function troquei() {
    if (moeda.value == "euro") {

        const bandeira = document.querySelector(".bandeira")
        const descricao = document.querySelector(".descricao")
        

        bandeira.src = "./img/euro.jpg"
        descricao.innerHTML = "Euro"
    
    }

    if (moeda.value == "dolar") {

        const bandeira = document.querySelector(".bandeira")
        const descricao = document.querySelector(".descricao")


        bandeira.src = "./img/eua.png"
        descricao.innerHTML = "Dolar"
    
    }

    if (moeda.value == "real") {

        const bandeira = document.querySelector(".bandeira")
        const descricao = document.querySelector(".descricao")


        bandeira.src = "./img/brasil.png"
        descricao.innerHTML = "Real Brasileiro"
    
    }


    if (moeda2.value == "dolar") {

        const bandeira2 = document.querySelector(".bandeira2")
        const descricao2 = document.querySelector(".descricao2")
        const convert2 = document.querySelector (".convert2")


        bandeira2.src = "./img/eua.png"
        descricao2.innerHTML = "Dolar"
    
    
    }

    
    if (moeda2.value == "real") {

        const bandeira2 = document.querySelector(".bandeira2")
        const descricao2 = document.querySelector(".descricao2")


        bandeira2.src = "./img/brasil.png"
        descricao2.innerHTML = "Real Brasileiro"
        
        
    
    }

    if (moeda2.value == "euro") {

        const bandeira2 = document.querySelector(".bandeira2")
        const descricao2 = document.querySelector(".descricao2")
        const convert2 = document.querySelector (".convert2")



        bandeira2.src = "./img/euro.jpg"
        descricao2.innerHTML = "Euro"
    
    
    
    }

    convert()
}






function convert() {
    const valordigitado = document.querySelector(".valordigitado").value;
    const valordolar = 5.21;
    const valoreuro = 6.14;
    const convert2 = document.querySelector (".convert2")

    const real = document.querySelector(".real1");
    const convertvalor = document.querySelector(".convert");



    if (moeda.value == "dolar" ) {
        convertvalor.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }) .format(valordigitado / valordolar);

        convert2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }) .format(valordigitado);



    }

    
    if (moeda.value == "real"  ) {
        convertvalor.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
    

        }).format(valordigitado * valordolar);

        convert2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }) .format(valordigitado);
        

    }

    
    if (moeda.value == "euro") {

        convertvalor.innerHTML = new Intl.NumberFormat("eu-EU", {
            style: "currency",
            currency: "EUR"


        }).format(valordigitado / valoreuro);

        convert2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }) .format(valordigitado);


    }
    
    if (moeda.value == "real"  ) {
        convertvalor.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
    

        }).format(valordigitado);

        convert2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }) .format(valordigitado);
        

    }


}

