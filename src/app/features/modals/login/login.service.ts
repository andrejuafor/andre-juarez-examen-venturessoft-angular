import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private setShowLoginModal = new BehaviorSubject<boolean>(false);
  currentLoginModalStatus = this.setShowLoginModal.asObservable();

  constructor() { }

  public showLoginModal(status: boolean) {
    this.setShowLoginModal.next(status);
  }
}
