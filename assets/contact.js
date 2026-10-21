(() => {
  // <!-- CONTACT_EMAIL -->
  const email = "";
  const placeholder = document.querySelector("[data-contact-email]");
  if (!email || !placeholder) return;

  const link = document.createElement("a");
  link.href = `mailto:${email}`;
  link.textContent = email;
  placeholder.replaceChildren(link);
})();
