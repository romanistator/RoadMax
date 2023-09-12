
let score = 0;
let main = document.querySelector('#main');
let playZone = document.querySelector('#foreground');
let parentCarBad = document.querySelector("#enemyCar")
let isCollide = function(a,b){                          //Fonction collision qui vérifie en continu (si bien placé) les positions
    return !(                                           //X et Y des deux éléments par rapport à leurs tailles
        ((a.y + a.height) < b.y) ||                     //et renvoie "true" si il y a contact
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    )
}
//---------------Fonction apparition voitures ennemies
let addCarBad = function(){
    for(i=0 ; i<4 ; i++){
        let carBad = document.createElement("img")
        let chooseCarBad = Math.floor(Math.random() * (4)+0)    //-------Cette fonction donne un chiffre entre 0 et 3
        if(chooseCarBad == 0){                                  //-------pour définir aléatoirement  quelle carBad va sortir
            carBad.src = "images/carBad.gif"
            carBad.className = "badShooter suicide"
            carBad.setAttribute("isTouched",false);
        }
        else if(chooseCarBad == 1){
            carBad.src = "images/carBad2.gif"
            carBad.className = "badShooter"
            carBad.setAttribute("isTouched",false);
        }
        else if(chooseCarBad == 2){
            carBad.src = "images/carBad3.gif"
            carBad.className = "badShooter"
            carBad.setAttribute("isTouched",false);
        }
        else if(chooseCarBad == 3){
            carBad.src = "images/carBad4.gif"
            carBad.className = "badShooter"
            carBad.setAttribute("isTouched",false);
        }
        carBad.style.position="absolute"                       
        carBad.style.width="250px"                            
        
        let minScreen = screenHeight/3
        let maxScreen = screenHeight-250
        let nbAleatoire = Math.floor(Math.random() * (maxScreen-minScreen+1)) + minScreen  //Trouve un nombre aléatoire entre butee haute et butee basse de la zone de jeu
        carBad.style.top = nbAleatoire+"px"                                                 //Attribution du nombre aléatoire à la hauteur de carBad
        carBad.style.left = "2000px"                                                         //carBad "cachée" à droite de l'écran

        let positionXCarBad = parseInt(carBad.style.left)                                    //Récupére position X en numérique de position carBad
        if(carBad.className == "badShooter suicide"){  //Identification voiture suicide
            let mouveSuicide = setInterval(function() {
                if(positionXCarBad > 0){
                positionXCarBad = positionXCarBad - 6                                       //Mouvement carBad "voiture suicide" qui tire pas
                carBad.style.left = positionXCarBad+"px" 
                }
                else{
                    clearInterval()
                    carBad.remove()
                }
    //---------------Collision/Destruction voiture suicide--------------------- 
                    

                
                if(isCollide(heroCar,carBad)){
                    let boom = document.createElement("audio")
                    let parentAudio = document.querySelector("#heroCar")
                    boom.src = "sons/explosion.mp3"
                    parentAudio.appendChild(boom)                                     //Fonction si collision entre voiture héro et voiture suicide
                    heroCar.src = "images/explosion.gif"                            //Changement de source de l'image de voiture hero à explosion
                    setTimeout(function(){boom.remove()},1000)
                    boom.play()
                    boom.volume = 0.6
                    setTimeout(function(){document.location.href="gameOver.html"},300)
                    clearInterval(mouveSuicide)                 
                    setInterval(function(){heroCar.remove()},800)     //Création d'un petit délai avant le display none afin d'avoir le temp de voir l'explosion
                    carBad.remove()                                   //Suppression de carBad
                   sessionStorage.setItem("score",  score)
                   
                                       
                }                                     
            },10)
        
        }
        else{
            setInterval(function() {   
                if(positionXCarBad > screenWidth-600){
                    positionXCarBad = positionXCarBad - 10              //Mouvement carBad "voiture fixe qui tire"
                    carBad.style.left = positionXCarBad+"px" 
                }                                           
            },20)
            setInterval(function(){
                
                    let tirAleatoire = Math.floor(Math.random() * (3)+0) 
                    if (tirAleatoire == 1 && carBad.style.display != "none"){
                        
                        let missileEnemy = document.createElement("img")
                        missileEnemy.src = "images/bullet2.gif"
                        missileEnemy.style.width = "50px"
                        let positionYMissileCarBad = parseInt(carBad.style.top)
                        let positionXMissileCarBad = parseInt(carBad.style.left)

                        parentCarBad.appendChild(missileEnemy)
                        missileEnemy.style.position="absolute"                   
                        positionYMissileCarBad = positionYMissileCarBad + 25                
                        missileEnemy.style.top = positionYMissileCarBad + "px"         //Réglage position départ du tir par rapport à la voiture 
                        missileEnemy.style.left = positionXMissileCarBad+"px"
                        let posLeftMissileBad = parseInt(missileEnemy.style.left)
                        
                    
 
                        let badMissileMouve = setInterval(function() {                               //setInterval permet de répéter une fonction 
                            if(posLeftMissileBad>0){
                            positionXMissileCarBad = positionXMissileCarBad - 5
                            posLeftMissileBad = posLeftMissileBad - 5 
                            missileEnemy.style.left = positionXMissileCarBad + "px"  //(ici - 10px à gauche de son parent donc mouve vers la droite)
                                if(isCollide(missileEnemy,heroCar)){
                                    let boom = document.createElement("audio")
                                    let parentAudio = document.querySelector("#heroCar")
                                    boom.src = "sons/explosion.mp3"
                                    parentAudio.appendChild(boom) 
                                    heroCar.src = "images/explosion.gif"
                                    setInterval(function(){heroCar.remove()},500)
                                    clearInterval(badMissileMouve)
                                    missileEnemy.remove()
                                    boom.play()
                                    boom.volume = 0.6
                                    setTimeout(function(){boom.remove()},1000)
                                    clearInterval()
                                    setTimeout(function(){document.location.href="gameOver.html"},300)
                                    sessionStorage.setItem("score",  score)
                                }                               
                            }                           
                            else{   
                                clearInterval(badMissileMouve)
                                missileEnemy.remove()
                            } 

                        
                        }, 10);
                                                              //toutes les 10 millisecondes (en gros gére la vitesse du bullet)
                }
            },1000)    

            
        }

        parentCarBad.appendChild(carBad)
    }
}
//-----------------Affichage fond d'écran + Récupération résolution écran---------------------------
let parentBGI = document.querySelector("main")          //-------Récupére le parent du background
let screenHeight = screen.height                        //-------Récupére la hauteur de l'écran de l'utilisateur
let screenWidth = screen.width                          //-------Récupére la largeur de l'écran de l'utilisateur
let bGI = document.createElement("img")                 //-------Création de l'image
parentBGI.style.backgroundImage = "url(images/maxbg.jpg)"     //-------Donne la source de l'image
parentBGI.style.position="fixed"                        //fixe le fond d'écran
parentBGI.style.width = screenWidth + "px"              //-------Définnit la largeur du parent de l'image
parentBGI.style.height = screenHeight + "px"            //-------Définnit la hauteur du parent de l'image
           




