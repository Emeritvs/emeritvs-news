import { Component, Input, OnInit } from '@angular/core';
import { AlertProviderService } from 'src/app/providers/alert-provider.service';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {
  @Input() public message! : string;
  constructor(
    public alert : AlertProviderService
  ) { }

  ngOnInit(): void {
  }

  closeAlert() {
    this.alert.setAlert('none', false, 'null');
  }

}
