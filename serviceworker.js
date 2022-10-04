const cacheName = 'cache-students';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(['/students/', '/students/index.html', '/students/mystyle.css', '/students/members.json', '/students/nina.png', '/students/olivia.png', '/students/morten.png']);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then(cache => cache.match(event.request))
    )
  );
});