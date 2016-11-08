var revealConfig = {
      // Full list of configuration options available at:
      // https://github.com/hakimel/reveal.js#configuration
      controls: true,
      progress: true,
      history: true,
      center: true,
      transition: 'convex', // none/fade/slide/convex/concave/zoom
      // Optional reveal.js plugins
      dependencies: [
            { src: './lib/lib/js/classList.js', condition: function() { return !document.body.classList; } },
            { src: './lib/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: './lib/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: './lib/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
            { src: './lib/plugin/zoom-js/zoom.js', async: true },
            { src: './lib/plugin/notes/notes.js', async: true }
      ]
};
