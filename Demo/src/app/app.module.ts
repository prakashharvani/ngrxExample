import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { CustomerReducer } from './reducers/customer.reducer';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ 'customer': CustomerReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
