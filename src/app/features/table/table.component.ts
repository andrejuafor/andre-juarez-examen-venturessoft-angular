import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FontAwesomeModule, SharedModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  public faCircleCheck = faCircleCheck;
  list = [
    {
      title: 'Instance Coupons',
      no_card_status: true,
      link_card_status: true,
    },
    {
      title: 'Full access to Visa Saving Edge benefits',
      no_card_status: false,
      link_card_status: true,
    },
    {
      title: 'Cashback tracking',
      no_card_status: false,
      link_card_status: true,
    },
    {
      title: 'Merchant location search',
      no_card_status: false,
      link_card_status: true,
    },
    {
      title: 'cashback offers',
      no_card_status: false,
      link_card_status: true,
    },
  ]
}
