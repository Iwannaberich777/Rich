const list = document.getElementById("ledger");

const fmtSerial = (rank) => `Nº ${String(rank).padStart(2, "0")}`;

const fmtWorth = (b) => {
  const n = Number.isInteger(b) ? b : b.toFixed(1);
  return `$${n},000M`;
};

BILLIONAIRES.forEach((person) => {
  const li = document.createElement("li");
  li.className = "note";
  li.style.setProperty("--i", person.rank);

  li.innerHTML = `
    <div class="note-seal">
      <span class="serial">${fmtSerial(person.rank)}</span>
    </div>
    <div class="note-body">
      <div class="note-heading">
        <h2>${person.name}</h2>
        <span class="issuer" title="País emisor: ${person.country}">${person.flag}</span>
      </div>
      <p class="note-source">País emisor: ${person.country} — Respaldado por: ${person.source}</p>
      <p class="note-memo">“${person.quip}”</p>
    </div>
    <div class="note-denom">
      <span class="denom-value">${fmtWorth(person.worth)}</span>
      <span class="denom-currency">USD</span>
    </div>
  `;

  list.appendChild(li);
});
