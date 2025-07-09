
document.getElementById('form-credito').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const valor = document.getElementById('valor').value;

  try {
    const resposta = await fetch('/solicitar-credito', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, cpf, valor })
    });

    const resultado = await resposta.json();
    document.getElementById('mensagem').innerHTML = `
      <div class="alert alert-success">Solicitação enviada com sucesso! Protocolo: ${resultado.protocolo || 'N/D'}</div>
    `;
  } catch (erro) {
    console.error(erro);
    document.getElementById('mensagem').innerHTML = `
      <div class="alert alert-danger">Erro ao enviar solicitação.</div>
    `;
  }
});
