let produits = [
    { nom: "PC portable", prix: 900, image: "https://media.materiel.net/categories/409.jpg" },
    { nom: "Clavier mécanique", prix: 45, image: "https://kibodo.shop/cdn/shop/articles/bannieres-verticales-ulule-11-768x768.jpg?v=1642422719" },
    { nom: "Souris sans fil", prix: 25, image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/162/16298/16298181.jpeg" }
  ];
  
  let catalogue = document.getElementById("catalogue");
  
  produits.forEach(p => {
    let carte = document.createElement("div");
    carte.className = "carte";
    carte.innerHTML = `
      <img src="${p.image}" alt="${p.nom}">
      <h3>${p.nom}</h3>
      <p>Prix : ${p.prix} €</p>
    `;
    catalogue.appendChild(carte);
  });
  