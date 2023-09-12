// body
let pseudoPlayer = sessionStorage.getItem("pseudo")
let score = sessionStorage.getItem("score")
let body = document.querySelector("body")
body.style.height = "100vh"
body.style.display = "flex";
body.style.alignItems = "center";
body.style.backgroundImage = "url(images/maxbg.jpg)";
body.style.backgroundRepeat = "repeat-x";
body.style.backgroundColor = "#c87857";
// div root
let root = document.querySelector('#root');
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.width="50%";
root.style.margin="auto";

//déclaration de l'audio
let audio = document.createElement("audio")
root.appendChild(audio)
audio.id = "monAudio"
audio.src = "sons/gameOver.mp3"
audio.autoplay = true;
audio.volume = 0.4;

///////Titre GAME OVER////////

let titleGO = document.createElement("h1");
titleGO.id = "titleGO";
root.appendChild(titleGO);
titleGO.innerText = "Game Over";
titleGO.style.margin = "0";
titleGO.style.fontFamily = "'Road Rage', cursive";
titleGO.style.lineHeight = "10rem";
titleGO.style.textAlign = "center";
titleGO.style.fontSize = "15rem";
titleGO.style.color = "#d20d13";
titleGO.style.textShadow = "-0.5rem -0.5rem 0.1rem #6c0c04";

//////Score Joueur///////

let scoreLastParty = document.createElement("div");
scoreLastParty.id = "scoreLastParty";
root.appendChild(scoreLastParty);
scoreLastParty.style.fontFamily = "monospace";
scoreLastParty.style.fontSize = "2rem";
scoreLastParty.style.textAlign = "center";
scoreLastParty.style.fontWeight = "bold";

let namePlayer = document.createElement("span");
namePlayer.id = "namePlayer";
namePlayer.innerText = pseudoPlayer + ", voici ton score : ";
scoreLastParty.appendChild(namePlayer);
scoreLastParty.style.marginTop = "2rem";

let scorePlayer = document.createElement("span");
scorePlayer.id = "scorePlayer";
scorePlayer.innerText = score;
scoreLastParty.appendChild(scorePlayer);

//////Classement///////

let scoreBoard = document.createElement("div");
scoreBoard.id = "scoreBoard";
root.appendChild(scoreBoard);
scoreBoard.style.fontFamily = "monospace";
scoreBoard.style.fontSize = "1.2rem";
tableResultat = [{name:pseudoPlayer,value:score},{name: "Mélanie",value:900},{name: "Clément",value:800},{name: "Noë",value:700},{name: "Youssef",value:1000},{name: "Lucas",value:600},{name: "Julien",value:500},{name: "Marceau",value:400},{name: "Sami",value:300},{name: "Grégory",value:200},{name: "Romain",value:100}]
tableResultatTrie = tableResultat.sort(function (a, b) {
    if (a.value < b.value){
       return 1;
    }
    if (a.value > b.value ){
        return -1;
    }
    // a doit être égal à b
    return 0;
  })
let classement = document.createElement("table")
scoreBoard.appendChild(classement);
classement.style.width = "100%";
classement.style.color = "#6c0c04";
classement.style.fontWeight = "bold";
classement.style.marginTop = "2rem";
classement.style.marginBottom = "2rem";

let thead = document.createElement("thead");
classement.appendChild(thead);

let trThead = document.createElement("tr");
thead.appendChild(trThead);


let thTrThead = document.createElement("th")
thTrThead.innerText = "Classement"
thTrThead.colspan = "2"
thTrThead.style.fontFamily = "'Road Rage', cursive";
thTrThead.style.textShadow = "0.2rem 0.2rem 0.1rem #6c0c04";
thTrThead.style.color = "#fcd314";
thTrThead.style.textAlign = "start"
thTrThead.style.fontSize = "3rem"
trThead.appendChild(thTrThead)

let tBody = document.createElement("tbody")
classement.appendChild(tBody)

for(i=0 ; i<10 ; i++){
    let trBody = document.createElement("tr")
    tBody.appendChild(trBody)
    trBody.id="tr"+i
    let tdBodyName = document.createElement("td")
    let tdBodyScore = document.createElement("td")
    trBody.appendChild(tdBodyName)
    trBody.appendChild(tdBodyScore)
    tdBodyName.innerText = tableResultatTrie[i].name
    tdBodyScore.innerText = tableResultatTrie[i].value
    tdBodyName.style.borderBottom = "2px dashed #6c0c04";
    tdBodyScore.style.borderBottom = "2px dashed #6c0c04";
    tdBodyScore.style.textAlign = "end";

}

///////bouton Rejouer ?///////

let btnRejouer = document.createElement("button");
btnRejouer.id = "btnRejouer";
root.appendChild(btnRejouer);
btnRejouer.style.margin = "auto";
btnRejouer.style.padding = "1rem";
btnRejouer.innerText = "Rejouer ?";
btnRejouer.style.width = "15rem";
btnRejouer.style.fontFamily = "monospace";
btnRejouer.style.textAlign = "center";
btnRejouer.style.fontSize = "2rem";
btnRejouer.style.fontWeight = "bold";
btnRejouer.style.color = "#6c0c04";
btnRejouer.style.backgroundColor = "rgba(0,0,0,0)";
btnRejouer.style.border = "5px dashed #6c0c04";
btnRejouer.style.transition = "0.5s";

btnRejouer.addEventListener('mouseover', function(){
    btnRejouer.style.backgroundColor = "#6c0c04";
    btnRejouer.style.color = "yellow"; 
});

btnRejouer.addEventListener('mouseleave', function(){
    btnRejouer.style.color = "#6c0c04";
    btnRejouer.style.backgroundColor = "rgba(0,0,0,0)";
});
  
btnRejouer.addEventListener("click" , function(){
    window.location.replace("index.html");
});
