import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultLayoutComponent } from './result-layout/result-layout.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ResultLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class LayoutsModule { }
