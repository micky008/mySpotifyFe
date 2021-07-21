import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponantComponent } from './center-componant/center-componant.component';

const routes: Routes = [
  { path: 'folder/:folderId', component: CenterComponantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
