import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppNaterialModule } from '../shared/app-naterial/app-naterial.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppNaterialModule,
    SharedModule
  ],
})
export class CoursesModule { }
