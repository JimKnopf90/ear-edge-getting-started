export default function decorate(block) {
  const [heading, text] = [...block.children];

  heading.className = 'header-heading';
  text.className = 'header-text';

  block.classList.add('header-text-block');
}
