document.addEventListener("DOMContentLoaded", function () {

    const nav = document.createElement("nav");

    nav.innerHTML = `
        <div class="nav-container">

            <a href="index.html" class="nav-name">
                Alyssa Johnson
            </a>

            <div class="nav-links">

                <a href="index.html">
                    About Me
                </a>

                <a href="research.html">
                    Research
                </a>

                <a href="teaching.html">
                    Teaching
                </a>

                <a href="personal.html">
                    Personal
                </a>

            </div>

        </div>
    `;

    document.body.prepend(nav);

});
