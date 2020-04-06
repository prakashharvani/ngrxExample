import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CustomerRemove } from '../../actions/customer.actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer:any;

  constructor(private store: Store<{ customer: Customer[] }>) {
    store.pipe(select('customer')).subscribe(values => {
      console.log('---------,,,', values);
      // const that = this;
      this.customer = values; //error ahiya aabe ena hisabe may be 
      //   na  aaa add ni 6 ok 
      // ane add to barabar chale
    })
  }

  removeCustomer(index: number) {
    // let a = new TodoRemove(index);
    this.store.dispatch(new CustomerRemove(index))
    // ahiya thi error means aaVE  REDUCER FILE MA

  }


  ngOnInit(): void {
  }

}
