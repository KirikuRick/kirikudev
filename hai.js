function typeWriter(element, text, speed, callback) {
  let i = 0;
  element.textContent = '';
  let cursorSpan = document.createElement('span');
  cursorSpan.className = 'cursor';
  cursorSpan.textContent = '';
  element.appendChild(cursorSpan);
  function typing() {
    if (i < text.length) {
      if (text.charAt(i) === '\n') {
        cursorSpan.before(document.createElement('br'));
      } else {
        cursorSpan.before(document.createTextNode(text.charAt(i)));
      }
      i++;
      setTimeout(typing, speed);
    } else {
      if (callback) callback();
    }
  }
  typing();
}

window.onload = () => {
  const nameEl = document.getElementById("typing-name");
  const bioEl = document.getElementById("typing-bio");
  const nameText = nameEl.textContent;
  const bioText = bioEl.innerHTML.replace(/<br\s*\/?>(\s*)/gi, '\n');
  nameEl.textContent = '';
  bioEl.textContent = '';
  typeWriter(nameEl, nameText, 100, () => {
    const nameCursor = nameEl.querySelector('.cursor');
    if (nameCursor) nameCursor.remove();
    typeWriter(bioEl, bioText, 50);
  });
};
