const messages = [
	'Root access granted untuk Program Studi S1 Informatika di Universitas Alma Ata Yogyakarta. eksploitasi kesempatan ini dan jadilah master di bidang teknologi informasi!',
	'Decode the future dengan Program Studi S1 Informatika di Universitas Alma Ata Yogyakarta. jika kamu bisa crack kode ini, maka kamu siap untuk bergabung dengan komunitas yang membangun teknologi!',
	'Sysadmin wanted untuk Program Studi S1 Informatika di Universitas Alma Ata Yogyakarta. jika kamu siap untuk mengontrol sistem dan membangun jaringan, maka daftar sekarang dan jadilah bagian dari tim yang membangun teknologi informasi!'
];

(() => {
	console.log(
		'                                                             \n' +
			' _____ __    _____ _____ _____ _____ _____                   \n' +
			'|  _  |  |  |     |  _  |  _  |_   _|  _  |                  \n' +
			'|     |  |__| | | |     |     | | | |     |                  \n' +
			'|__|__|_____|_|_|_|__|__|__|__| |_| |__|__|                  \n' +
			'\n' +
			'\n' +
			' _____ _____ ___ _____ _____ _____ _____ ___ _____ __ __ \n' +
			'|  |  |   | |   |  |  |   __| __  |   __|   |_   _|  |  |\n' +
			'|  |  | | | |   |  |  |   __|    -|__   |   | | | |_   _|\n' +
			'|_____|_|___|___|\____/|_____|__|__|_____|___| |_|   |_|  \n' +
			'\n'
	);
	console.log(messages[Math.floor(Math.random() * messages.length)]);
	console.log('Info pendaftaran: https://go.almaata.ac.id/ctf \n');
}).call(this);
