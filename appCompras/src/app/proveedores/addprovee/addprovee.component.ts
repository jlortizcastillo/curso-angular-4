import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  proveedorForm: FormGroup;
  proveedor: any;

  provincias: string[] = ['Alava', 'Albacete', 'Alicante', 'Almería', 'Asturias',
                          'Ávila', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz',
                          'Cantabria', 'Castellón', 'Ciudad Real', 'La Coruña', 'Cuenca',
                          'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva',
                          'Islas Baleares', 'Jaén', 'León', 'Lérida', 'Lugo',
                          'Madrid', 'Málaga', 'Murcia', 'Palencia', 'Las Palmas'];

  constructor(private pf: FormBuilder,
              private proveedorService: ProveedoresService) {}

  ngOnInit() {
    this.proveedorForm = this.pf.group({
      nombre: ['', Validators.required],
      cif: ['', Validators.required],
      direccion: ['', Validators.required],
      cp: ['', Validators.required],
      localidad: ['', Validators.required],
      provincia: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      contacto: ['', Validators.required]
    });
  }

  onSubmit() {
    this.proveedor = this.saveProveedor();

    this.proveedorService.postProveedor(this.proveedor)
                            .subscribe(newpro => {
                              console.log(newpro);
                            });
    this.proveedorForm.reset();
  }

  saveProveedor() {
    const saveProveedor = {
      nombre: this.proveedorForm.get('nombre').value,
      cif: this.proveedorForm.get('cif').value,
      direccion: this.proveedorForm.get('direccion').value,
      cp: this.proveedorForm.get('cp').value,
      localidad: this.proveedorForm.get('localidad').value,
      provincia: this.proveedorForm.get('provincia').value,
      telefono: this.proveedorForm.get('telefono').value,
      email: this.proveedorForm.get('email').value,
      contacto: this.proveedorForm.get('contacto').value
    };

    return saveProveedor;
  }
}
