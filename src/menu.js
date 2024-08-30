
import { createFooter } from "./footer";
const footer = createFooter();

// Menu DOM Module
export default function loadMenu() {

  const content = document.querySelector("div#content");
  content.classList.remove("home-container");
  content.classList.remove("contact-container");

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Menu";
  content.appendChild(menuTitle);
 
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuItems = [
    {
      className: "card-1",
      title: "Filet Mignon",
      description: "Served with béarnaise sauce, accompanied by creamy mashed potatoes and sautéed green beans."
    },
    {
      className: "card-2",
      title: "Ribeye Steak",
      description: "Truffle fries and grilled asparagus, with a pat of herb butter."
    },
    {
      className: "card-3",
      title: "Steak Frites",
      description: "Comes with golden, crispy fries and a classic béarnaise or peppercorn sauce."
    },
    {
      className: "card-4",
      title: "Steak Tartare",
      description: "Served with toasted baguette slices, pickles, and a side of mixed greens/capers."
    },
    {
      className: "card-5",
      title: "Surf and Turf",
      description: "Includes a combination of steak and seafood, with sides of garlic butter, roasted baby potatoes, and seasonal vegetables."
    },
    {
      className: "card-6",
      title: "Tomahawk Steak",
      description: "Roasted root vegetables, crispy onion rings, and a side of chimichurri/béarnaise sauce."
    },
  ];

  // Extract properties from an object
  function createCard({ className, title, description }) {
    const card = document.createElement("div");
    card.classList.add(className);

    const img = document.createElement("div");
    img.classList.add("img");
    
    const foodTitle = document.createElement("div");
    foodTitle.classList.add("food-title");
    foodTitle.textContent = title;

    const descriptionF = document.createElement("div");
    descriptionF.classList.add("desc");
    descriptionF.textContent = description;

    card.appendChild(img);
    card.appendChild(foodTitle);
    card.appendChild(descriptionF);

    return card;
  };

  // For each object item, call the function with the properties of that item and assign it to a card 
  menuItems.forEach(item => {
    const card = createCard(item);
    menuContainer.appendChild(card);
  });

  content.appendChild(menuContainer); 
  content.appendChild(footer);
};