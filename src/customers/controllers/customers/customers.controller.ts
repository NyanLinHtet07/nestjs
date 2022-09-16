import { Controller, 
            Get, 
            HttpException, 
            HttpStatus, 
            Param, 
            ParseIntPipe, 
            Req, 
            Res, 
            Post, 
            Body, 
            UsePipes, 
            ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {

    constructor(private customerService: CustomersService){}


    @Get()
    getAllCustomer(){
    return this.customerService.AllCustomer();
    //res.send(customers);
    }

    @Get(':id')
    getCustomer( 
        @Param('id', ParseIntPipe) id:number, 
        @Req() req:Request, 
        @Res() res:Response){
        const customer = this.customerService.findCustomerById(id);

        if(customer){
            res.send(customer);
        } else {
            res.status(400).send({msg: 'Customer Not Found'});
        }
    }

    @Get('/search/:id')
    searchCustomerById( @Param('id', ParseIntPipe) id:number){
       
        const customer = this.customerService.findCustomerById(id);
        if(customer) return customer;
        else throw new HttpException('Customer Not Found', HttpStatus.BAD_REQUEST);
       
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer( @Body() createCustomerDto: CreateCustomerDto){
        this.customerService.createCustomer(createCustomerDto);
    }


}
