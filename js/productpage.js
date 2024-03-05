const ParamUrl = new URLSearchParams(window.location.search);
const product = ParamUrl.get('productname')


let url = `` //inicia com valor nulo
async function ShowProductInProductPage () { 

        const armazenaoarray =  await SendGetToAPI();
      
        armazenaoarray.map((elemento) => {
            if(elemento.title == product.toString())
            {
                // atruibui o valor 
                url =elemento.title
              
            }
           
        })

        /// agora fora do loop usa o "URL"
        console.log(url)
          

}

async function SendGetToAPI()
{
    const request = await fetch(`https://fakestoreapi.com/products`)
    return await request.json()
}
document.addEventListener('DOMContentLoaded', ShowProductInProductPage())