const apiUrl = 'https://crudcrud.com/api/b892a009855e4aef81d9eb4dfd65e4ad/unicorns';

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