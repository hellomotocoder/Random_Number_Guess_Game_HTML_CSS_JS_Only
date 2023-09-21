
let data;
let cnt = 0;
const randomNo = Math.floor((Math.random() * 100) + 1);

function randomMatch() {
    data = document.querySelector("input").value;
    document.querySelector("p").textContent = document.querySelector("p").textContent + " " + data;
    cnt++;
    if (cnt <= 5) {
        if (Number(data) === randomNo) {
            const para = document.createElement("p");
            para.textContent = "You Won";
            para.classList.add("won");
            document.body.appendChild(para);
            const remElement = document.querySelector("h4");
            remElement.remove();
        }
    }
    if ((cnt <= 5) && (Number(data) !== randomNo)) {
        document.querySelector("h4").textContent = "Wrong No";
    }
    if ((cnt > 5) && (Number(data) !== randomNo)) {
        const para = document.createElement("p");
        para.textContent = "You Loose, no was ==>" + randomNo;
        document.body.appendChild(para);
    }
};


