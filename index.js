document.querySelector(".btn").addEventListener("click",()=>{
    const ratings = document.querySelector("input:checked")?.value;
    if(ratings)
    {
        document.querySelector("#feedback > #text").textContent =`You
          selected ${ratings} out of 5`;
        document.querySelector("#rating-form").classList.add("hidden");
        document.querySelector("#feedback").classList.remove("hidden");
    }
});