import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './time-table/time-table.component'

const routes: Routes = [
  { path: 'time-table', component: TimeTableComponent },
  { path: '', redirectTo: '/time-table', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
