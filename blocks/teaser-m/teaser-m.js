
export default function decorate(block) {
    const divs = block.children;

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('teaser-m-wrapper');

    const header = divs[0];

    for (let i = 1; i < divs.length; i++) {
        wrapperDiv.appendChild(divs[i]);
    }
    divs.appendChild(header);
    divs.appendChild(wrapperDiv);
}