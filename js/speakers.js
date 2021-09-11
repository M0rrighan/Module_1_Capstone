const speakers = [
  {
    name: 'Spugna Alzagomito',
    role: 'experienced oenologists',
    info: 'Expert in markets and enology, he is one of the most authoritative voices on "authentic or natural" wine, a theme to which he has also dedicated a book',
    pictureUrl: './img/enologo1.jpg',
  },
  {
    name: 'Grozda Belovinsky',
    role: 'experienced wine maker',
    info: 'She denies using a recipe but her wines undoubtedly have her strong fingerprint. She supports the hyperselection of grapes, also through optical sorters, to vinify only absolutely ripe grapes.',
    pictureUrl: './img/enologo2.jpg',
  },
  {
    name: 'Risto Lozarski',
    role: 'experienced oenologists',
    info: 'He is an expert who loves a contemporary style of wine based on elegance, the containment of alcohol and the use of wood.',
    pictureUrl: './img/enologo3.jpg',
  },
  {
    name: 'Acino Buongustaia',
    role: 'sommelier',
    info: 'He has created a very special wine list, which leads guests to discover bottles that are not at all obvious, coming from both Italy and the rest of the world..',
    pictureUrl: './img/enologo4.jpg',
  },
  {
    name: 'Boem Amavino',
    role: 'experienced oenologists',
    info: 'He is an expert who loves a contemporary style of wine based on elegance, the containment of alcohol and the use of wood.',
    pictureUrl: './img/enologo5.jpg',
  },
  {
    name: 'Grappolo Bianchi',
    role: 'sommelier',
    info: 'He has created a very special wine list, which leads guests to discover bottles that are not at all obvious, coming from both Italy and the rest of the world..',
    pictureUrl: './img/enologo6.jpg',
  },
];

function createSpeakerCard(speakerDataObj) {
  const card = document.createElement('li'); // parent element
  card.classList.add('speakerCard');

  const pictSide = document.createElement('div'); // picture side parent
  pictSide.classList.add('speakerPicture');

  const pictHolder = document.createElement('div');
  pictHolder.classList.add('pictureHolder');

  const image = document.createElement('img');
  image.classList.add('picture');
  image.src = speakerDataObj.pictureUrl;
  image.alt = `Picture of: ${speakerDataObj.name} - ${speakerDataObj.role}`;

  pictHolder.appendChild(image);
  pictSide.appendChild(pictHolder);
  card.appendChild(pictSide);
  // End picture side

  const speakerData = document.createElement('div'); // speaker data parent
  speakerData.classList.add('speakerData');

  const speakerName = document.createElement('div');
  speakerName.classList.add('speakerName');
  speakerName.innerText = speakerDataObj.name;

  const speakerRole = document.createElement('div');
  speakerRole.classList.add('speakerRole');
  speakerRole.innerText = speakerDataObj.role;

  const separator = document.createElement('p');
  separator.classList.add('separatorSmall');

  const speakerInfo = document.createElement('div');
  speakerInfo.classList.add('speakerInfo');
  speakerInfo.innerText = speakerDataObj.info;

  speakerData.appendChild(speakerName);
  speakerData.appendChild(speakerRole);
  speakerData.appendChild(separator);
  speakerData.appendChild(speakerInfo);

  card.appendChild(speakerData);

  return card;
}

const parentElmnt = document.querySelector('.speakersContent');

function populateFirsts() {
  for (let i = 0; i < 2; i += 1) {
    parentElmnt.appendChild(createSpeakerCard(speakers[i]));
  }
}

function populateMore() {
  for (let i = 2; i < speakers.length; i += 1) {
    parentElmnt.appendChild(createSpeakerCard(speakers[i]));
  }
}

function populateAll() {
  populateFirsts();
  populateMore();
}

function populate(m) {
  if (m.matches) {
    populateAll();
  } else {
    populateFirsts();
  }
}

const mType = window.matchMedia('(min-width: 768px)');
parentElmnt.onload = populate(mType);

const expandBtn = document.querySelector('.main__speakers .expand');

expandBtn.addEventListener('click', () => {
  populateMore();
  expandBtn.style.display = 'none';
});
