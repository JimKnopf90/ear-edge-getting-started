/**
 * image-variant.js
 * 
 * Beispielhafte JS-Datei für den "image-variant"-Block.
 * Diese Funktion dekoriert ein Block-Element mit einer Bild-Variante
 * und liest dafür die eingestellte Größe aus einem data-Attribut aus.
 */

export default function decorate(block) {
    console.log('decorate image-variant');
    console.log(block);
    // Füge eine Grundklasse hinzu, um spätere Styles gezielt anzusprechen
    block.classList.add('image-variant');
  
    const sizeElement = block.querySelector('p[data-aue-prop="size"]');

    // Falls das Element vorhanden ist, lies den Text-Inhalt aus
    let size = 'm'; // Fallback-Wert oder Standardwert
    if (sizeElement) {
      size = sizeElement.textContent.trim(); // "l" in deinem Beispiel
    }
    console.log(size);
    // Normalisiere den Wert auf Kleinbuchstaben
    const normalizedSize = size.toLowerCase();
  
    // Füge eine class hinzu, anhand der wir in CSS das Bild skalieren
    block.classList.add(`size-${normalizedSize}`);
  
    // Optional: Wenn dein Block z.B. nur aus einem img-Element besteht,
    // kannst du hier das erste img selektieren und ggf. weitere Einstellungen vornehmen
    // const img = block.querySelector('img');
    // if (img) {
    //   // z.B. Alt-Text anpassen oder andere Eigenschaften
    // }
  }