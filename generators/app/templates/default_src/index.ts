window.addEventListener("DOMContentLoaded",()=>{
    let targetDiv : HTMLElement | null = document.getElementById("divID");
    if(targetDiv != null){
        targetDiv.innerHTML = "<h1>Hello!</h1>";
    }
});