//-----------------Création/apparition voiture du Héro--------------
let heroCar = document.createElement("img")
let chooseCar = sessionStorage.getItem("car")
console.log(chooseCar)
if( chooseCar == 1){
    heroCar.src = "images/carHero0.gif"
}
if(chooseCar == 2){
    heroCar.src = "images/carHero1.gif"
}
if(chooseCar == 3){
    heroCar.src = "images/carHero2.gif"
}
if(chooseCar == 4){
    heroCar.src = "images/carHero3.gif"
}
let parentHeroCar = document.querySelector("#heroCar")
 
heroCar.style.position="absolute"                       //-------Position absolute permet de bouger la voiture
heroCar.style.width="200px"                             //-------Définit la taille carHero
heroCar.style.top = "500px"                             //-------Hauteur initiale de la voiture 
heroCar.style.left = "50px"                             //-------Position par rapport au bord gauche
heroCar.id="voitureHero"                                //-------Définition le l'id de la voiture
parentHeroCar.appendChild(heroCar)                      //-------Ajout de la voiture



//----------------Mouvement voiture héro--------------

addEventListener("keydown", function(event){
    let maxMouvementTop = screenHeight/3            //---------Limite haute max
    let heroCarTop = parseInt(heroCar.style.top)    //---------Hauteur en numérique du carHero
    if(event.code == "ArrowUp"){                    //---------Si la touche appuyée est ArrowUp tu fais...
        if (heroCarTop>maxMouvementTop){            //---------Si Hauteur véhicule > à la limite haute max
            heroCarTop = heroCarTop - 20                //---------On réduit hauteur numérique de la voiture de 20
            heroCar.style.top = heroCarTop+"px"         //---------Redéfinit la postion de la voiture
        }
    }

    else if(event.code == "ArrowDown"){
        let buteeBasse = screenHeight-250           //-250px car hauteur voiture est fixée en haut de l'élément
        if (heroCarTop<buteeBasse){
            heroCarTop = heroCarTop + 20
            heroCar.style.top = heroCarTop+"px"
        }
    } 

    //------------------Tir carHero---------------------  
    let missileHero = document.createElement("img")                 
    missileHero.src="images/bullet.gif"                         //création missile
    missileHero.style.width = "50px"                            //Taille missile
    let positionYMissile = parseInt(heroCar.style.top)          // Récupére position X et Y de Herocar en numérique pour départ bullet
    let positionXMissile = parseInt(heroCar.style.left)
    if(event.code == "Space"){                                  //Si touche espace appuyée
        parentHeroCar.appendChild(missileHero)                  //Apparition missile en position absolute
        missileHero.style.position="absolute" 
        missileHero.id = "#posMissileHero"                 
        positionYMissile = positionYMissile + 30                
        missileHero.style.top = positionYMissile + "px"         //Réglage position départ du tir par rapport à la voiture
        positionXMissile = positionXMissile + 210
        missileHero.style.left = positionXMissile+"px"
        
    
        let mouvMissileHero = setInterval(function() {
            if(positionXMissile<2000){
            positionXMissile = positionXMissile + 10        //setInterval permet de répéter une fonction 
            missileHero.style.left = positionXMissile+"px"  //(ici incrémentation de + 10px à gauche de son parent donc mouve vers la droite)

//-------------------Collision missileHeroCar => carBad------------------------
 
                let manyBadCar = document.querySelectorAll(".badShooter")
                for(i=0; i<manyBadCar.length;i++){
                    let carBad = manyBadCar[i]
                        if(isCollide(missileHero,carBad)){
                            let boom = document.createElement("audio")
                            let parentAudio = document.querySelector("#heroCar")
                            boom.src = "sons/explosion.mp3"
                            parentAudio.appendChild(boom)
                            carBad.src="images/explosion.gif"
                            carBad.setAttribute("isTouched",false);
                            setInterval(function(){carBad.style.display = "none"},500)
                            setInterval(function(){carBad.remove()},550)
                            missileHero.remove()
                            clearInterval(mouvMissileHero)
                            boom.play()
                            boom.volume = 0.6
        
                            setTimeout(function(){boom.remove()},1000)
                            if (carBad.isTouched != true){
                                score = score + 100;
                                updateScore.innerText = score ;
                                updateScore.value = score ;
                                carBad.isTouched = true ;
                            }
                            
                        }
                }
                

                
            }
            else{
                clearInterval()
                missileHero.remove()
            }
        }, 10);
                                                         //toutes les 10 millisecondes (en gros gére la vitesse du bullet)
    }
    

     
})
addCarBad() 
let verifNbEnemy = setInterval(function(){
    let nbEnemy = document.querySelectorAll(".badShooter")
        if(nbEnemy.length <1){      
                addCarBad() 
        } 
},3000)
  
   
let minScreen = screenHeight/3
let maxScreen = screenHeight-250    
let parentCoin = document.querySelector("#enemyCar")
let coin = document.createElement("img")
coin.src = "images/coin.gif"
setInterval(function(){
    let nbAleatoirePositionTop = Math.floor(Math.random() * (maxScreen-minScreen+1)) + minScreen
    let nbAleatoireApparition = Math.floor(Math.random() * (2)) + 0
    let coinXNum = parseInt(coin.style.left)
    coin.style.top = nbAleatoirePositionTop + "px"
    coin.style.left = "2000px"
    coin.style.width = "70px"
    coin.style.position = "absolute"
    if(nbAleatoireApparition == 1){
        parentCoin.appendChild(coin)
        setInterval(function(){
            if(coin.x > -100){
                coinXNum = coinXNum - 6                                    
                coin.style.left = coinXNum+"px" 
                }
                else if(coin.x<-70){
                    clearInterval()
                    coin.remove()
                }
                if(isCollide(heroCar,coin)){
                    score = score + 100;
                    updateScore.innerText = score ;
                    updateScore.value = score ;
                    coin.remove()
                    clearInterval()
                }
        },10)    
 
    }
},5000)

let entete = document.createElement('header')
main.appendChild(entete)
main.insertBefore(entete, playZone)

entete.style.display = "flex"
entete.style.justifyContent = "space-between"

//déclaration de l'audio
let audio = document.createElement("audio")
entete.appendChild(audio)
audio.id = "monAudio"
audio.src = "sons/ambient.mp3"
audio.autoplay = true
audio.controls = true
audio.volume = 0.4
audio.style.backgroundColor = "white"
audio.style.opacity = 0.5
audio.style.borderRadius = "200px"
audio.style.margin = "10px"

//déclaration du compteur de score
let scoreCounter = document.createElement('div')
entete.appendChild(scoreCounter)
scoreCounter.id = "score"
scoreCounter.style.display = "flex"
scoreCounter.style.justifyContent = "space-between"
scoreCounter.style.fontFamily = "monospace"
scoreCounter.style.fontSize = "30px"

let titleScore = document.createElement('div')
scoreCounter.appendChild(titleScore)
titleScore.id = "titleScore"
titleScore.innerText = "Score : "
let updateScore = document.createElement('div')
scoreCounter.appendChild(updateScore)
updateScore.id = "actualScore" 
updateScore.innerText = score
updateScore.value = score 






   



