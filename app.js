let output = document.getElementById("output");
let randomNum = Math.floor((Math.random()*10)+1);

function check() {
    let inputTextValue = document.getElementById("inputText").value;
    output.style.color = "red";
    if (inputTextValue == ""){
        output.innerHTML = "Empty!";
    }else if (0<=inputTextValue && inputTextValue<=10){
        if (inputTextValue == randomNum) {
            output.innerHTML = "You win!";
            output.style.color = "green";
            return;
        }else if (inputTextValue < randomNum) {
            output.innerHTML = "Too Low!";
        }else{
            output.innerHTML = "Too High!";
        }
        output.style.color = "blue";
    }else{
        output.innerHTML = "Invalid input ...";
    }
}