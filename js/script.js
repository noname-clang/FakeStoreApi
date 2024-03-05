const BaseUrl = 'https://fakestoreapi.com/'

async function SendGetToAPI(endpoint)
{
    const request = await fetch(BaseUrl+endpoint)
    return await request.json()
}



async function ShowProducts(){
    const data = await SendGetToAPI("products?limit=6")
    console.log(data)
    const charactercontainer = document.getElementById("products-container")
    data.map((datareccebida,index) =>{
        const DivCharacter = document.createElement('div')
        DivCharacter.innerHTML = `
        <img src="${datareccebida.image}" alt="imagemdopersonagem" >
        <article>
        <h3 id="products-boxdesc${index}">${datareccebida.title} </h3>
        <span class="Description" id="description">Description :</span>
        <p id="detalhe-desc">${datareccebida.description}</p>
        </article>
        `
        DivCharacter.id =`products-box${index}`
        DivCharacter.classList.add(`products-box${index}`)
        charactercontainer.appendChild(DivCharacter)
    })
    
    data.map((datareccebida,index) =>{
        const Product =  document.getElementById(`products-box${index}`);
        const Pdesc =  document.getElementById(`products-boxdesc${index}`).innerText
        console.log(Pdesc)
        Product.addEventListener('click' ,()=> {

            window.location.href = `../productpage.html?productname=${Pdesc}`
        })
    })
}

async function ShowCategories(){
    const data = await SendGetToAPI("products/categories")
    console.log(data)
    const charactercontainer = document.getElementById("dropdown-content")
    data.map((datareccebida,index) =>{
        const acategorie = document.createElement('a')
        
        acategorie.innerText = `${datareccebida.toUpperCase()}
        `
        acategorie.id =`dropdown-content${index}`
        acategorie.classList.add(`dropdown-content${index}`)
        charactercontainer.appendChild(acategorie)
    })


    
}
async function ClickEvents(){
    const data = await SendGetToAPI("products/categories")
    data.map((datareccebida,index) =>{
        let button = document.getElementById(`dropdown-content${index}`)
            
            button.addEventListener('click',async ()=>{
            const Rule = await SendGetToAPI(`products/category/${datareccebida}`)
            Rule.map((datareccebida2,index2) =>{
            let mydiv = document.getElementById(`products-box${index2}`)
            mydiv.innerHTML = `<img src="${datareccebida2.image}"> 
            <article>
            <h3>${datareccebida2.title} </h3>
            <span class="Description" id="description">Description :</span>
            <p id="detalhe-desc">${datareccebida2.description}</p>
            </article>
            `
            
            })
            console.log(Rule.length)
            if(Rule.length == 4 ){
                let mydiv = document.getElementById(`products-box4`)
                let mydiv2 = document.getElementById(`products-box5`)
                mydiv.innerHTML = ``
                mydiv2.innerHTML = ``
            }
    })
    })
}





document.addEventListener('DOMContentLoaded',ShowProducts())
document.addEventListener('DOMContentLoaded',ShowCategories())
document.addEventListener('DOMContentLoaded',ClickEvents())
