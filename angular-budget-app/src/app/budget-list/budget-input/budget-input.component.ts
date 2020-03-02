import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-input',
  templateUrl: './budget-input.component.html',
  styleUrls: ['./budget-input.component.scss']
})
export class BudgetInputComponent implements OnInit {

  @Input() isIncome: boolean = true;



  constructor() { }

  ngOnInit(): void {
  }

}
