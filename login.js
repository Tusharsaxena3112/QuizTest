let users=[
    {   email:'tushar@gmail.com',
        password:'123',
    },
    {
        email:'tanishq@gmail.com',
        password:'1234',
    },
]

onSignUp=()=>{
    return window.location.assign('./signup.html');
}

goToHome=()=>{
    var email=document.getElementById('email').value;
    var password=document.getElementById('pwd').value;
    var c=0;
    for(let i=0;i<users.length;i++){
        if(users[i].email==email&&users[i].password==password){
            c=1;
            return window.location.assign('./play.html');
        }
    }
    if(c!=1){
        alert("Your email and password does not match! Try again.");
    }
}