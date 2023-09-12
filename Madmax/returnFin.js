tableResultat = [{name: "Mélanie",value:900000},{name: "Clément",value:800000},{name: "Noë",value:700000},{name: "Youssef",value:1000000},{name: "Lucas",value:600000},{name: "Julien",value:500000},{name: "Marceau",value:400000},{name: "Sami",value:300000},{name: "Grégory",value:200000},{name: "Romain",value:100000}]
tableResultatTrie = tableResultat.sort(function (a, b) {
    if (a.value < b.value){
       return 1;
    }
    if (a.value > b.value ){
        return -1;
    }
    return 0;
  })
let classement = document.createElement("table")
classement.style.height = "500px"
classement.style.width = "500px"

let thead = document.createElement("thead")
classement.appendChild(thead)

let trThead = document.createElement("tr")
thead.appendChild(trThead)

let thTrThead = document.createElement("th")
thTrThead.innerText = "Classement"
thTrThead.colspan = "2"
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
}
