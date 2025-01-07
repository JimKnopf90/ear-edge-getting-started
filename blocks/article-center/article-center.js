export default function decorate(block) {
    const ctaText = block.querySelector('p[data-aue-prop="ctaText"]');
    const ctaLink = block.querySelector('.article-center a');

    if (ctaText && ctaLink) {
        const linkUrl = ctaLink.textContent.trim();
        const linkElement = document.createElement('a');
        
        linkElement.href = linkUrl;
        linkElement.textContent = ctaText.textContent;
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';

        ctaText.replaceWith(linkElement);
        ctaLink.remove();

        embedYouTubeVideo();
    }   
  }

  function embedYouTubeVideo() {
    
    const youtubeLink = block.querySelector('p[data-aue-prop="youTubeLink"]');

    if (youtubeLink) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${youtubeLink.textContent.trim()}`;
        iframe.width = '560'; // Breite des Videos
        iframe.height = '315'; // Höhe des Videos
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true; // Ermöglicht Vollbildmodus

        youtubeLink.replaceWith(iframe);
    } else {
        console.error('Container not found');
    }
}