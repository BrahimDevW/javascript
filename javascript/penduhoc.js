const listMots = ['armoire', {mot : "banc", indices :[]}, 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'clef', 'coin', 'couloir', 'dossier', 'eau',
    'ecole', 'ecriture', 'entree', 'escalier', 'etagere', 'etude', 'exterieur',
    'fenetre', 'interieur', 'lavabo', 'lecture', 'lit', 'marche', 'matelas', 'maternelle', 'recreation',];

function motsAleatoire() {
    let mots = Math.floor(Math.random() * listMots.length);
    let motChoisi = listMots[mots];
    return motChoisi
}

function tableau(leMot) {
    let tab = leMot.split("")
    return tab
}


const img = document.createElement("img")
img.src = "./image/pendu7.png"
document.getElementById("image").appendChild(img)

let mot = tableau(motsAleatoire())

let nbchance = 7 
const chance = document.createElement("h2")
chance.innerHTML = nbchance 


document.getElementById("title").appendChild(chance)

        
let input = document.querySelector("#ajout")

mot.forEach((lettre, index) => {
    const btn = document.createElement("button")
    btn.id = index + lettre
    const baliseMot = document.getElementById("mot")
    btn.innerHTML = "_"
    baliseMot.appendChild(btn)
})

function checkIfExist(lettre) {
    mot.forEach((element,index) => {
       if(input.value == lettre){
        document.getElementById(index + lettre).innerHTML = lettre
       }
    })
    if (!mot.includes(lettre) && chance.innerHTML > 0){
        chance.innerHTML = nbchance - 1
        nbchance--
        img.src = "./image/pendu" + nbchance + ".png"
    }else if(nbchance == 0 ){
        chance.innerHTML = "Perdu"

    }
}