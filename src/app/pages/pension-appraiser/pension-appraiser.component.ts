import { Component } from '@angular/core';
import { MyDataComponent } from './components/my-data/my-data.component';
import { CommonModule } from '@angular/common';
import { MySavingsComponent } from './components/my-savings/my-savings.component';
import { MyFamilyComponent } from './components/my-family/my-family.component';
import { MyProfitabilityComponent } from './components/my-profitability/my-profitability.component';
import { MyResultComponent } from './components/my-result/my-result.component';
import { ContactSystemComponent } from './components/contact-system/contact-system.component';

@Component({
  selector: 'app-pension-appraiser',
  imports:[
    MyDataComponent,
    CommonModule,
    MySavingsComponent,
    MyFamilyComponent,
    MyProfitabilityComponent,
    MyResultComponent,
    ContactSystemComponent
  ],
  templateUrl: './pension-appraiser.component.html',
  styleUrl: './pension-appraiser.component.scss'
})
export class PensionAppraiserComponent {
  value: number = 1;
  constructor() {}



  HandleChangeContent(data: number){
    this.value = data;
  }
}
