import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [HeaderComponent, ErrorComponent, NotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
