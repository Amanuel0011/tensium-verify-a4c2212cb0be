const statusEl = document.getElementById('status');
const verifyBtn = document.getElementById('verifyBtn');

verifyBtn.addEventListener('click', () => {
  const result = {
    repo: 'Amanuel0011/tensium-verify-8f655edb0fbb',
    status: 'verified',
    message: 'Repository updated and ready for review.'
  };

  statusEl.textContent = `${result.status.toUpperCase()} — ${result.message}`;
  statusEl.style.color = '#86efac';
});
