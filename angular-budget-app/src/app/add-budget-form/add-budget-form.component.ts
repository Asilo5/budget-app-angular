import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-budget-form',
  templateUrl: './add-budget-form.component.html',
  styleUrls: ['./add-budget-form.component.scss']
})
export class AddBudgetFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
