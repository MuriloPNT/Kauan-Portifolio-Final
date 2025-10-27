// --- Alternar modo claro/escuro ---
const modoBtn = document.getElementById('modoBtn');
modoBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    modoBtn.textContent = '☀️ Modo Claro';
  } else {
    modoBtn.textContent = '🌙 Modo Escuro';
  }
});

// --- Validação simples do formulário ---
const form = document.getElementById('formContato');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o envio real

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Obrigado pelo contato, ${nome}! Recebemos sua mensagem.`);
  form.reset(); // limpa o formulário
});
