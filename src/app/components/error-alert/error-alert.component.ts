import { Component, OnInit, Input } from '@angular/core';
import { AlertProviderService } from 'src/app/providers/alert-provider.service';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss']
})

export class ErrorAlertComponent implements OnInit {
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
