import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {
  formulario!: FormGroup;
  totalConDescuento!: number;
  readonly precioBoleto = 12;

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      cantidadCompradores: new FormControl('', [Validators.required, Validators.min(1)]),
      cantidadBoletos: new FormControl('', [Validators.required, Validators.min(1), Validators.max(7)]),
      tieneCeneco: new FormControl(false)
    });
  }

  calcularTotal(): void {
    const cantidadCompradores = this.formulario.get('cantidadCompradores')?.value;
    const cantidadBoletos = this.formulario.get('cantidadBoletos')?.value;
    const tieneCeneco = this.formulario.get('tieneCeneco')?.value;

    // Validar que la cantidad de boletos por comprador no exceda el máximo permitido
    const totalBoletos = cantidadCompradores * cantidadBoletos;
    if (totalBoletos > 7 * cantidadCompradores) {
      console.log("Cada comprador puede comprar un máximo de 7 boletos.");
      return;
    }

    // Calcular el total sin descuentos
    let total = totalBoletos * this.precioBoleto;

    // Aplicar descuentos según la cantidad de boletos
    if (totalBoletos > 5) {
      total *= 0.85; // 15% de descuento
    } else if (totalBoletos >= 3 && totalBoletos <= 5) {
      total *= 0.90; // 10% de descuento
    }

    // Aplicar un 10% adicional si tienen la tarjeta CENECO
    if (tieneCeneco) {
      total *= 0.90;
    }

    // Actualizar el valor total con descuento
    this.totalConDescuento = total;
  }
}
