const SUPABASE_URL = "https://bubsyuriwcpxckdvkyvw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_glf8AGc1dfHputcrnrvmDg_V8MqgpBp";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuBtn.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});

// Close mobile menu when a link is clicked
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuBtn.textContent = "☰";
    });
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const project = document.getElementById("message").value.trim();

        if (!name || !email || !project) {
            message.textContent = "Please complete the required fields.";
            return;
        }

        const whatsappNumber = "919483774583";

        const text =
            "Hello PRIYEXA!\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Service: " + service + "\n" +
            "Project: " + project;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(text);

        message.textContent = "Opening WhatsApp...";

        window.location.href = whatsappURL;
    });
}
