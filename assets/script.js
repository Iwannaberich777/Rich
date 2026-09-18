const list = document.getElementById("ledger");

const fmtSerial = (rank) => `No. ${String(rank).padStart(2, "0")}`;

const fmtWorth = (b) => {
  const millions = Math.round(b * 1000);
  return `$${millions.toLocaleString("en-US")}M`;
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
        <span class="issuer" title="Issuing country: ${person.country}">${person.flag}</span>
      </div>
      <p class="note-source">Issuing country: ${person.country} — Backed by: ${person.source}</p>
      <p class="note-memo">“${person.quip}”</p>
    </div>
    <div class="note-denom">
      <span class="denom-value">${fmtWorth(person.worth)}</span>
      <span class="denom-currency">USD</span>
    </div>
  `;

  list.appendChild(li);
});
