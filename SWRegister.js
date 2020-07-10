/**
 * Service Worker Register
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./Service-Worker.js') 
    .then(function () {
        console.log('Service Worker registered');
    })
    .catch(function () {
        console.log('Service Worker failed to register');
    });
}
  