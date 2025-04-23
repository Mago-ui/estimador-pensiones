import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'app-my-result',
  imports: [NzTabsModule,NzCollapseModule],
  templateUrl: './my-result.component.html',
  styleUrl: './my-result.component.scss'
})
export class MyResultComponent {
  tabs = [1, 2, 3];
}
