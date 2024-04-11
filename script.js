// Récupération des différents éléments
const imageContainer = document.querySelector(".img__container");
const btn = document.querySelector(".btn");

// Création de la constante imageNumber réglée de base à 8
const imageNumber = 8;

// Déclaration de la fonction addNewImages qui va permettre d'ajouter des images
const addNewImages = () => {
  // Boucle for qui va parcourir imageNumber
  for (let i = 0; i < imageNumber; i++) {
    // Création d'un élément HTML img et insertion dans le DOM
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainer.appendChild(newImg);
  }
};

// Ecoute de l'événement click sur le bouton et appel de la fonction addNewImages
btn.addEventListener("click", addNewImages);
