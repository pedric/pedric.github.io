// sw_cached_pages.js

if(navigator.serviceWorker) {
  window.addEventListener('load',() => {
    navigator.serviceWorker.register('sw_cached_pages.js')
    .then(registration => console.log('SW registered') )
    .catch(err => console.log('fail', err) );
  });
}