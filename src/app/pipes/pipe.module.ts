import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { DatePipe } from './date.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';



@NgModule({
    imports: [

    ],
    exports: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DatePipe,
        DashIfEmptyPipe,
    ],
    declarations: [
      PhonePipe,
      AddressPipe,
      StatusPipe,
      DatePipe,
      DashIfEmptyPipe
    ],

})

export class PipeModule {

}