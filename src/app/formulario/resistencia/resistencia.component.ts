import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent implements OnInit {
  colors: string[] = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'];
  colorCodes: { [key: string]: string } = {
    'Negro': 'black','Café': '#8B4513',
    'Rojo': 'red','Naranja': 'orange',
    'Amarillo': 'yellow','Verde': 'green',
    'Azul': 'blue','Violeta': 'violet',
    'Gris': 'gray','Blanco': 'white'
  };

  formulario!: FormGroup;
  valor: number = 0;
  valorMaximo: number = 0;
  valorMinimo: number = 0;
  resultado: boolean = false;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      color1: new FormControl('', Validators.required),
      color2: new FormControl('', Validators.required),
      color3: new FormControl('', Validators.required),
      tolerancia: new FormControl('', Validators.required)
    });
  }

  calcular(): void {
    const color1 = this.formulario.get('color1')?.value;
    const color2 = this.formulario.get('color2')?.value;
    const color3 = this.formulario.get('color3')?.value;
    const tolerancia = this.formulario.get('tolerancia')?.value;

    const valorColor1 = this.colors.indexOf(color1);
    const valorColor2 = this.colors.indexOf(color2);
    const multiplicador = Math.pow(10, this.colors.indexOf(color3));

    this.valor = (valorColor1 * 10 + valorColor2) * multiplicador;
    const toleranceFactor = tolerancia === 'oro' ? 0.05 : 0.10;
    this.valorMaximo = this.valor * (1 + toleranceFactor);
    this.valorMinimo = this.valor * (1 - toleranceFactor);
    this.resultado = true;
  }

  getColorCode(color: string): string {
    return this.colorCodes[color] || 'transparent';
  }

  getToleranceColor(): string {
    if (this.formulario.get('tolerancia')?.value === 'oro') {
      return 'gold';
    } else if (this.formulario.get('tolerancia')?.value === 'plata') {
      return 'silver';
    }
    return 'transparent';
  }
}
