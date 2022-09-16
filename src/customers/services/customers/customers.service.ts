import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/customer';


@Injectable()
export class CustomersService {

    private customers:Customer[]  = [
        {
          id:1,
          email:"nyan@gmail.com",
          name:"Nyan",
        },

        {
            id:2,
            email:"lin@gmail.com",
            name:"Lin",
          },

          {
            id:3,
            email:"htet@gmail.com",
            name:"Htet",
          },

];

    AllCustomer(){
      return this.customers;
    }

    findCustomerById( id:number){
       return this.customers.find((user) => 
       user.id === id);
    }

    createCustomer( customerDto:CreateCustomerDto) {
      this.customers.push(customerDto);
    }
}


