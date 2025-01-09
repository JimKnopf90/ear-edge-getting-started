
export default function decorate(block) {

    const divs = block.children;

    for (let i = 1; i < divs.length; i++) {
        const originalDiv = divs[i];

        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('teaser-m-wrapper');

        originalDiv.parentNode.insertBefore(wrapperDiv, originalDiv);
        wrapperDiv.appendChild(originalDiv);
    }
}
