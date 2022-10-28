import { Guid } from "guid-typescript";


export interface Pessoa {
    id: Guid,
    altura: string,
    peso: string,
    imc: string,
    sexo: string,
    shape: string
}