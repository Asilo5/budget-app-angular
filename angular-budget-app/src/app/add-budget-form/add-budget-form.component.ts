import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetList } from '../../controller/model/budget-list.model';

@Component({
  selector: 'app-add-budget-form',
  templateUrl: './add-budget-form.component.html',
  styleUrls: ['./add-budget-form.component.scss']
})
export class AddBudgetFormComponent implements OnInit {

  @Input() item: BudgetList = new BudgetList('', null);
  @Output() submitForm: EventEmitter<BudgetList> = new EventEmitter<BudgetList>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.submitForm.emit(form.value);
  }

}
