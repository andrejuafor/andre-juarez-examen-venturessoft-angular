import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private setShowRegisterModal = new BehaviorSubject<boolean>(false);
  currentRegisterModalStatus = this.setShowRegisterModal.asObservable();

  constructor() { }

  public showRegisterModal(status: boolean) {
    this.setShowRegisterModal.next(status);
  }
}
