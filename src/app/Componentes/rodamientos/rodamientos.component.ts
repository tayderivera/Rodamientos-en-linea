import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RodamientosService } from '../../servicios/rodamientos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rodamientos',
  imports: [HeaderComponent, CommonModule], 
  templateUrl: './rodamientos.component.html',
  styleUrl: './rodamientos.component.css',
 
  
})
export class RodamientosComponent {
rodamientos: any[] = [];

constructor(private rodsService: RodamientosService){}

ngOnInit(){
  this.rodsService.obtenerProductos().subscribe(data =>{
    this.rodamientos = data;
  })
}

}
