const copyBtn = document.getElementById("copyBtcBtn");
const address = document.getElementById("btcAddress");

if (copyBtn && address) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(address.textContent.trim());
      const original = copyBtn.textContent;
      copyBtn.textContent = "Copiado ✓";
      copyBtn.disabled = true;
      setTimeout(() => {
        copyBtn.textContent = original;
        copyBtn.disabled = false;
      }, 1800);
    } catch (err) {
      copyBtn.textContent = "No se pudo copiar";
    }
  });
}
