export default function decorate(block) {
    block.classList.add('image-variant');  
    const sizeElement = block.querySelector('p[data-aue-prop="size"]');
    let size = 'm';
    if (sizeElement) {
      size = sizeElement.textContent.trim();
    }
    const normalizedSize = size.toLowerCase();
    block.classList.add(`size-${normalizedSize}`);
  }