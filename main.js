
// Sélectionner la div et le bouton
let maDiv = document.querySelector("#maDiv");
let monBouton = document.querySelector("#monBouton");

// Modifier le texte de la div
maDiv.innerText = "Nouveau texte";


// Créer un élément <p>
let paragraphe = document.createElement("p");
paragraphe.textContent = "Ceci est un paragraphe ajouté avec JavaScript.";

// Ajouter le paragraphe à la div
maDiv.appendChild(paragraphe);

// Créer un nouveau bouton
let nouveauBouton = document.createElement("button");
nouveauBouton.innerText = "Clique ici !";

// Ajouter le bouton à la page
document.body.appendChild(nouveauBouton);

// Quand on clique sur le bouton, afficher un message dans la console
nouveauBouton.addEventListener("click", function () {
  console.log("Le nouveau bouton a été cliqué !");
});


// Créer un autre bouton pour changer le style
let boutonStyle = document.createElement("button");
boutonStyle.innerText = "Changer la couleur";
document.body.appendChild(boutonStyle);

// Quand on clique sur le bouton, changer la couleur et la taille du texte
boutonStyle.addEventListener("click", function () {
  maDiv.style.backgroundColor = "lightblue";
  maDiv.style.fontSize = "20px";
});

// Quand on clique sur le bouton existant (#monBouton), changer le texte de la div
monBouton.addEventListener("click", function () {
  maDiv.innerText = "Le texte a changé !";
});
