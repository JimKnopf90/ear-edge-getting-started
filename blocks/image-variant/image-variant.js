export default function decorate(block) {
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';

    // Extract the image and size from the block's data attributes
    const imageElement = block.querySelector('img');
    const size = block.dataset.size || 'm'; // Default to 'm' if no size is provided

    // Set the image size class based on the size
    imageElement.className = `image-size-${size}`;

    // Wrap the image in the wrapper
    imageWrapper.appendChild(imageElement);

    // Replace block content with the new structure
    block.replaceChildren(imageWrapper);
}