const list = document.getElementById("ranking");

const medal = (rank) => {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return null;
};

const fmtWorth = (b) => {
  const n = Number.isInteger(b) ? b : b.toFixed(1);
  return `$${n}B`;
};

BILLIONAIRES.forEach((person) => {
  const li = document.createElement("li");
  li.className = "card";
  li.style.setProperty("--i", person.rank);

  const m = medal(person.rank);

  li.innerHTML = `
    <div class="rank">${m ?? `#${person.rank}`}</div>
    <div class="info">
      <h2>${person.name} <span class="flag" title="${person.country}">${person.flag}</span></h2>
      <p class="meta">${person.country} · ${person.source}</p>
      <p class="quip">${person.quip}</p>
    </div>
    <div class="worth">${fmtWorth(person.worth)}</div>
  `;

  list.appendChild(li);
});
