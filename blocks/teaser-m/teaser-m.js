export default function decorate(block) {
    const divs = Array.from(block.children); // HTMLCollection in ein Array umwandeln

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('teaser-m-wrapper');

    const header = divs[0]; // Erstes Element

    // Füge alle divs (außer das erste) in den Wrapper ein
    for (let i = 1; i < divs.length; i++) {
        wrapperDiv.appendChild(divs[i]);
    }

    // Block bereinigen und die beiden Elemente (header und wrapper) hinzufügen
    block.innerHTML = ''; // Inhalt des Blocks leeren
    block.appendChild(header); // Header hinzufügen
    block.appendChild(wrapperDiv); // Wrapper hinzufügen
}