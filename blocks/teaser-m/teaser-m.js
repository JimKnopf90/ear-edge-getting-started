export default function decorate(block) {
    const divs = Array.from(block.children);

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('teaser-m-item-wrapper');

    const header = divs[0];

    const h2Header = document.createElement('h2');
    h2Header.innerHTML = header.innerHTML;

    for (let i = 1; i < divs.length; i++) {
        divs[i].classList.add('teaser-m-item');
        divs[i].children[1].classList.add('teaser-m-item-title');
        wrapperDiv.appendChild(divs[i]);
    }
    
    block.innerHTML = '';
    block.appendChild(h2Header);
    block.appendChild(wrapperDiv);
}