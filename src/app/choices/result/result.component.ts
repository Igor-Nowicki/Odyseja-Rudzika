import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, PopoverController } from '@ionic/angular';
import { Health } from 'src/core/enums';
import { HealthLabel } from 'src/core/labels';
import { ResultLabel } from 'src/core/result-label';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  result: ResultLabel;
  constructor(private navParams: NavParams, private router: Router, private popover:PopoverController) { }

  ngOnInit() {
    this.result = new ResultLabel(this.navParams.data.result);
  }
  getHealthLabel(health: Health) {
    return HealthLabel.get(health);
  }

  close(){
    this.popover.dismiss();
  }
}
