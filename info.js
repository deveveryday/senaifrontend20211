setInterval(() => {
    print();
}, 400)
var number = 0;
function print() {
    try{
        number++;
        document.getElementById("SKATEeveryday").innerText = "SKATEeveryday 🛹";

        if(number % 2 ==0){
            document.getElementById("SKATEeveryday").className = "";
        }else{
            
            document.getElementById("SKATEeveryday").className = "rotate";
        }
        
        console.info("");
    }
    catch(e){
        console.error(e);
    }
}
