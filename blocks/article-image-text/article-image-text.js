export default function decorate(block) {
  const [title, subtitle, description, bulletPoints, image] = [...block.children];

  title.className = 'article-title';
  subtitle.className = 'article-subtitle';
  description.className = 'article-description';
  bulletPoints.className = 'article-bullet-points';
  image.className = 'article-image';

  block.classList.add('article-image-text-block');
}
