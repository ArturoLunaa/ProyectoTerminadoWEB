import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import  "../../../assets/smtp.js"; //js para enviar emails, solo para entorno de pruebas por seguridad

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  validadorCorreo: any =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  /*Creamos nuestros campos del form*/
  createFormGroup() {
    return new FormGroup({
      nombres: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern(this.validadorCorreo),
      ]),
      comentarios: new FormControl('', [
        Validators.required,
        Validators.maxLength(200),
      ]),
    });
  }

  formularioContacto: FormGroup;
  constructor() {
    this.formularioContacto = this.createFormGroup();
  }

  ngOnInit() {}

  LimpiarForm() {
    this.formularioContacto.reset();
  }
  Guardar() {
    if (this.formularioContacto.valid) {
      // alert("Formulario enviado correctamente.");
      console.log('Formulario válido.');
      console.log(JSON.stringify(this.formularioContacto.value));
      alert(
        'Formulario enviado correctamente al administrador, sus datos:' +
          JSON.stringify(this.formularioContacto.value)
      );

      // enviar email
      Email.send({
       Host: 'smtp.mailtrap.io',
       Username: '36cc54b4bdbfaa',
       Password: 'a83732a1012fb4',
       To: 'administrador@gmail.com',
       From: 'cliente@gmail.com',
       Subject: 'Formulario de contacto',
       Body: this.formularioContacto.value
       });
        this.LimpiarForm();
    } else {
      alert('Formulario inválido, no se pudo enviar.');
      console.log('Formulario invalido');
    }
  }

  get nombres() {
    return this.formularioContacto.get('nombres');
  }
  get apellidos() {
    return this.formularioContacto.get('apellidos');
  }
  get telefono() {
    return this.formularioContacto.get('telefono');
  }
  get correo() {
    return this.formularioContacto.get('correo');
  }
  get comentarios() {
    return this.formularioContacto.get('comentarios');
  }
}

