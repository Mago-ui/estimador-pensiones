import { Component,OnInit } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-contact-system',
  imports: [NzSelectModule,NzDatePickerModule,NzButtonModule, NzModalModule],
  templateUrl: './contact-system.component.html',
  styleUrl: './contact-system.component.scss'
})
export class ContactSystemComponent implements OnInit{

  isVisible = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
