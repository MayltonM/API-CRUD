import { Cliente } from './Classes.js';
import { cadastrarCliente, listarClientes, excluirCliente, get } from './Utils.js';

const form = get('clienteForm');
const listaClientes = get('listaClientes');

// Submeter o formulário
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = get('nome').value;
  const email = get('email').value;

  const novoCliente = new Cliente(nome, email);

  const sucesso = await cadastrarCliente(novoCliente);

  if (sucesso) {
    form.reset();
    carregarClientes();
  }
});

// Carregar e exibir os clientes
async function carregarClientes() {
  listaClientes.innerHTML = '';
  const clientes = await listarClientes();

  clientes.forEach(cliente => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${cliente.nome} - ${cliente.email}</span>
      <button data-id="${cliente._id}">Excluir</button>
    `;

    const botaoExcluir = li.querySelector('button');
    botaoExcluir.addEventListener('click', async () => {
      await excluirCliente(cliente._id);
      carregarClientes();
    });

    listaClientes.appendChild(li);
  });
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', carregarClientes);
