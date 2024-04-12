let input1 = document.querySelector(".input")
let input2 = document.querySelector(".input1")
let textinput1 = document.querySelector(".textinpu1")
let textinput2 = document.querySelector(".textinput2")



function username () {
    if (input1.value.length < 12){
        textinput1.style.display = "block"
        textinput1.style.color = "red"
        textinput1.innerHTML = "تعداد یوزرنیم کم است"
    }
    else{
        textinput1.innerHTML  = "تعداد کاراکتر ها درست است"
        textinput1.style.color = "green"
        textinput1.style.display = "block"
    }
}

function password () {
    if (input2.value.length < 8){
        textinput2.style.display = "block"
        textinput2.style.color = "red"
        textinput2.innerHTML = "تعداد پسورد کم است"
    }
    else{
        textinput2.innerHTML  = "تعداد کاراکتر ها درست است"
        textinput2.style.color = "green"
        textinput2.style.display = "block"
    }
}
console.log("sucsess")
