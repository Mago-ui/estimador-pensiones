import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

interface MyFormModel {
  beneficio: FormControl<any>;
  fechaCumple: FormControl<Date>;
  edadToday: FormControl<number>;
  anio: FormControl<number>;
  edadRetiro: FormControl<number>;
  genero: FormControl<string>;
  salud: FormControl<string>;
}


@Component({
  selector: 'app-my-profitability',
  imports: [ReactiveFormsModule,
    NzSelectModule,
    NzGridModule,
    CommonModule,
    NzRadioModule,
    NzButtonModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzTableModule,
    NzDividerModule],
  templateUrl: './my-profitability.component.html',
  styleUrl: './my-profitability.component.scss'
})
export class MyProfitabilityComponent {
  dataForm!: FormGroup<MyFormModel>;
  edadRetiro: number = 43; 
  mostrarAlerta: boolean = false;
 

  ngOnInit(): void {
    this.dataForm = new FormGroup<MyFormModel>({
      beneficio: new FormControl(false, { nonNullable: true }),
      fechaCumple: new FormControl(new Date(), { nonNullable: true }),
      edadToday: new FormControl(0, { nonNullable: true }),
      anio: new FormControl(0, { nonNullable: true }),
      edadRetiro: new FormControl(1, { nonNullable: true }),
      genero: new FormControl('', { nonNullable: true }),
      salud: new FormControl('Sano', { nonNullable: true })
    });

 

  }
}
