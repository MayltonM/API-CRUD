// Classe que representa um cliente
export class Cliente {
  constructor(nome, email) {
    this.nome = nome.trim();
    this.email = email.trim();
  }
}