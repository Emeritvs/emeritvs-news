import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertProviderService {
  public showAlert : boolean = false;
  public activeAlert : string = 'none';
  public alertMessage : string = 'null';

  constructor() { }

  setAlert(type : string, display : boolean, message : string) {
    if (type !== 'none') {
      this.showAlert = display;
      this.activeAlert = type;
      this.alertMessage = message;
    }
    else {
      this.showAlert = false;
      this.activeAlert = 'none';
      this.alertMessage = 'null';
    }
  }
}
