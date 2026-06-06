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
