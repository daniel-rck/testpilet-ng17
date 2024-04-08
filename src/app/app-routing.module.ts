import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstPageComponent } from './pages/first/first.component';
import { SecondPageComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';

const routes: Routes = [
  { path: 'foo', redirectTo: '/foo/one', pathMatch: 'full' },
  { path: 'foo/one', component: FirstPageComponent },
  { path: 'foo/two', component: SecondPageComponent },
  { path: 'foo/three', component: ThirdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
