
const cacheName = 'v1';
const cacheAssets = [
  'about.html',
  'index.html',
  'main.js',
  'style.css'
];

self.addEventListener('install', e => {
  
  e.waitUntil(
    caches
    .open(cacheName)
    .then(cache => { 
      console.log('caching files');
      cache.addAll(cacheAssets); 
    })
    .then( () => self.skipWaiting() )
    .catch(error => { console.log(error) })
  );

});

self.addEventListener('activate', e => {
  console.log(1)
  e.waitUntil(
    
    caches.keys().then(cacheNames => {
      
      return Promise.all(
        cacheNames.map(cache => {
        
          if(cache !== cacheName){
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch( () => caches.match(e.request) )
  )
})