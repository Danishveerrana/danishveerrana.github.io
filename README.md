<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
  <title>Personal Portfolio</title>
  <style>
    /* General body and text setup */
    body {
      font-family: 'Roboto Mono', monospace;
      background-color: #0f0f0f;
      color: #d4d4d4;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }

    h1, h3, h5, h6 {
      margin: 0;
      padding: 10px 0;
    }

    h1 {
      color: #57a6e3;
      font-size: 2.5rem;
    }

    h3 {
      color: #9cdcfe;
      font-size: 1.2rem;
      line-height: 1.6;
    }

    h5, h6 {
      color: #4ec9b0;
    }

    a {
      color: #9cdcfe;
      text-decoration: none;
    }

    a:hover {
      color: #d7ba7d;
      text-decoration: underline;
    }

    button {
      background-color: #3f3f3f;
      color: #d4d4d4;
      border: 2px solid #4ec9b0;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #4ec9b0;
      color: #0f0f0f;
    }

    /* Introduction section */
    .intro {
      text-align: center;
      padding: 20px;
    }

    .container {
      text-align: center;
      margin: 20px 0;
    }

    .text {
      font-size: 2rem;
      font-weight: bold;
      color: #4ec9b0;
      position: centre;
      width:100%;
      text-align: center;
    }

    .dud {
      color: #ce9178;
    }

    /* Social Media Section */
    .social-media {
      text-align: center;
      margin: 20px 0;
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
      background-color: #3f3f3f;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 64px;
      width: 64px;
    }

    .yek-social__icon {
      color: #d4d4d4;
      font-size: 2em;
    }

    .yek-social__link:hover .yek-social__icon {
      color: #d7ba7d;
    }

    /* Contact Form */
    .contact-form {
      width: 90%;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #2e2e2e;
      border-radius: 10px;
    }

    .contact-form input,
    .contact-form textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #4ec9b0;
      border-radius: 5px;
      background-color: #3f3f3f;
      color: #d4d4d4;
    }

    .contact-form button {
      width: 100%;
      padding: 10px;
      background-color: #57a6e3;
      border: none;
      color: #0f0f0f;
      border-radius: 5px;
      cursor: pointer;
    }

    .contact-form button:hover {
      background-color: #80cbc4;
    }
  </style>
</head>
<body>
  <!-- Introduction Section -->
  <div class="intro">
    <h1>I'm</h1>
    <div class="container">
      <div class="text"></div>
    </div>
    <h3>Hi, I'm Danish Veer Rana, an 11th-grade student from Jammu & Kashmir, India. I'm passionate about programming, editing, and photography. With a love for technology, I'm always experimenting with new ideas to create useful tools, software, and inventions that can make a real impact. I believe in the power of tech to change lives, and I'm excited to keep learning, building, and pushing the boundaries of what's possible!</h3>
    <h5>Site will be updated soon. Thank you.</h5>
    <h6>You can contribute by suggesting me some improvements via mailing.</h6>
  </div>

  <!-- Social Media Section -->
  <div class="social-media">
    <h2>Social Media Accounts</h2>
    <ul class="yek-social__list">
      <li class="yek-social__item">
        <a class="yek-social__link" href="mailto:veerdanish452008@gmail.com">
          <span class="yek-social__button">
            <i class="yek-social__icon fas fa-envelope"></i>
          </span>
        </a>
      </li>
      <li class="yek-social__item">
        <a class="yek-social__link" href="https://github.com/danishveerrana">
          <span class="yek-social__button">
            <i class="yek-social__icon fab fa-github"></i>
          </span>
        </a>
      </li>
      <li class="yek-social__item">
        <a class="yek-social__link" href="https://www.instagram.com/danishveerrana">
          <span class="yek-social__button">
            <i class="yek-social__icon fab fa-instagram"></i>
          </span>
        </a>
      </li>
      <li class="yek-social__item">
        <a class="yek-social__link" href="https://www.linkedin.com/in/danishveerrana">
          <span class="yek-social__button">
            <i class="yek-social__icon fab fa-linkedin"></i>
          </span>
        </a>
      </li>
    </ul>
  </div>

  <!-- Contact Form -->
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
        const promise = new Promise(resolve => this.resolve = resolve);
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
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
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

    const phrases = [
      'Danish Veer Rana',
      'a good Photographer',
      'Tech Enthusiast',
      'a Editor'
    ];

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
