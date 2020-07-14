const WHO_TO_FOLLOW = [
  // en (English)
  'Who to follow',
  // ko (Korean)
  '팔로우 추천',
];

const YOU_MIGHT_LIKE = [
  // en (English)
  'You might like',
  // ko (Korean)
  '팔로우 추천',
];

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('side').forEach((e) => {
    if (YOU_MIGHT_LIKE.indexOf(e.getAttribute('aria-label')) < 0) {
      return;
    }
    const parent = e.parentElement;
    parent.parentElement.removeChild(parent);
  });
});

let executed;
window.addEventListener('scroll', (event) => {
  if (executed) return;

  if (window.scrollY < 800) return;

  document.querySelectorAll('span').forEach((e) => {
    if (WHO_TO_FOLLOW.indexOf(e.innerHTML) < 0) {
      return;
    }

    executed = true;
    const div =
      e.parentElement.parentElement.parentElement.parentElement.parentElement;
    const parent = div.parentElement;
    const children = parent.children;
    const start = Object.values(children).indexOf(div) - 2;
    const end = start + 7;
    for (let i = end; i >= start; i--) {
      if (children[i]) {
        parent.removeChild(children[i]);
      }
    }
  });
});
