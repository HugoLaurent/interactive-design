document.querySelector("#submit-button").addEventListener("click", (e) => {
    document.querySelector("#landing-box").classList.add("disapear");
    document.querySelector("#result-box").classList.add("appear");
 })

const rates = document.querySelectorAll(".button-value")
for (let i = 0; i < rates.length; i++) {
        rates[i].addEventListener("click", function(event) {
            let rate = rates[i].value
            document.querySelector(".final-rate").textContent = `You selected ${rate} out of 5`
        })
        
}
    







