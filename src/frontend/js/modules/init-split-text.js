export default async function initSplitText() {
  const elements = document.querySelectorAll('[data-line-wrap-split]');

  elements.forEach((element) => {
    const text = element.textContent;
    const words = text.split(' ');
    element.innerHTML = words
      .map((word) => `<span class="line-wrap">${word}</span>`)
      .join(' ');
  });

  return Promise.resolve();
}
