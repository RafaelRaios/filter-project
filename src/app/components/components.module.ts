import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { FilterComponent } from './filter/filter.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PipeModule } from "../pipes/pipe.module";

@NgModule({
    declarations: [
        UserDetailsComponent,
        FilterComponent,
        UserListComponent,
        
    ],
    imports: [
        FormsModule,
        CommonModule,
        AngularMaterialModule,
        PipeModule,
    ],
    exports: [
        UserDetailsComponent,
        FilterComponent,
        UserListComponent,
    ],
})
export class ComponentsModule { }