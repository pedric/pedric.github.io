
const cacheName = 'v2';

self.addEventListener('install', e => {

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
    fetch(e.request)
    .then(result => {
      // clone response
      const resultClone = result.clone();
      // open cache
      caches
      .open(cacheName)
      .then( cache => {
        cache.put(e.request, resultClone)
      })
      return result;
    })
    .catch( (err) => caches.match(e.request).then(res => res) )
  )
})