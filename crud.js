const apiUrl = 'https://crudcrud.com/api/b892a009855e4aef81d9eb4dfd65e4ad/unicorns'; //ENDPOINT CRUD

const form = document.getElementById('clienteForm');
const listaClientes = document.getElementById('listaClientes');

// Cadastrar cliente
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  const cliente = { nome, email };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente)
    });

    if (response.ok) {
      form.reset();
    }
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
  }
});

// Listar clientes
async function carregarClientes() {
  listaClientes.innerHTML = '';

  try {
    const response = await fetch(apiUrl);
    const clientes = await response.json();

    clientes.forEach(cliente => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${cliente.nome} - ${cliente.email}</span>
        <button onclick="excluirCliente('${cliente._id}')">Excluir</button>
      `;
      listaClientes.appendChild(li);
    });

  } catch (error) {
    console.error('Erro ao carregar clientes:', error);
  }
}

// Excluir cliente
async function excluirCliente(id) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    });
    carregarClientes();
  } catch (error) {
    console.error('Erro ao excluir cliente:', error);
  }
}