import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultLayoutComponent } from '../layouts/result-layout/result-layout.component';
import { DetailComponent } from './detail/detail.component';

import { SearchHomeComponent } from './search-home/search-home.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', component: SearchHomeComponent },
  {
    path: 'results', component: ResultLayoutComponent,
    children: [{ path: '', component: SearchResultComponent, pathMatch: 'full' }]
  },
  {
    path: 'question/:id', component: ResultLayoutComponent,
    children: [{
      path: '', component: DetailComponent, pathMatch: 'full'
    }]
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
