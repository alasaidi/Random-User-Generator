import { paginationEvent } from "./pagination-page.js";

export const pagination = (pages, footer, root) => {
  let currentPage = 1;
  const numberOfPages = Math.ceil(pages / 8);
  const container = document.createElement("div");
  container.className = "pagination";
  for (let i = 0; i < numberOfPages; i++) {
    const link = document.createElement("a");
    link.id = "page-number";
    link.href = "#";
    link.textContent = i;

    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      currentPage = i;
      paginationEvent(currentPage, root);
    });
    container.appendChild(link);
    container.appendChild(document.createTextNode(" - "));
  }
  footer.appendChild(container);
  //   container.addEventListener("click", );
};
