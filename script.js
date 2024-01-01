let svg = document.querySelector("#svg");
svg.addEventListener("click",()=>{
    document.body.classList.toggle("black");
    if(document.body.classList.contains("black"))
    {
        svg.src="sun.svg"
    }
    else{
        svg.src="moon.svg"
    }
})
