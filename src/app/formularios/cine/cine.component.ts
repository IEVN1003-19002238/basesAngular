import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
  formulario!:FormGroup;
  resultado!:number;
  constructor() { }
  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl('', Validators.required),
      numero2: new FormControl('', Validators.required),
 
    });
  }
multNumeros():void{
  let numero1=this.formulario.get('numero1')?.value;
  let numero2=this.formulario.get('numero2')?.value;
  this.resultado=numero1*numero2;
}

}
