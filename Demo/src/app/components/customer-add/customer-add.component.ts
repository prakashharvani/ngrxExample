import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { Store } from '@ngrx/store';
import { CustomerAdd } from '../../actions/customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private store: Store<{ customer: Customer[] }>) { }

  Addtodo(customer: String) { 
    const newCustomer = new Customer();
    newCustomer.name = customer;

    this.store.dispatch(new CustomerAdd(newCustomer));

  }


  ngOnInit(): void {
  }

}
