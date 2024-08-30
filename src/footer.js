
export function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const link = document.createElement("a");
  link.href = "https://github.com/VHadyak";
  link.setAttribute("target", "_blank");

  const footerName = document.createTextNode("Vlad Hadyak");
  link.appendChild(footerName);

  const footerLink = document.createElement("img");
  footerLink.classList.add("footer-img");

  link.appendChild(footerLink);
  footer.appendChild(link);

  return footer;
};