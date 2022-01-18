function init () {
    const nope= document.getElementById("nope")
    const button = document.getElementById("change-my-life")
    const paragrapher = document.getElementById("status")
    const textLife=document.createElement("p")
    textLife.innerHTML="Tôi nghèo"
    button.appendChild(textLife)
    button.onclick = function () {
        textLife.innerHTML ="Tôi giàu sau khi học lập trình tại mindx"
    }
}