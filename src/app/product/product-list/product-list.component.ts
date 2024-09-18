import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl:'./product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="salumo de variables";  

  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:any[]=[

    {
      "productoId":1,
      "modelo": 'Sentra',
      "Descripcion": "4 Puertas Familiar",
      "year":"febrero 3 2022",
      "precio": 20000,
      "Marca":"NISSA",
      "Color":"Morado",
      "imagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_4b4578b2047947618873ae0665be3a54.webp"
    },
    {
      "productoId":2,
      "modelo": 'r8',
      "Descripcion": "2 Puertas",
      "year":"marzo 3 2023",
      "precio": 30000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "imagenUrl":"https://cdn.motor1.com/images/mgl/W89egj/s3/2023-audi-r8-v10-gt-rwd-exterior.jpg"
      
    },
    {
      "productoId":3,
      "modelo": 'Rio',
      "Descripcion": "4 Puertas Familiar",
      "year":"Agosto 3 2022",
      "precio": 60000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenUrl":"https://www.autoasesor.com/kia/imagenes/riohb2023.png"
      
    }
  ]
}
