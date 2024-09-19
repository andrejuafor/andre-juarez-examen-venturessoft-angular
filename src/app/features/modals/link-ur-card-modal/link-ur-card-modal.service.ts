import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkUrCardModalService {
  private setShowLinkCardModal = new BehaviorSubject<boolean>(false);
  currentShowLinkCardModal = this.setShowLinkCardModal.asObservable();

  constructor() { }

  public showLinkCardModal(status: boolean) {
    this.setShowLinkCardModal.next(status);
  }
}
