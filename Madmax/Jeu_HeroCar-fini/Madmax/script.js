
//crèe un champs de saise de 



    let val = document.querySelector('#parent');
    let title = document.createElement("img");
    title.src = "images/Logo-v1img.png";
    val.appendChild(title);
    let champs = document.createElement('input');

    champs.placeholder="Pseudo";
  
    val.appendChild(champs);
    let form = document.createElement("form");
    val.appendChild(form);
    form.innerText = "Chose Your carHero"; 
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.alignItems = "start";
    form.style.widtch ="50%"
  
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
        car.name = "nom"//cela permet de séléctionner un boutton à la fois
        let carImage = document.createElement("img");
        carImage.src = "images/carHero"+i + ".gif";
        parentCar.appendChild(carImage);
        carImage.style.width = "150px"; // taille des car hero dans le menu
      
      
       
       
   }
   let chooseCar 
   console.log(chooseCar)
   let btn = document.createElement('button');
   btn.innerText="Play";
   btn.style.color="red";
   val.appendChild(btn);
    


//creation de pseudo et passage de la page d'accueil au jeu

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

                alert("Choisissez votre Vehicule")
            }
        }
else {

    
    let erreur = prompt("Entrez au moins un caractère!");
    
    //let nPseudo = document.createElement("input");

    champs.value = erreur;
    
}     
   })
    val.style.display = "flex";
    val.style.flexDirection = "column";
    val.style.width="50%";
    val.style.margin="auto"; 
    let body = document.querySelector("body")
    body.style.height = "100vh"
    body.style.display = "flex";
    body.style.alignItems = "center";
    body.style.backgroundImage = "url(images/maxbg.jpg)";

    
//

