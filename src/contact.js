
import { createFooter } from "./footer.js";
const footer = createFooter();

// Contact DOM Module
export default function loadContact() {

  const content = document.querySelector("div#content");
  content.classList.add("contact-container");
  content.classList.remove("home-container");
  content.classList.remove("menu-container");

  const contactImg = document.createElement("div");
  contactImg.classList.add("contact-bg-img");

  const contactSection = document.createElement("div");
  contactSection.classList.add("contact-sec");

  const contactTitle = document.createElement("div");
  contactTitle.classList.add("contact-title");
  contactTitle.textContent = "Contact Us";

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");


  const info1 = document.createElement("div");
  info1.innerHTML = `Email: &nbsp;steak&ember@gmail.com`;
  const info2 = document.createElement("div");
  info2.innerHTML = `Phone: &nbsp;(123) 456-7890`;
  const info3 = document.createElement("div");
  info3.innerHTML = `Address:<br> 6789 Maple Street<br>
                       Calgary, AB T2P 3G7<br>
                       Canada`
  const infoArr = [info1, info2, info3];
  infoArr.forEach(info => {
    info.classList.add("info");
    infoContainer.appendChild(info);
  });
  contactSection.appendChild(contactTitle);
  contactSection.appendChild(infoContainer);

  const followUs = document.createElement("div");
  followUs.classList.add("follow-us");
  followUs.innerHTML = `<em>Follow Us</em>`;
  contactSection.appendChild(followUs);

  const followContainer = document.createElement("div");
  followContainer.classList.add("follow-container");


  const instLink = document.createElement("div");
  instLink.classList.add("insta");

  const xLink = document.createElement("div");
  xLink.classList.add("x");

  const facebookLink = document.createElement("div");
  facebookLink.classList.add("facebook");

  followContainer.appendChild(instLink);
  followContainer.appendChild(xLink);
  followContainer.appendChild(facebookLink);

  
  contactSection.appendChild(followContainer);
  content.appendChild(contactImg);
  content.appendChild(contactSection);
  document.body.appendChild(footer);
};