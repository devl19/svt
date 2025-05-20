const plantData = {
  rose: {
    title: 'Rose',
    img: 'A.jpeg',
    desc: 'La rose est célèbre pour sa beauté et son parfum.',
    anatomy: 'A2.jpeg',
    anatomyText: 'Pétales, sépales, étamines, pistil, tige épineuse.'
  },
  tulip: {
    title: 'Tulipe',
    img: 'T.jpeg',
    desc: 'Symbole du printemps, la tulipe est très appréciée.',
    anatomy: 'T2.jpeg',
    anatomyText: '6 pétales, 6 étamines, 1 pistil, bulbe souterrain.'
  },
  orchid: {
    title: 'Orchidée',
    img: 'E.jpeg',
    desc: 'L’orchidée est connue pour sa diversité et sa beauté.',
    anatomy: 'E2.jpeg',
    anatomyText: '3 pétales, 3 sépales, labelle, colonne, racines aériennes.'
  },
  lys: {
    title: 'Lys',
    img: 'lys.jpeg',
    desc: 'Le lys symbolise la pureté et l’élégance.',
    anatomy: 'lys2.jpeg',
    anatomyText: '6 pétales, 6 étamines, 1 pistil, bulbe.'
  },
  marguerite: {
    title: 'Marguerite',
    img: 'marguerite.jpeg',
    desc: 'La marguerite est une fleur champêtre très populaire.',
    anatomy: 'marguerite2.jpeg',
    anatomyText: 'Pétales blancs, cœur jaune, tige fine.'
  },
  tournesol: {
    title: 'Tournesol',
    img: 'tournesol.jpeg',
    desc: 'Le tournesol suit la course du soleil.',
    anatomy: 'tournesol2.jpeg',
    anatomyText: 'Grand disque central, pétales jaunes, tige robuste.'
  },
  violette: {
    title: 'Violette',
    img: 'violette.jpeg',
    desc: 'Petite fleur parfumée de couleur violette.',
    anatomy: 'violette2.jpeg',
    anatomyText: '5 pétales, feuilles en cœur, tige fine.'
  },
  pivoine: {
    title: 'Pivoine',
    img: 'pivoine.jpeg',
    desc: 'La pivoine est appréciée pour ses grandes fleurs colorées.',
    anatomy: 'pivoine2.jpeg',
    anatomyText: 'Nombreux pétales, étamines dorées, feuillage dense.'
  },
  camélia: {
    title: 'Camélia',
    img: 'camelia.jpeg',
    desc: 'Le camélia fleurit en hiver et au printemps.',
    anatomy: 'camelia2.jpeg',
    anatomyText: 'Pétales épais, feuilles brillantes, étamines jaunes.'
  },
  jasmin: {
    title: 'Jasmin',
    img: 'jasmin.jpeg',
    desc: 'Le jasmin est célèbre pour son parfum envoûtant.',
    anatomy: 'jasmin2.jpeg',
    anatomyText: 'Petites fleurs blanches, feuilles opposées.'
  },
  lavande: {
    title: 'Lavande',
    img: 'lavande.jpeg',
    desc: 'La lavande est utilisée en parfumerie et en cuisine.',
    anatomy: 'lavande2.jpeg',
    anatomyText: 'Épis violets, feuilles étroites, tige ligneuse.'
  },
  coquelicot: {
    title: 'Coquelicot',
    img: 'coquelicot.jpeg',
    desc: 'Le coquelicot colore les champs de rouge vif.',
    anatomy: 'coquelicot2.jpeg',
    anatomyText: '4 pétales rouges, capsule de graines, tige fine.'
  },
  dahlia: {
    title: 'Dahlia',
    img: 'dahlia.jpeg',
    desc: 'Le dahlia offre une grande variété de formes et de couleurs.',
    anatomy: 'dahlia2.jpeg',
    anatomyText: 'Nombreux pétales, tubercules souterrains.'
  },
  hibiscus: {
    title: 'Hibiscus',
    img: 'hibiscus.jpeg',
    desc: 'L’hibiscus est une fleur tropicale spectaculaire.',
    anatomy: 'hibiscus2.jpeg',
    anatomyText: '5 pétales, long pistil, feuilles dentelées.'
  },
  anémone: {
    title: 'Anémone',
    img: 'anemone.jpeg',
    desc: 'L’anémone fleurit au printemps.',
    anatomy: 'anemone2.jpeg',
    anatomyText: 'Pétales colorés, centre noir, tige fine.'
  },
  iris: {
    title: 'Iris',
    img: 'iris.jpeg',
    desc: 'L’iris est reconnu pour ses couleurs vives.',
    anatomy: 'iris2.jpeg',
    anatomyText: '3 pétales dressés, 3 sépales retombants, rhizome.'
  },
  perce_neige: {
    title: 'Perce-neige',
    img: 'perce_neige.jpeg',
    desc: 'Le perce-neige annonce la fin de l’hiver.',
    anatomy: 'perce_neige2.jpeg',
    anatomyText: 'Fleurs blanches pendantes, bulbe.'
  },
  narcisse: {
    title: 'Narcisse',
    img: 'narcisse.jpeg',
    desc: 'Le narcisse est une fleur printanière jaune ou blanche.',
    anatomy: 'narcisse2.jpeg',
    anatomyText: 'Couronne centrale, pétales, bulbe.'
  },
  azalée: {
    title: 'Azalée',
    img: 'azalee.jpeg',
    desc: 'L’azalée fleurit abondamment au printemps.',
    anatomy: 'azalee2.jpeg',
    anatomyText: 'Petites fleurs groupées, feuilles persistantes.'
  },
  cyclamen: {
    title: 'Cyclamen',
    img: 'cyclamen.jpeg',
    desc: 'Le cyclamen fleurit en hiver.',
    anatomy: 'cyclamen2.jpeg',
    anatomyText: 'Fleurs retournées, feuilles marbrées, tubercule.'
  },
  freesia: {
    title: 'Freesia',
    img: 'freesia.jpeg',
    desc: 'Le freesia est apprécié pour son parfum.',
    anatomy: 'freesia2.jpeg',
    anatomyText: 'Fleurs en grappes, tige fine, bulbe.'
  },
  glaïeul: {
    title: 'Glaïeul',
    img: 'glaieul.jpeg',
    desc: 'Le glaïeul est utilisé en bouquets.',
    anatomy: 'glaieul2.jpeg',
    anatomyText: 'Fleurs en épi, feuilles en épée, corme.'
  },
  hortensia: {
    title: 'Hortensia',
    img: 'hortensia.jpeg',
    desc: 'L’hortensia offre de grandes boules de fleurs.',
    anatomy: 'hortensia2.jpeg',
    anatomyText: 'Fleurs groupées, feuilles larges.'
  },
  magnolia: {
    title: 'Magnolia',
    img: 'magnolia.jpeg',
    desc: 'Le magnolia fleurit au début du printemps.',
    anatomy: 'magnolia2.jpeg',
    anatomyText: 'Grandes fleurs, feuilles épaisses.'
  },
  myosotis: {
    title: 'Myosotis',
    img: 'myosotis.jpeg',
    desc: 'Le myosotis symbolise le souvenir.',
    anatomy: 'myosotis2.jpeg',
    anatomyText: 'Petites fleurs bleues, tige fine.'
  },
  primevère: {
    title: 'Primevère',
    img: 'primevere.jpeg',
    desc: 'La primevère fleurit dès la fin de l’hiver.',
    anatomy: 'primevere2.jpeg',
    anatomyText: 'Fleurs en rosette, feuilles gaufrées.'
  },
  renoncule: {
    title: 'Renoncule',
    img: 'renoncule.jpeg',
    desc: 'La renoncule a des pétales brillants.',
    anatomy: 'renoncule2.jpeg',
    anatomyText: 'Nombreux pétales, tige creuse.'
  },
};


