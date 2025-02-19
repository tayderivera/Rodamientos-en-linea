import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RodamientosService {

  constructor(private firestore: AngularFirestore) { }
  obtenerProductos(): Observable<any[]> {
    return this.firestore.collection('Rodamientos').valueChanges();
  }

 
}
