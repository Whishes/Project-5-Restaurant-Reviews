self.addEventListener('install', function (evt) {
	evt.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			return cache.addAll([
				'/',
                'css/styles.css',
                'css/responsive.css',
				'img/1.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				'img/9.jpg',
				'img/10.jpg',
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'js/swregister.js',
				'index.html',
				'restaurant.html'
			]);
		})
	);
});

self.addEventListener('fetch', (evt) => {
	evt.respondWith(
		caches.match(evt.request)
		.then((response) => {
			return response || fetch(evt.request);
		})
	);
})