const cards = document.querySelectorAll('.card');
const searchInput = document.getElementById('search-input');

searchInput.placeholder = "Rechercher une plante...";

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  let lastVisible;

  cards.forEach(card => {
    const title = card.querySelector('h2').textContent.trim().toLowerCase();
    if (!query || title.includes(query)) {
      card.style.display = 'block';
      visibleCount++;
      lastVisible = card;
    } else {
      card.style.display = 'none';
    }
  });

  if (visibleCount === 1) {
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Enter') {
        lastVisible.click();
        document.removeEventListener('keydown', handler);
      }
    });
  }
});

cards.forEach(card =>
  card.addEventListener('click', () => {
    const key = card.dataset.plant;
    const data = plantData[key];
    document.getElementById('plant-content').innerHTML = `
      <div class="plant-section">
        <h2>${data.title}</h2>
        <img src="${data.img}" alt="${data.title}">
        <p>${data.desc}</p>
        <h3>Anatomie de la ${data.title}</h3>
        <img src="${data.anatomy}" alt="Anatomie de la ${data.title}">
        <p>${data.anatomyText}</p>
      </div>`;
    document.getElementById('cards-view').style.display = 'none';
    document.getElementById('plants-view').style.display = 'block';
  })
);

document.getElementById('btn-back').textContent = "Retour";
document.getElementById('btn-back').addEventListener('click', () => {
  document.getElementById('plants-view').style.display = 'none';
  document.getElementById('cards-view').style.display = 'block';
});