const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open"); menuToggle?.setAttribute("aria-expanded", "false");
  if (menuToggle) menuToggle.textContent = "☰";
}));
document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());

// Calendar link preview helper. The actual public booking link will be configured once supplied.
document.getElementById("calendar-preview")?.addEventListener("click", () => {
  const field = document.getElementById("calendar-link");
  const status = document.getElementById("calendar-status");
  const value = field.value.trim();
  if (!value || !/^https?:\\/\\//i.test(value)) {
    status.textContent = "Enter your full calendar URL, starting with https://.";
    return;
  }
  window.open(value, "_blank", "noopener,noreferrer");
  status.textContent = "Calendar link opened in a new tab. Share the link with us so it can be embedded directly on this page.";
});

// Contact form opens a pre-filled email draft. Replace the address before launch.
const BUSINESS_EMAIL = "hello@YOUR-DOMAIN.com";
document.getElementById("contact-form")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget, data = new FormData(form);
  const status = form.querySelector(".form-status");
  if (BUSINESS_EMAIL.includes("YOUR-DOMAIN")) {
    status.textContent = "Before launch, replace hello@YOUR-DOMAIN.com in script.js with your business email.";
    return;
  }
  const subject = encodeURIComponent("Website enquiry: " + String(data.get("service") || "General enquiry"));
  const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message") || ""}`);
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});

// Floating email / WhatsApp contact widget.
const widgetTrigger = document.getElementById("widget-trigger");
const widgetPanel = document.getElementById("contact-widget-panel");
const widgetClose = document.getElementById("widget-close");
function setContactWidget(open) {
  if (!widgetTrigger || !widgetPanel) return;
  widgetPanel.hidden = !open;
  widgetTrigger.setAttribute("aria-expanded", String(open));
  const label = widgetTrigger.querySelector("span:nth-child(2)");
  if (label) label.textContent = open ? "Close contact options" : "Chat with us";
}
widgetTrigger?.addEventListener("click", () => setContactWidget(widgetPanel.hidden));
widgetClose?.addEventListener("click", () => setContactWidget(false));
