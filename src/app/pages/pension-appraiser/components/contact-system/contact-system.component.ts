import { Component,OnInit } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface MyFormModel {
  nombresApellidos: FormControl<string>;
  numCarpeta: FormControl<string>;
  selectSituacion: FormControl<string>;
  selectCondicion: FormControl<string>;
  incorporacionSNP: FormControl<Date>;
  FinRelacionLaboral: FormControl<Date>;
  selectBono: FormControl<string>;
  selectRetiroCIC: FormControl<string>;
  selectActivadaRiesgo: FormControl<string>;
  selectExposicionriesgo: FormControl<string>;
  selectRegimenGenerico: FormControl<string>;
  promRemuneraciones: FormControl<number>;
  selectTasasAporte: FormControl<string>;
  selectDInvalidez: FormControl<string>;
  PorcentajeInvalidez: FormControl<number>;
  Cuspp: FormControl<string>;
  FNacimiento: FormControl<Date>;
  FFallecimiento: FormControl<Date>;
  selectGenero: FormControl<string>;
  FechaCalculo: FormControl<Date>;
  FechaAfiliacionSPP: FormControl<Date>;
  SaldoCIC: FormControl<number>;
  ValorNominal: FormControl<number>;
  selectAportesRMV: FormControl<string>; 
  selectTipoActividad: FormControl<string>; 
  selectNumeroAportes: FormControl<string>; 
  selectTipoInvalidez: FormControl<string>; 
}


@Component({
  selector: 'app-contact-system',
  imports: [ReactiveFormsModule,NzSelectModule,NzDatePickerModule,NzButtonModule, NzModalModule],
  templateUrl: './contact-system.component.html',
  styleUrl: './contact-system.component.scss'
})
export class ContactSystemComponent implements OnInit{

  contactForm!: FormGroup<MyFormModel>;
  isVisible = false;

  ngOnInit(): void {
    this.contactForm = new FormGroup<MyFormModel>({
      nombresApellidos: new FormControl('', { nonNullable: true }),
      numCarpeta: new FormControl('', { nonNullable: true }),
      selectSituacion: new FormControl('', { nonNullable: true }),
      selectCondicion: new FormControl('', { nonNullable: true }),
      incorporacionSNP: new FormControl(new Date(), { nonNullable: true }),
      FinRelacionLaboral: new FormControl(new Date(), { nonNullable: true }),
      selectBono: new FormControl('', { nonNullable: true }),
      selectRetiroCIC: new FormControl('', { nonNullable: true }),
      selectActivadaRiesgo: new FormControl('', { nonNullable: true }),
      selectExposicionriesgo: new FormControl('', { nonNullable: true }),
      selectRegimenGenerico: new FormControl('', { nonNullable: true }),
      promRemuneraciones: new FormControl(0.0, { nonNullable: true }),
      selectTasasAporte: new FormControl('', { nonNullable: true }),
      selectDInvalidez: new FormControl('', { nonNullable: true }),
      PorcentajeInvalidez: new FormControl(0.0, { nonNullable: true }),
      Cuspp: new FormControl('', { nonNullable: true }),
      FNacimiento: new FormControl(new Date(), { nonNullable: true }),
      FFallecimiento: new FormControl(new Date(), { nonNullable: true }),
      selectGenero: new FormControl('', { nonNullable: true }),
      FechaCalculo: new FormControl(new Date(), { nonNullable: true }),
      FechaAfiliacionSPP: new FormControl(new Date(), { nonNullable: true }),
      SaldoCIC: new FormControl(0.0, { nonNullable: true }),
      ValorNominal: new FormControl(0.0, { nonNullable: true }),
      selectAportesRMV: new FormControl('', { nonNullable: true }),
      selectTipoActividad: new FormControl('', { nonNullable: true }),
      selectNumeroAportes: new FormControl('', { nonNullable: true }), 
      selectTipoInvalidez: new FormControl('', { nonNullable: true }), 
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
