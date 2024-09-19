import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { LinkUrCardModalService } from '../modals/link-ur-card-modal/link-ur-card-modal.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FontAwesomeModule, SharedModule, TranslateModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  public faCircleCheck = faCircleCheck;
  list = [
    {
      title: 'title_1',
      no_card_status: true,
      link_card_status: true,
    },
    {
      title: 'title_2',
      no_card_status: false,
      link_card_status: true,
    },
    {
      title: 'title_3',
      no_card_status: false,
      link_card_status: true,
    },
    {
      title: 'title_4',
      no_card_status: false,
      link_card_status: true,
    },
    {
      title: 'title_5',
      no_card_status: false,
      link_card_status: true,
    },
  ]

  constructor(
    public linkUrCardModalService: LinkUrCardModalService,
  ) {
  }
}
