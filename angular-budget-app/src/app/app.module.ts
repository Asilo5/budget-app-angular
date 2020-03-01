import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddBudgetFormComponent } from './add-budget-form/add-budget-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetInputComponent } from './budget-list/budget-input/budget-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddBudgetFormComponent,
    BudgetListComponent,
    BudgetInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
