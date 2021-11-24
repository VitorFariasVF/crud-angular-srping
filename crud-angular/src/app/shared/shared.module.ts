import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppNaterialModule } from './app-naterial/app-naterial.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe
  ],
  imports: [
    AppNaterialModule,
    CommonModule

  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
