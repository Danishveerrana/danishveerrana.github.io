document.addEventListener('DOMContentLoaded', () => {
  // Loader removal
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hide');
    document.body.classList.remove('no-scroll');
  }, 3500); // Loader timeout

  // Text scramble animation
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}--=+*^?#________';
      this.update = this.update.bind(this);
    }

    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => (this.resolve = resolve));
      this.queue = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }

      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }

    update() {
      let output = '';
      let complete = 0;

      this.queue.forEach(({ from, to, start, end, char }, i) => {
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      });

      this.el.innerHTML = output;

      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  }

  // Scramble effect
  const phrases = ['Danish Veer Rana', 'Tech Enthusiast', 'a good Photographer', 'an Editor'];
  const textEl = document.querySelector('.text');
  if (textEl) {
    const fx = new TextScramble(textEl);
    let counter = 0;
    const next = () => fx.setText(phrases[counter++ % phrases.length]).then(() => setTimeout(next, 2000));
    next();
  } else {
    console.error('Text element not found');
  }

  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  });
  revealElements.forEach(el => observer.observe(el));
});