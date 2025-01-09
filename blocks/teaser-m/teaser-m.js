export default function decorate(block) {
    const divs = Array.from(block.children);

    if (divs.length > 1) {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('teaser-m-wrapper');

        for (let i = 1; i < divs.length; i++) {
            wrapperDiv.appendChild(divs[i]);
        }
        
        divs[0].parentNode.insertBefore(wrapperDiv, divs[1]);
    }
}