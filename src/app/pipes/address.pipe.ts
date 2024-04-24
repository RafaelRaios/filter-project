import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress | undefined ): string {
    const INVALID_ADDRESS = !address || !address.cidade || !address.estado || 
    !address.rua || address.numero === null || address.numero === undefined;

    if(INVALID_ADDRESS) {
      return "Endereço Inválido"
    }

    return `${address.rua}, ${address.numero}, ${address.cidade}, ${address.estado}`
  }

}
