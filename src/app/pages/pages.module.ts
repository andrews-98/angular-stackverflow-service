import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SearchHomeComponent } from './search-home/search-home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailComponent } from './detail/detail.component';
import { ComponentsModule } from "../components/components.module";
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
    declarations: [
        SearchHomeComponent,
        SearchResultComponent,
        DetailComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ComponentsModule,
        LayoutsModule
    ]
})
export class PagesModule { }
