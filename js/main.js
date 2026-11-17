// Animações de entrada sem dependências externas.
(function () {
   function splitWords(el) {
      var words = el.textContent.trim().split(/\s+/);
      el.textContent = '';

      words.forEach(function (word, i) {
         var span = document.createElement('span');
         span.className = 'word';
         span.style.setProperty('--i', i);
         span.textContent = word;
         el.appendChild(span);
         if (i < words.length - 1) {
            el.appendChild(document.createTextNode(' '));
         }
      });
   }

   function init() {
      var intro = document.getElementById('intro');
      if (intro) {
         splitWords(intro);
      }
      window.siteReady = true;
   }

   if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
   } else {
      init();
   }
})();
