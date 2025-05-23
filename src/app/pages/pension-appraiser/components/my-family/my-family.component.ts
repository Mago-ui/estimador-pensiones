import { CommonModule } from '@angular/common';
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

interface MyFormModel {
  beneficio: FormControl<any>;
  fechaCumple: FormControl<Date>;
  edadToday: FormControl<number>;
  anio: FormControl<number>;
  edadRetiro: FormControl<number>;
  genero: FormControl<string>;
  salud: FormControl<string>;
}

interface Person {
  key: string;
  name: string;
  relation: string;
  year: string;
  condition: string;
}




@Component({
  selector: 'app-my-family',
  imports: [    ReactiveFormsModule,
    NzSelectModule,
    NzGridModule,
    CommonModule,
    NzRadioModule,
    NzButtonModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzTableModule,
    NzDividerModule],
  templateUrl: './my-family.component.html',
  styleUrl: './my-family.component.scss'
})


export class MyFamilyComponent {
  dataForm!: FormGroup<MyFormModel>;
  edadRetiro: number = 43; 
  mostrarAlerta: boolean = false;
  listOfData: Person[] = [
    {
      key: '1',
      name: 'MARIA, TELLO',
      relation: 'conyugue',
      year: '38 años',
      condition: 'Sano'
    },
    {
      key: '2',
      name: 'MARIA, TELLO',
      relation: 'conyugue',
      year: '38 años',
      condition: 'Sano'
    },
    {
      key: '3',
      name: 'MARIA, TELLO',
      relation: 'conyugue',
      year: '38 años',
      condition: 'Sano'
    }
  ];

  ngOnInit(): void {
    this.dataForm = new FormGroup<MyFormModel>({
      beneficio: new FormControl(false, { nonNullable: true }),
      fechaCumple: new FormControl(new Date(), { nonNullable: true }),
      edadToday: new FormControl(0, { nonNullable: true }),
      anio: new FormControl(0, { nonNullable: true }),
      edadRetiro: new FormControl(1, { nonNullable: true }),
      genero: new FormControl('Masculino', { nonNullable: true }),
      salud: new FormControl('Sano', { nonNullable: true })
    });

 

  }
}
