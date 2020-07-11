import { Component, OnInit, Input } from '@angular/core';
import { BudgetList } from 'src/controller/model/budget-list.model';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  @Input() budgetList: BudgetList[];

  constructor() { }

  ngOnInit(): void {
  }

}
