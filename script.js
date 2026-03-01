alert("Please note that this portfolio is currently under development. Some features may not be fully functional, and content may be subject to change.");

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

// Make canvas full screen
function resizeCanvas() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    // Recreate gradient after resize
    const grad = ctx.createRadialGradient(
        c.width / 2, 100, 200,
        c.width / 2, c.height / 2, c.height
    );

    grad.addColorStop(0, "#240F48");
    grad.addColorStop(1, "#521B61");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, c.width, c.height);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);