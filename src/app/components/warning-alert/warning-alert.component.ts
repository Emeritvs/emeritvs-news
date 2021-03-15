import { Component, Input, OnInit } from '@angular/core';
import { AlertProviderService } from 'src/app/providers/alert-provider.service';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent implements OnInit {
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
