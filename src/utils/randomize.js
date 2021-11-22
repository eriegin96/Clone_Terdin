export function randomPassion() {
	const passionList = [
		'90s Kid',
		'Foodie',
		'Sushi',
		'Instagram',
		'Walking',
		'Running',
		'Travel',
		'Language Exchange',
		'Movies',
		'Gold',
		'Capricorn',
		'Aquarius',
		'Pisces',
		'Scorpio',
		'Leo',
		'Cancer',
		'Gemini',
		'Virgo',
		'Taurus',
		'Sagitarius',
		'Reading',
		'Libra',
		'Aries',
		'Photography',
		'Sports',
		'Shopping',
		'Hiking',
		'Fishing',
		'Climbing',
		'Esports',
		'Surfing',
		'Gamer',
	];
	const passionsAmount = Math.ceil(Math.random() * 5);
	const arr = [];
	for (let i = 1; i <= passionsAmount; i++) {
		arr.push(passionList[Math.floor(Math.random() * passionList.length)]);
	}
	return arr;
}

export function randomStatus() {
	const status = [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		'Illa tamen simplicia, vestra versuta',
		'Hoc loco tenere se Triarius non potuit',
		'Bonum valitudo: miser morbus',
		'An tu me de L.Cur deinde Metrodori liberos commendas?',
		'Sullae consulatum? Primum divisit ineleganter; Primum quid tu dicis breve? Is es profecto tu',
		'Honesta oratio, Socratica, Platonis etiam',
		'Inde igitur, inquit, ordiendum est',
		'At hoc in eo M. Nobis aliter videtur, recte secusne, postea; Duo Reges: constructio interrete',
		'Conferam avum tuum Drusum cum C. Eam stabilem appellas',
		'Nunc haec primum fortasse audientis servire debemus',
	];
	return status[Math.floor(Math.random() * status.length)];
}

export function randomPhotos() {
	const photosAmount = Math.ceil(Math.random() * 5);
	const arr = Array(9).fill('');
	for (let i = 0; i <= photosAmount; i++) {
		arr[i] = (`https://picsum.photos/id/${Math.floor(Math.random() * 899 + 100)}/640/800`);
	}
	return arr;
}
