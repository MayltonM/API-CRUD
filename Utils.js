const apiUrl = 'https://crudcrud.com/api/7667f48a89a847c6bb3751f4b33a800e/unicorns';

export const get = (_id_) => document.getElementById(_id_);

export async function cadastrarCliente(cliente) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente)
    });
    return response.ok;
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    return false;
  }
}

export async function listarClientes() {
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.error('Erro ao carregar clientes:', error);
    return [];
  }
}

export async function excluirCliente(id) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    });
  } catch (error) {
    console.error('Erro ao excluir cliente:', error);
  }
}

/**
 * Calcula o total de letras nos nomes dos clientes 
 * clientes - Lista de clientes
 * Soma total de caracteres nos nomes
 */

export function calcularTotalLetrasNomes(clientes) {
  return clientes.reduce((total, cliente) => total + cliente.nome.length, 0);
}