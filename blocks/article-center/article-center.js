export default function decorate(block) {
    const ctaText = block.querySelector('p[data-aue-prop="ctaText"]');
    const ctaLink = block.querySelector('p[data-aue-prop="ctaLink"]');

    if (ctaText && ctaLink) {
        const linkUrl = ctaLink.textContent.trim();
        const linkElement = document.createElement('a');
        
        linkElement.href = linkUrl;
        linkElement.textContent = ctaText.textContent;
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';

        console.log(linkElement)

        ctaText.replaceWith(linkElement);
    }
   
  }