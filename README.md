<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:100&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"> <!-- Font Awesome -->
  <title>Danish Veer Rana</title>
  <style>
    /* General body and text setup */
    html, body {
      font-family: 'Courier New', monospace;
      background-color: #1e1e1e; /* Dark gray background */
      color: #d4d4d4; /* Light gray text */
      margin: 0;
      padding: 0;
      height: 120%;
      overflow-x: hidden;
    }

    /* Intro Section */
    .intro {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
    }

    h1 {
      color: #569cd6; /* Blue for headings */
      font-weight: bold;
      margin: 0;
    }

    h3 {
      color: #9cdcfe; /* Light blue for subheadings */
      font-weight: 300;
      font-size: 20px; /* Increased font size */
      line-height: 1.5; /* Added line height */
      margin: 10px 0;
      text-align: left;
    }

    h5 {
      color: #4ec9b0; /* Teal for additional text */
      text-align: center;
      margin: 0;
    }

    h6 {
      color: #4ec9b0; /* Teal for additional text */
      text-align: center;
      margin: 0;
    }

    /* Container for Scrambled Text */
    .container {
      height: 20%;
      width: 90%;
      display: flex;
      justify-content: start;
      align-items: start;
    }

    .text {
      font-weight: bold;
      font-size: 80px;
      color: #4ec9b0; /* Teal for scrambled text */
    }

    /* Syntax Highlighting for text elements in the dark theme */
    .dud {
      color: #ce9178; /* Orange for dud (scrambled) characters */
    }

    /* Links and hover effects */
    a {
      color: #9cdcfe; /* Light blue for links */
      text-decoration: none;
    }

    a:hover {
      color: #d7ba7d; /* Muted yellow on hover */
      text-decoration: underline;
    }

    /* Buttons */
    button {
      background-color: #3f3f3f; /* Dark gray for buttons */
      color: #d4d4d4; /* Light gray text */
      border: 2px solid #4ec9b0; /* Teal border */
      padding: 10px 20px;
      border-radius: 5px;
      font-family: 'Courier New', monospace;
      cursor: pointer;
    }

    button:hover {
      background-color: #4ec9b0; /* Teal on hover */
      color: #1e1e1e; /* Dark background for text */
      border-color: #d7ba7d; /* Muted yellow border on hover */
      transform: scale(1.05); /* Slightly enlarge the button on hover */
    }

    /* Social Media Section */
    .social-media {
      width: 100%;
      text-align: center;
      margin-top: 50px;
      padding: 20px 0;
    }

    /* Title for social media */
    .social-media h2 {
      color: #9cdcfe; /* Light blue for the subheading */
      font-size: 20px;
      margin-bottom: 20px;
    }

    /* Align the social media buttons */
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
      background-color: #3f3f3f; /* Dark gray button background */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      border-radius: 50%;
    }

    .yek-social__icon {
      color: #d4d4d4; /* Light gray icons */
      font-size: 2em;
    }

    .yek-social__link:hover .yek-social__button {
      transform: translateY(-4px);
      transition: 0.3s ease;
    }

    .yek-social__link:hover .yek-social__icon {
      color: #d7ba7d; /* Muted yellow on hover */
    }

    /* Contact Form Styling */
    .contact-form {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #2e2e2e;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .contact-form h2 {
      color: #9cdcfe; /* Light blue for the subheading */
      margin-bottom: 20px;
    }

    .contact-form label {
      display: block;
      color: #d4d4d4; /* Light gray for labels */
      margin-bottom: 5px;
    }

    .contact-form input,
    .contact-form textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #90a4ae;
      border-radius: 5px;
      background-color: #3f3f3f;
      color: #d4d4d4; /* Light gray text */
    }

    .contact-form button {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #57a6e3; /* Blue for button */
      color: #1e1e1e; /* Dark text */
      cursor: pointer;
    }

    .contact-form button:hover {
      background-color: #80cbc4; /* Teal on hover */
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .intro {
        height: 30%;
      }
      .text {
        font-size: 40px;
      }

      .yek-social__list {
        flex-direction: column;
        align-items: center;
      }

      .yek-social__item {
        margin-bottom: 10px;
      }
    }
  </style>
</head>
<body>

  <!-- Intro Section -->
  <div class="im">
    <h1>I'm</h1>
  </div>

  <!-- Scrambled Text Section -->
  <div class="container">
    <div class="text"></div>
  </div>

  <!-- Introduction Text Section -->
  <div class="intro">
    <h1>Introduction</h1>
    <h3>Hi, I'm Danish Veer Rana, an 11th-grade student from Jammu & Kashmir, India. I'm passionate about programming, editing, and photography. With a love for technology, I'm always experimenting with new ideas to create useful tools, software, and inventions that can make a real impact. I believe in the power of tech to change lives, and I'm excited to keep learning, building, and pushing the boundaries of what's possible!</h3>
    <h5>Site will be updated soon. Thank you</h5>
    <h6>You can contribute by suggesting me some improvements via mailing.</h6>
  </div>

  <!-- Social Media Section -->
  <div class="social-media">
    <h2>Social media Accounts</h2>
    <div class="yek-social">
      <ul class="yek-social__list">
        <li class="yek-social__item">
          <a class="yek-social__link" href="mailto:veerdanish452008@gmail.com">
            <span class="yek-social__button yek-social__button--gmail">
              <i class="yek-social__icon yek-social__icon--gmail fa fa-envelope"></i>
            </span>
          </a>
        </li>
        <li class="yek-social__item">
          <a class="yek-social__link" href="https://github.com/danishveerrana">
            <span class="yek-social__button yek-social__button--github">
              <i class="yek-social__icon yek-social__icon--codepen fab fa-github-alt"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <!-- Contact Form Section -->
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

  <!-- Fallback for JavaScript -->
  <noscript>
    <p>Please enable JavaScript to view this content properly.</p>
  </noscript>

  <!-- JavaScript for Scrambled Text -->
  <script>
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}--=+*^?#_____';
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
            if (!char || Math.random() < 0.2) {
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
      'a editor'
    ];

    const el = document.querySelector('.text');
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2000); // Increased delay to 2000ms for better readability
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  </script>
</body>
