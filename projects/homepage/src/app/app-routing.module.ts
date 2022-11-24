import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomepageComponent
  },
  {
    path: "**",
    component: EmptyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
