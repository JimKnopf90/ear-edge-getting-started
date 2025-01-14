export default function decorate(block) {
    const divs = Array.from(block.children);
    console.log(divs);
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('teaser-wrapper');

    const header = divs[0];

    const h2Header = document.createElement('h2');
    h2Header.innerHTML = header.innerHTML;

    for (let i = 1; i < divs.length; i++) {
        divs[i].classList.add('teaser');
        divs[i].children[1].classList.add('teaser-title');
        wrapperDiv.appendChild(divs[i]);
    }
    
    block.innerHTML = '';
    block.appendChild(h2Header);
    block.appendChild(wrapperDiv);
}