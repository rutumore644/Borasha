:root {
    --bg: #fffafc;
    --bg-soft: #f7f1ff;
    --card: #ffffff;
    --primary: #d84a8d;
    --primary-dark: #8d2d68;
    --secondary: #6d5ce6;
    --accent: #ffe6f1;
    --text: #22192d;
    --muted: #625b6d;
    --line: #f1dce9;
    --shadow: 0 18px 45px rgba(110, 55, 95, 0.12);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(180deg, #fffafc 0%, #f6f3ff 100%);
    color: var(--text);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    max-width: 100%;
    display: block;
}

button,
input,
textarea,
select {
    font: inherit;
}

header {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 7%;
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-icon {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #ffd9eb, #f3e4ff);
    font-size: 26px;
}

.logo h1 {
    font-size: 26px;
    color: var(--primary-dark);
    margin: 0;
}

.logo p {
    font-size: 11px;
    color: var(--muted);
    margin-top: 2px;
}

nav {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
}

nav a {
    font-size: 14px;
    font-weight: 700;
    color: var(--muted);
    transition: 0.2s ease;
}

nav a:hover,
nav a.active {
    color: var(--primary);
}

main {
    overflow: hidden;
}

.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    min-height: 620px;
    padding: 90px 7% 70px;
    background: radial-gradient(circle at top left, #ffeaf4 0%, #f5efff 42%, #ffffff 100%);
}

.hero-content {
    max-width: 630px;
}

.label {
    display: inline-block;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 18px;
    text-transform: uppercase;
}

.hero h2 {
    font-size: clamp(2.7rem, 5vw, 4.6rem);
    line-height: 1.04;
    margin-bottom: 20px;
    letter-spacing: -1px;
}

.hero h2 span {
    display: block;
    color: var(--secondary);
}

.hero-text {
    max-width: 560px;
    font-size: 1.08rem;
    color: var(--muted);
    line-height: 1.9;
}

.button-group {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 30px;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 28px;
    border-radius: 14px;
    font-weight: 700;
    transition: 0.25s ease;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary), #ea6ea4);
    color: white;
    box-shadow: 0 16px 32px rgba(196, 71, 139, 0.26);
}

.btn-primary:hover {
    transform: translateY(-2px);
}

.btn-secondary {
    background: white;
    color: var(--primary-dark);
    border: 1px solid var(--line);
}

.hero-stats {
    display: flex;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    margin-top: 32px;
}

.hero-stats div {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.hero-stats strong {
    color: var(--primary-dark);
    font-size: 1.8rem;
}

.hero-stats span {
    color: var(--muted);
    font-size: 0.8rem;
}

.hero-card {
    width: 320px;
    padding: 30px 24px;
    background: white;
    border-radius: 28px;
    text-align: center;
    box-shadow: var(--shadow);
    border: 1px solid var(--line);
}

.flower {
    font-size: 60px;
    margin-bottom: 10px;
}

.hero-card h3 {
    margin-bottom: 10px;
    color: var(--text);
}

.hero-card p {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--primary-dark);
}

.hero-card span {
    display: block;
    margin: 18px 0;
    color: var(--muted);
}

.hero-card button {
    border: none;
    background: #fceaf3;
    color: var(--primary-dark);
    font-weight: 700;
    padding: 12px 18px;
    border-radius: 10px;
    cursor: pointer;
}

section {
    padding: 80px 7%;
}

.section-heading {
    max-width: 760px;
    margin: 0 auto 42px;
    text-align: center;
}

.section-heading h2 {
    font-size: clamp(2rem, 3vw, 3rem);
    margin-bottom: 12px;
}

.section-heading p:not(.label) {
    color: var(--muted);
}

.language-grid,
.feature-grid,
.steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 22px;
    max-width: 1100px;
    margin: auto;
}

.language-card,
.feature-card,
.step {
    background: white;
    border: 1px solid var(--line);
    border-radius: 24px;
    padding: 26px 22px;
    box-shadow: 0 12px 28px rgba(100, 78, 120, 0.06);
    transition: 0.2s ease;
}

.language-card {
    text-align: center;
    cursor: pointer;
}

.language-card:hover,
.feature-card:hover,
.step:hover {
    transform: translateY(-6px);
}

.language-icon {
    font-size: 42px;
    margin-bottom: 12px;
}

.language-card h3,
.feature-card h3,
.step h3 {
    margin-bottom: 8px;
}

.language-card p,
.feature-card p,
.step p {
    color: var(--muted);
}

.feature-card {
    display: block;
}

.feature-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: #f7ebff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-bottom: 18px;
}

.colored-section {
    background: #f7efff;
}

.step {
    border-left: 5px solid var(--primary);
}

.step span {
    color: var(--primary);
    font-size: 13px;
    font-weight: 700;
}

footer {
    background: #2a2134;
    color: white;
    text-align: center;
    padding: 50px 20px;
}

footer h2 {
    margin-bottom: 10px;
}

footer p {
    color: #d9d1e1;
}

.footer-small {
    margin-top: 12px;
    font-size: 13px;
}

@media (max-width: 900px) {
    .hero {
        flex-direction: column;
        text-align: center;
        padding-top: 60px;
    }

    .hero-content {
        max-width: 100%;
    }

    .button-group,
    .hero-stats {
        justify-content: center;
    }

    nav {
        display: none;
    }
}

@media (max-width: 600px) {
    header {
        padding: 14px 5%;
    }

    .hero {
        padding-left: 5%;
        padding-right: 5%;
    }

    .hero-card {
        width: 100%;
    }

    .btn {
        width: 100%;
    }

    .button-group {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    .logo h1 {
        font-size: 22px;
    }

    .section-heading h2,
    .hero h2 {
        line-height: 1.1;
    }
}

/* Keep compatibility with older page sections */
.language-card .language-icon,
.feature-card .feature-icon {
    user-select: none;
}
