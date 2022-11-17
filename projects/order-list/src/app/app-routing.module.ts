import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: "orders",
    component: ListComponent
  },
  {
    path: "**",
    component: EmptyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
