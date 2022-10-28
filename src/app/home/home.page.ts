import { Attribute, Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Guid } from 'guid-typescript';
import { Pessoa } from '../models/pessoa.model';
import { PessoasService } from '../services/pessoas.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  altura: string
  peso: string
  sexo: string
  opcao: string
  shape: string
  saida: string
  imagem: any = "assets/verificado.png"


  private pessoa : Pessoa
  public arrayPessoa : any



  constructor(
    private pessoaService : PessoasService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 



  imc() {
    var gen = this.sexo

    var A1 = parseFloat(this.altura)
    var P1 = parseFloat(this.peso)

    var resultado = P1 / (A1 **2)

    this.saida = resultado.toString()

    if (gen == "fem"){
      if (resultado <= 19){
        this.shape = 'Magro pa Garai'
        this.imagem = 'assets/borboleta.png'
      }
      if (resultado > 19 && resultado <=27.3){
        this.shape = 'Normal'
        this.imagem = 'assets/verificado.png'
      }
      if (resultado > 27.3){
        this.shape = 'Planeta'
        this.imagem = 'assets/planeta-terra.png'
      }
    }

    if (gen == "masc"){
      if (resultado <=20.7){
        this.shape = 'Filé de borboleta'
        this.imagem = 'assets/borboleta.png'
      }
      if (resultado > 20.7 && resultado <= 27.8){
        this.shape = 'Normal'
        this.imagem = 'assets/verificado.png'
      }
      if (resultado > 27.8){
        this.shape = 'SOL andando na terra'
        this.imagem = 'assets/sol.png'
      }
    }

    this.pessoa = {
      id: Guid.createEmpty(),
      peso: this.peso,
      altura: this.altura,
      imc: this.saida.toString(),
      sexo: this.opcao,
      shape: this.shape
    
      
    }

    this.pessoaService.inserir(this.pessoa)

  }

  // enviar() {
  //     this.pessoaService.inserir(this.pessoa)
  // }


  // ngOnInit() {}
  //   throw new Error('Method not implemented.');

  //   this.pessoa = {id: Guid.createEmpty(), altura: "", peso: "", imc: "", sexo: ""}

  //   this.pessoaForm = this.formBuilder.group
  //   ({
  //     id : [this.pessoa.id],
  //     altura : [this.pessoa.altura, Validators.required],
  //     peso : [this.pessoa.peso, Validators.required]
  //   })

  //   this.pessoaService.listarTodos() .then(arrayPessoa => {this.arrayPessoa = this.arrayPessoa})
  // }


  
}


