import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  scrollToRod() {
    const formSection = document.getElementById('rodamientos');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  scrollToMarcas(){
    const formSection = document.getElementById('marcas')
    if (formSection) {
     formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }
    
  }
  scrollToNosotros(){
    const formSection = document.getElementById('nosotros')
    if (formSection) {
     formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }
    
  }

  
  scrollToContacto(){
    const formSection = document.getElementById('formulario')
    if (formSection) {
     formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }
    
  }

}
