import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, ValidateNested} from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto {
    @IsEmail()
    email: string;
    
    @IsNumber()
    @IsNotEmpty()
    id: number;
   
    @IsNotEmpty()
    name: string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateAddressDto)
   
    address: CreateAddressDto;
}