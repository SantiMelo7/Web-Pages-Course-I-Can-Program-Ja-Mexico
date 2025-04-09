function navigate(page) {
  window.location.href = page;
}

const buttons = document.querySelectorAll(".nav-btn, .contact-btn");
buttons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "translateY(-4px) scale(1.05)";
    btn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "translateY(2px) scale(0.98)";
    btn.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.2)";
  });
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "translateY(-4px) scale(1.05)";
    btn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  });
});

const images = document.querySelectorAll("img");
images.forEach(img => {
  img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  img.addEventListener("mouseover", () => {
    img.style.transform = "translateY(-4px) scale(1.05)";
    img.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
    img.style.boxShadow = "none";
  });
});
