const form = document.getElementById("cdForm");
const tableBody = document.querySelector("#cdTable tbody");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // hent input-værdier
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;

  // lav ny række
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${author}</td>
    <td>${title}</td>
    <td>${year}</td>
    <td><button class="delete">🗑️</button></td>
  `;

  // tilføj til tabellen
  tableBody.appendChild(row);

  // nulstil inputs
  form.reset();
});

// lyt på alle delete-knapper
tableBody.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    event.target.closest("tr").remove();
  }
});
