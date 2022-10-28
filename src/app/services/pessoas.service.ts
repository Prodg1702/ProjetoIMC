import { Injectable } from '@angular/core';

import { Pessoa } from '../models/pessoa.model';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(
    private storage : Storage
  ) { }

  inserir(argumento: Pessoa) {
    argumento.id = Guid.create()

    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

  async listarTodos() {
    let arrayPessoa: Pessoa [] = [];

    await this.storage.forEach((value: string) =>
    {const pessoa: Pessoa = JSON.parse(value); arrayPessoa.push(pessoa)})

    return arrayPessoa;
  }
}
