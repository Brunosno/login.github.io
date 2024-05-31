function ViewPass(){
    var InputPass = document.getElementById('senha')
    if(InputPass.type === 'password'){
        InputPass.setAttribute('type', 'text')
    }
    else{
        InputPass.setAttribute('type', 'password')
    }
 }

 function ViewPass2(){
    var InputPass2 = document.getElementById('senha2')
    if(InputPass2.type === 'password'){
        InputPass2.setAttribute('type', 'text')
        bntPass2.classList.replace('lock-closed-outline', 'lock-open-outline')
    }
    else{
        InputPass2.setAttribute('type', 'password')
    }
 }