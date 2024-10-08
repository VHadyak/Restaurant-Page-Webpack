
import { createFooter } from "./footer";
const footer = createFooter();

// Home DOM module
export default function loadHome() {

  const content = document.querySelector("div#content");
  content.classList.add("home-container");
  content.classList.remove("menu-container");
  content.classList.remove("contact-container");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = "Elevate Your Steak Experience: Modern Flavors, Classic Perfection";

  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = `Experience the art of modern steak at <em>Steak & Ember</em>. 
                           Savor expertly crafted, premium cuts in a chic, contemporary setting. 
                           Reserve your table for a standout dining experience.`;
  
  const homeBtn = document.createElement("button");
  homeBtn.classList.add("book-btn");
  homeBtn.textContent = "Book a Table";

  const contentImg = document.createElement("div");
  contentImg.classList.add("content-img");

  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");
  homeContent.appendChild(headline);
  homeContent.appendChild(description);
  homeContent.appendChild(homeBtn);
  homeContent.appendChild(footer);

  content.appendChild(contentImg);
  content.appendChild(homeContent);

  // Remove duplicate footer in 'Home' tab due to Contact module appending ...
  // ... the footer to document.body
  const duplicateFooter = document.querySelector(".footer:not(.home-content .footer)");     // Select a duplicate footer that is outside .home-content element
  if (duplicateFooter) {
    duplicateFooter.remove();
  };
};
