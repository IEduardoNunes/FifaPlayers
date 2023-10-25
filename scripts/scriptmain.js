let neymar = new Neymar('Junior', 'LW', 'Paris Saint-German');
let messi = new Messi('Lionel', 'RW', 'Inter Miami');
let cr7 = new CristianoRonaldo('Cristiano', 'ST', 'Al Nassr');
let vini = new ViniJunior('Junior', 'LW', 'Real Madrid');
let haaland = new Haaland('Erling', 'ST', 'Manchester City');
let mbappe = new Mbappe('Kylian', 'ST', 'Paris Saint-German');

const btnNeymar = document.querySelector('#neymar');
btnNeymar.addEventListener('click', function(){clickedNeymar();});
const btnMessi = document.querySelector('#messi');
btnMessi.addEventListener('click', function(){clickedMessi();});
const btnCr7 = document.querySelector('#cr7');
btnCr7.addEventListener('click', function(){clickedCristiano();});
const btnVini = document.querySelector('#vinijr');
btnVini.addEventListener('click', function(){clickedVini();});
const btnHaaland = document.querySelector('#haaland');
btnHaaland.addEventListener('click', function(){clickedHaaland();});
const btnMbappe = document.querySelector('#mbappe');
btnMbappe.addEventListener('click', function(){clickedMbappe();});


const pace1 = document.querySelector('#pace1');
const shooting1 = document.querySelector('#shooting1');
const passing1 = document.querySelector('#passing1');
const dribbling1 = document.querySelector('#dribbling1');
const defense1 = document.querySelector('#defense1');
const physical1 = document.querySelector('#physical1');

const pace2 = document.querySelector('#pace2');
const shooting2 = document.querySelector('#shooting2');
const passing2 = document.querySelector('#passing2');
const dribbling2 = document.querySelector('#dribbling2');
const defense2 = document.querySelector('#defense2');
const physical2 = document.querySelector('#physical2');


const playerPicture1 = document.querySelector('#player-picture1');
const name1 = document.querySelector('#name1');
const mainName1 = document.querySelector|('#main-name1');
const position1 = document.querySelector('#position1');
const shieldTeam1 = document.querySelector('#shield-team1');
const teamName1 = document.querySelector('#team-name1');

const playerPicture2 = document.querySelector('#player-picture2');
const name2 = document.querySelector('#name2');
const mainName2 = document.querySelector|('#main-name2');
const position2 = document.querySelector('#position2');
const shieldTeam2 = document.querySelector('#shield-team2');
const teamName2 = document.querySelector('#team-name2');


