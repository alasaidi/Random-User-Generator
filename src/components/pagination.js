import { paginationEvent } from "./pagination-page.js";

export const pagination = (pages) => {
  const footer = document.getElementById("footer");
  footer.innerHTML = "";
  let currentPage = pages;
  const numberOfPages = Math.ceil(pages / 8);
  const container = document.createElement("div");
  container.className = "pagination";
  let items = [];

  for (let i = 0; i < numberOfPages; i++) {
    items.push(pages);
    pages = pages - 8;
  }

  for (let i = 0; i < numberOfPages; i++) {
    const link = document.createElement("a");
    link.id = "page-number";
    link.href = "#";
    link.textContent = i + 1;

    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      currentPage = i + 1;

      if (items[i] >= 8) {
        paginationEvent(currentPage, 8);
      }
      if (items[i] < 8) {
        paginationEvent(currentPage, items);
      }
      console.log(items);
    });
    container.appendChild(link);
    container.appendChild(document.createTextNode(" - "));
  }
  footer.appendChild(container);
};
