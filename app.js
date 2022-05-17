

let input = document.getElementById("about-input");
input.addEventListener("keyup",(e)=>{
    if (e.key =="Enter") {
        
        document.getElementById("about-text1").innerText = input.value;
        document.getElementById("about-text1").style.display = "block";
        input.style.display = "none";
    }
   });
function agregar(){
    
    let option = document.getElementById("input-option").value ;
    let li = document.createElement("li") ;
    li.appendChild(document.createTextNode(option));
    let ul = document.getElementById("ul-options");
    ul.appendChild(li);

};
function editAbout(){
    let texto = document.getElementById("about-text1").innerText;
    document.getElementById("about-input").value = texto;
    document.getElementById("about-input").style.display= "block";
    document.getElementById("about-text1").style.display = "none";
};
