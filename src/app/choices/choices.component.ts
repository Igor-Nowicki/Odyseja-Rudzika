import { Component, OnInit } from '@angular/core';
import { RobinService } from '../robin.service';
import { RobinLabels } from '../../core/robin-labels';
import { DecisionEnum } from '../../core/enums';
import { DecisionLabels } from '../../core/labels';
import { RobinModel } from '../../core/robin-model';
import { ResultLabel } from '../../core/result-label';
import { DecisionModel } from '../../core/decision-model';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ResultComponent } from './result/result.component';
import { Result } from '../../core/result';
import { Config } from 'src/core/config';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss'],
})
export class ChoicesComponent implements OnInit {
  timeEnd: Date;
  deltaTime: string;
  currentDate: Date;
  robin: RobinLabels;
  decisions = DecisionEnum;
  decisionLabels = DecisionLabels;
  decision: DecisionModel;
  decisionValue: DecisionEnum;
  result: ResultLabel;
  robinModel: RobinModel;
  config: Config;

  constructor(private robinService: RobinService, private router: Router,
    public popoverController: PopoverController
  ) { 
    this.config = new Config();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.decisionValue = null;
    this.decision = null;
    this.result = null;
    this.robinService.getRobin(1).then((robin) => {
      this.robinModel = robin;
      this.robin = new RobinLabels(robin);
    });
  }


  submit() {
    let id = this.robinModel.id;
    if (id === undefined) id = 1;
    this.robinService.makeDecision(id, this.decision)
      .then((result) => {
        this.showPopover(result);
      });
  }

  async showPopover(result: Result) {
    const popover = await this.popoverController.create({
      component: ResultComponent,
      translucent: true,
      animated: true,
      componentProps: { 'result': result }
    });
    await popover.present();
    await popover.onDidDismiss();
    this.router.navigateByUrl('/panel');
  }

  setDecision(_event) {
    this.decision = new DecisionModel();
    this.decision.fatUsed = 2;
    if (this.robin.fatNum < 2) this.decision.fatUsed = this.robin.fatNum;
    this.decision.decision = this.decisionValue;
    this.result = this.robin.getResultLabel(this.decision);
    console.log(this.result)
  }

  async submitRestart() {
    await this.robinService.restart();
    this.router.navigateByUrl('/panel');
  }


}
