
import "./styles.css";

// Import Tab Modules
import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderContact from "./contact.js";

function clearContent() {
  const content = document.querySelector("div#content");
  content.innerHTML = "";
  return content;
};

renderHome();

const buttons = document.querySelectorAll("button");

// Tabbed browsing with Nav
buttons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove border highlight from all the buttons
    buttons.forEach(btn => {
      const span = btn.querySelector("span");
      if (span) span.classList.remove("highlight");
    });
    
    // Keep border highlight on the btn that was currently clicked
    const clickedSpan = button.querySelector("span");
    if (clickedSpan) clickedSpan.classList.add("highlight");

    // Clear content and load the currently clicked one
    if (button.textContent === "Contact") {
      clearContent();
      renderContact();
    } else if (button.textContent === "Menu") {
      clearContent();
      renderMenu();  
    } else {
      clearContent();
      renderHome();
    };
  })
});

