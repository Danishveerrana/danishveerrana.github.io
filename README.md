<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap" rel="stylesheet">
  <title>Personal Website</title>
  <style>
    /* General body and text setup */
    html, body {
      font-family: 'Roboto Mono', monospace; /* Monospace font */
      background-color: #121212; /* Deep dark background */
      color: #e0e0e0; /* Soft light text */
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    /* Smooth fade-in animation */
    body {
      animation: fadeIn 1.5s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    h1, h2, h3, h5, h6 {
      margin: 0;
    }

    /* Intro Section Styling */
    .intro {
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px;
    }

    h1 {
      font-size: 3rem;
      font-weight: 700;
      color: #64ffda; /* Premium teal */
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 300;
      line-height: 1.6;
      color: #b3b3b3; /* Subtle light gray */
    }

    h5, h6 {
      color: #80cbc4; /* Soft teal */
    }

    /* Scrambled Text Section */
    .container {
      height: 20%;
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text {
      font-size: 2rem;
      font-weight: 700;
      color: #64ffda;
      text-shadow: 0 2px 5px rgba(0, 255, 234, 0.3);
    }

    .dud {
      color: #ffab91; /* Coral for scrambled characters */
    }

    /* Buttons and Links */
    button, a {
      font-family: 'Roboto Mono', monospace;
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
      color: inherit;
    }

    a {
      text-decoration: none;
      color: #64ffda;
      transition: color 0.3s ease-in-out;
    }

    a:hover {
      color: #ffd740; /* Luxury gold */
    }

    button {
      padding: 10px 20px;
      border: 2px solid #64ffda;
      border-radius: 5px;
      background-color: transparent;
      color: #64ffda;
      font-weight: bold;
      font-size: 1rem;
      transition: all 0.3s ease-in-out;
    }

    button:hover {
      background-color: #64ffda;
      color: #121212;
      transform: scale(1.05);
    }

    /* Social Media Section */
    .social-media {
      width: 100%;
      text-align: center;
      margin-top: 50px;
    }

    .social-media h2 {
      font-size: 1.5rem;
      color: #80cbc4;
      margin-bottom: 20px;
    }

    .yek-social__list {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    .yek-social__item {
      width: 64px;
      height: 64px;
    }

    .yek-social__button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #1c1c1c;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }

    .yek-social__icon {
      font-size: 2rem;
      color: #e0e0e0;
    }

    .yek-social__link:hover .yek-social__button {
      transform: translateY(-5px);
      background-color: #64ffda;
    }

    .yek-social__link:hover .yek-social__icon {
      color: #121212;
    }

    /* Contact Form Styling */
    .contact-form {
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      background-color: #1e1e1e;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    }

    .contact-form h2 {
      font-size: 1.5rem;
      color: #64ffda;
      margin-bottom: 20px;
    }

    .contact-form label {
      display: block;
      margin-bottom: 5px;
      font-size: 1rem;
    }

    .contact-form input, .contact-form textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #64ffda;
      border-radius: 5px;
      background-color: #2e2e2e;
      color: #e0e0e0;
      font-family: 'Roboto Mono', monospace;
    }

    .contact-form button {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #64ffda;
      color: #121212;
      font-weight: bold;
      transition: background-color 0.3s ease-in-out;
    }

    .contact-form button:hover {
      background-color: #ffd740;
    }
  </style>
</head>
<body>
  <div class="intro">
    <h1>I'm</h1>
    <div class="container">
      <div class="text"></div>
    </div>
    <h1>Introduction</h1>
    <h3>Hi, I'm Danish Veer Rana, an 11th-grade student from Jammu & Kashmir, India. I'm passionate about programming, editing, and photography. With a love for technology, I'm always experimenting with new ideas to create useful tools, software, and inventions that can make a real impact. I believe in the power of tech to change lives, and I'm excited to keep learning, building, and pushing the boundaries of what's possible!</h3>
    <h5>Site will be updated soon. Thank you</h5>
    <h6>You can contribute by suggesting me some improvements via mailing.</h6>
  </div>

  <div class="social-media">
    <h2>Social media Accounts</h2>
    <div class="yek-social">
      <ul class="yek-social__list">
        <li class="yek-social__item">
          <a class="yek-social__link" href="mailto:veerdanish452008@gmail.com">
            <div class="yek-social__button"><i class="yek-social__icon fa fa-envelope"></i></div>
          </a>
        </li>
        <li class="yek-social__item">
          <a class="yek-social__link" href="https://github.com/danishveerrana">
            <div class="yek-social__button"><i class="yek-social__icon fab fa-github-alt"></i></div>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="contact-form">
    <h2>Contact Me</h2>
    <form action="mailto:veerdanish452008@gmail.com" method="post" enctype="text/plain">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="4" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>

  <script>
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
      }

      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
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
        return new Promise((resolve) => (this.resolve = resolve));
      }

      update() {
        let output = '';
        let complete = 0;
        for (let { from, to, start, end, char } of this.queue) {
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[this.queue.indexOf({ from, to, start, end })].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }

      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const phrases = ['Danish Veer Rana', 'a good Photographer', 'Tech Enthusiast', 'an Editor'];
    const el = document.querySelector('.text');
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2000);
      });
      counter = (counter + 1) % phrases.length;
    };
    next();
  </script>
</body>
</html>
