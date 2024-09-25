import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  boletosForm: FormGroup;
  montoTotal: number | null = null;
  maxEntradasPorPersona = 7;
 
  constructor(private formBuilder: FormBuilder) {
    this.boletosForm = this.formBuilder.group({
      nombreComprador: ['', [Validators.required]],
      numPersonas: [1, [Validators.required, Validators.min(1)]],
      numEntradas: [0, [Validators.required, Validators.min(1)]],
      tarjetaSocioCineco: [false],
    });
  }
 
  obtenerTotal(): void {
    if (this.boletosForm.valid) {
      const { nombreComprador, numPersonas, numEntradas, tarjetaSocioCineco } = this.boletosForm.value;
      const costoEntrada = 12;
      const maxEntradas = numPersonas * this.maxEntradasPorPersona;
      if (numEntradas > maxEntradas) {
        alert(` el número máximo de boletos que puedes comprar es 7.`);
        this.montoTotal = null;
        return;
      }
 
      let total = costoEntrada * numEntradas;
      let descuento = 0;
 
      if (numEntradas > 5) {
        descuento = 0.15;  
      } else if (numEntradas >= 3) {
        descuento = 0.10;  
      }
 
      total -= total * descuento;
 
      if (tarjetaSocioCineco) {
        total -= total * 0.10; 
      }
 
      this.montoTotal = total;
 
    } else {
      this.montoTotal = null; 
    }
  }
}