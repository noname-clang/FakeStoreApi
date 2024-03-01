const button = document.getElementById("fazerlogin")
let data1;
url = 'https://fakestoreapi.com/users'
fetch(url)
.then((element)=> element.json())
.then((data) => {
    console.log(data) 
    return data1 = data })

button.addEventListener('click',(e)=>{
    e.preventDefault()
    const usuario = document.getElementById("loginid").value
    const senha = document.getElementById("passid").value

    TryLogin(data1,usuario,senha);

})

function TryLogin(data,usuario, senha){
    console.log(data)    
   const login = data.find((element)=>
        element.username == usuario && element.password == senha
    )
    if(login)
    {
        window.location = '../initialpage.html'
    }
    else
    alert(`User Not Found`)
}