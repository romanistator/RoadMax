// PAGE D'INDEX /////////////////////////////////////////
    let val = document.querySelector('#parent');
    val.style.display = "flex";
    val.style.flexDirection = "column";
    val.style.width="50%";
    val.style.margin="auto"; 
    let body = document.querySelector("body")
    body.style.height = "100vh"
    body.style.display = "flex";
    body.style.alignItems = "center";
    body.style.backgroundImage = "url(images/maxbg.jpg)";

    let title = document.createElement("img");
    title.src = "images/Logo-v1img.png";
    title.style.margin = "auto";
    title.style.marginBottom = "5rem";
    title.style.width = "75%";
    val.appendChild(title);
// Crée un champs de saise pour le pseudo ///////////////
    let champs = document.createElement('input');
    champs.placeholder="Ton pseudo";
    val.appendChild(champs);
    champs.style.margin = "1rem";
    champs.style.padding = "1rem";
    champs.style.fontFamily = "monospace";
    champs.style.textAlign = "center";
    champs.style.fontSize = "2rem";
    champs.style.fontWeight = "bold";
    champs.style.color = "#6c0c04";
    champs.style.backgroundColor = "rgba(0,0,0,0)";
    champs.style.border = "5px dashed #6c0c04";

    let form = document.createElement("form");
    val.appendChild(form);
    form.innerText = "Choisis ton véhicule : ";
    form.style.color = "#6c0c04"; 
    form.style.fontFamily = "monospace";
    form.style.fontSize = "1.6rem";
    form.style.display = "flex";
    form.style.alignItems = "center";
    form.style.marginTop = "1rem";
    form.style.marginBottom = "3rem";
  
   for (i=0; i<4; i++){
        let parentCar = document.createElement("article");
        form.appendChild(parentCar);
        parentCar.id ="parentCar"+i;

        let car = document.createElement("input");
        parentCar.appendChild(car);
        car.value = i
        car.id = "car" + i;
        car.type = "radio";
        car.style.opacity = "0";
        car.style.height = "50px";
        car.style.width = "150px";
        car.style.position = "absolute";
        car.name = "nom" //cela permet de sélectionner un boutton à la fois

        let carImage = document.createElement("img");
        carImage.src = "images/carHero"+i + ".gif";
        parentCar.appendChild(carImage);
        carImage.style.width = "150px"; // taille des car hero dans le menu

        car.addEventListener('mouseover', function(){
            carImage.style.backgroundColor = "#6c0c04";
        });
        
        car.addEventListener('mouseleave', function(){
            carImage.style.backgroundColor = "rgba(0,0,0,0)";
        });
    }

   //création du bouton Play
   let btn = document.createElement('button');
   btn.innerText="Play";
   btn.style.margin = "auto";
    btn.style.padding = "1rem";
    btn.style.width = "15rem";
    btn.style.fontFamily = "monospace";
    btn.style.textAlign = "center";
    btn.style.fontSize = "2rem";
    btn.style.fontWeight = "bold";
    btn.style.color = "#6c0c04";
    btn.style.backgroundColor = "rgba(0,0,0,0)";
    btn.style.border = "5px dashed #6c0c04";
    btn.style.transition = "0.5s";
    val.appendChild(btn);

    btn.addEventListener('mouseover', function(){
        btn.style.backgroundColor = "#6c0c04";
        btn.style.color = "yellow"; 
    });
    
    btn.addEventListener('mouseleave', function(){
        btn.style.color = "#6c0c04";
        btn.style.backgroundColor = "rgba(0,0,0,0)";
    });

   let carChecked1 = document.querySelector("#car0")
   let carChecked2 = document.querySelector("#car1")
   let carChecked3 = document.querySelector("#car2")
   let carChecked4 = document.querySelector("#car3")

   btn.addEventListener("click" , function(){

        if(champs.value !=="" && champs.value.length > 2){ // condition pour que le champs de la saisie soit non vide |et| superrieur à au moins 2 caractère 

            if(carChecked1.checked || carChecked2.checked || carChecked3.checked || carChecked4.checked ){ // condition pour choisir un vehicule avant de lancer un jeu 

                    if(document.querySelector("#car0").checked){
                        sessionStorage.setItem("car",1 , "pseudo", champs.value) // inscrire dans la session storage pseudo + vehicule
                    }
                    if(document.querySelector("#car1").checked){
                        sessionStorage.setItem("car",2 ,"pseudo", champs.value)
                    }
                    if(document.querySelector("#car2").checked){
                        sessionStorage.setItem("car",3 ,"pseudo", champs.value)
                    }
                    if(document.querySelector("#car3").checked){
                        sessionStorage.setItem("car",4 ,"pseudo", champs.value)
                    }
                    window.location.replace("madmax.html");
                    sessionStorage.setItem("pseudo", champs.value)
            }else{
                alert("Choisis ton véhicule !")
            }
        }
        else {

        let erreur = prompt("Entres au moins un caractère!");
        champs.value = erreur;   
        }     
   })  
//

