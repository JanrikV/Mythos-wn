/*
  Mythos
  Based on Identity-Theme by HTML5 UP
  html5up.net | @n33co

  bg.jpg @freepik.com
  by wirestock

*/

if (typeof(gtag) !== 'function') {
    gtag = function() { console.log('GoogleAnalytics not present.'); }
}

if ('addEventListener' in window) {
    window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}