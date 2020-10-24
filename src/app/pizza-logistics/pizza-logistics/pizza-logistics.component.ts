import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { DriverState } from '../../shared/enums/driver-state.enum';
import { PizzaState } from '../../shared/enums/pizza-state.enum';
import { IPizzaDashboardLabel } from './../../data-model/model';
import { DASHBOARD_LABEL } from './../../data-mock/mock';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {validatorCustomerName} from './../../validators/customename.validator';
@Component({
  selector: 'app-pizza-logistics',
  templateUrl: './pizza-logistics.component.html',
  styleUrls: ['./pizza-logistics.component.scss']
})
export class PizzaLogisticsComponent implements OnInit {
  constructor() { }
  label: IPizzaDashboardLabel;
  section1FormGroup: FormGroup;
  public ngOnInit(): void {
    this.label = DASHBOARD_LABEL;
    this.section1FormGroup = this.createSection1FormGroup();
  }

  createSection1FormGroup(): FormGroup {
    return new FormGroup({
      customerName : new FormControl(null, [Validators.required, validatorCustomerName]),
      toppings:  new FormControl(null),
      size: new FormControl(null)
    });
  }

  section1() {
    console.log(this.section1FormGroup);
  }
}
