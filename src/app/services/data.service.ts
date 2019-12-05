import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuarios = [];
  perdidos = [];
  encontrados = [];

  constructor(private http: HttpClient) { }

  // para registrar cuentas
  crearCuenta(nombre: string, login: string, email: string, password: string){
    const data = {
      nombre,
      login,
      email,
      password
    };
    const url = 'https://patitapp-manucampu.herokuapp.com/api/users';

    return this.http.post(url, data);
  }


  // para listar usuarios
  listaUsuarios(){
    const url = 'https://patitapp-manucampu.herokuapp.com/api/usuario';

    return this.http.get(url);
  }

  // para ingresar con email y seña
  ingresar(email: string, password: string){
    const data = {
      email,
      password
    };
    const url = 'https://patitapp-manucampu.herokuapp.com/api/usuarioIngreso';

    return this.http.post(url, data);
  }

  // borrar usuario
  borrar(id: string){
    const url = 'https://patitapp-manucampu.herokuapp.com/api/usuario/' + id;

    return this.http.delete(url);
  }

// PERDIDOS Data
  listaPerdidos(){
    const url = 'https://patitapp-manucampu.herokuapp.com/api/perdidos';

    return this.http.get(url);
  }

  listaUltimos(){
    const url = 'https://patitapp-manucampu.herokuapp.com/api/ultimos';

    return this.http.get(url);
  }

  listaEncontrados(){
    const url = 'https://patitapp-manucampu.herokuapp.com/api/encontrados';

    return this.http.get(url);
  }

  borrarPerdido(id: string){
    const url = 'https://patitapp-manucampu.herokuapp.com/api/perdido/' + id;

    return this.http.delete(url);
  }

  // agregar perdido
  crearPerdido(nombre: string, tipo: string, raza: string, lugar: string, sexo: string){
    const data = {
      nombre,
      tipo,
      raza,
      lugar,
      sexo,
    };
    const url = 'https://patitapp-manucampu.herokuapp.com/api/perdido';

    return this.http.post(url, data);
  }

  actualizarEstado(nombre: string, tipo: string, raza: string, lugar: string, sexo: string, id: string){
    const data = {
      nombre: {nombre},
      tipo: {tipo},
      raza: {raza},
      lugar: {lugar},
      sexo: {sexo},
      estado: false
    };

    const url = 'https://patitapp-manucampu.herokuapp.com/api/perdido/' + id;

    return this.http.put(url, data);
  }

  actualizarEstado2(nombre: string, tipo: string, raza: string, lugar: string, sexo: string, id: string){
    const data = {
      nombre: {nombre},
      tipo: {tipo},
      raza: {raza},
      lugar: {lugar},
      sexo: {sexo},
      estado: true
    };

    const url = 'https://patitapp-manucampu.herokuapp.com/api/perdido/' + id;

    return this.http.put(url, data);
  }

}
