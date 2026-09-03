// navigation.js

document.addEventListener("DOMContentLoaded", function () {

    // Create navigation bar
    const nav = document.createElement("nav");

    nav.innerHTML = `
        <div class="nav-container">
            <a href="index.html" class="nav-name">Alyssa Johnson</a>

            <div class="nav-links">
                <a href="index.html">About Me</a>
                <a href="research.html">Research</a>
                <a href="teaching.html">Teaching</a>
                <a href="personal.html">Personal</a>
            </div>
        </div>
    `;

    // Add navigation to the top of the page
    document.body.prepend(nav);

    // Add navigation styling
    const style = document.createElement("style");

    style.textContent = `
        nav {
            width: 100%;
            background: white;
            border-bottom: 1px solid #e5e5e5;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .nav-container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 18px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .nav-name {
            color: #111;
            text-decoration: none;
            font-size: 20px;
            font-weight: 600;
        }

        .nav-links {
            display: flex;
            gap: 35px;
        }

        .nav-links a {
            color: #444;
            text-decoration: none;
            font-size: 15px;
            transition: color 0.2s ease;
        }

        .nav-links a:hover {
            color: #000;
        }

        @media (max-width: 700px) {
            .nav-container {
                flex-direction: column;
                gap: 15px;
            }

            .nav-links {
                gap: 18px;
                flex-wrap: wrap;
                justify-content: center;
            }
        }
    `;

    document.head.appendChild(style);
});
