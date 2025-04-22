import { Component,OnInit } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormControl, FormGroup,FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzRadioModule } from 'ng-zorro-antd/radio';


interface MyFormModel {
  sueldo: FormControl<number>;
  selectRecibo: FormControl<string>;
  sueldoPromedio: FormControl<number>;
  afpCheckbox: FormControl<boolean>;
  afpCheckbox2: FormControl<boolean>;
  afpCheckbox3: FormControl<boolean>; 
  ahorradoPension:FormControl<number>;
  selectFondo: FormControl<string>;
  bono: FormControl<string>;
  selectBono: FormControl<string>;
  ValorNominal:FormControl<number>;
}


@Component({
  selector: 'app-my-savings',
  imports: [NzSelectModule,NzCollapseModule,NzButtonModule,NzCheckboxModule,ReactiveFormsModule,FormsModule,CommonModule,NzRadioModule ],
  templateUrl: './my-savings.component.html',
  styleUrl: './my-savings.component.scss'
})
export class MySavingsComponent implements OnInit {

  savingsForm!: FormGroup<MyFormModel>;
  checked = false;
  checked2 = false;
  checked3 = false;


  ngOnInit(): void {
    this.savingsForm = new FormGroup<MyFormModel>({
      sueldo: new FormControl(0, { nonNullable: true }),
      selectRecibo: new FormControl('', { nonNullable: true }),
      sueldoPromedio: new FormControl(0, { nonNullable: true }),
      afpCheckbox: new FormControl(false, { nonNullable: true }),
      afpCheckbox2: new FormControl(false, { nonNullable: true }),
      afpCheckbox3: new FormControl(false, { nonNullable: true }),
      ahorradoPension: new FormControl(0, { nonNullable: true }),
      selectFondo: new FormControl('', { nonNullable: true }),
      bono: new FormControl('Si', { nonNullable: true }),
      selectBono: new FormControl('', { nonNullable: true }),
      ValorNominal: new FormControl(0, { nonNullable: true })
    });
  }


 
  
}
