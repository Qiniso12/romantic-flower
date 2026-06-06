const music = document.getElementById("music");
const messageBox = document.getElementById("message");

window.onload = () => {

    music.play();

    setTimeout(() => {

        messageBox.style.opacity = "1";

        const text =
        "Every moment with you feels like a beautiful dream that I never want to end.";

        const words = text.split(" ");

        let i = 0;

        const typer = setInterval(() => {

            if(i < words.length){

                messageBox.innerHTML += words[i] + " ";

                i++;

            }else{

                clearInterval(typer);

            }

        },100);

    },10000);

};
for(let i = 0; i < 40; i++){

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "absolute";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-50px";
    petal.style.fontSize = "30px";

    petal.style.animation =
      `fall ${5 + Math.random()*10}s linear infinite`;

    document.body.appendChild(petal);
}
