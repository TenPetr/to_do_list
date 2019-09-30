import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'add-new-task', loadChildren: './add-new-task/add-new-task.module#AddNewTaskPageModule' },
  { path: 'done-all', loadChildren: './done-all/done-all.module#DoneAllPageModule' },
  { path: 'add-new-labels', loadChildren: './add-new-labels/add-new-labels.module#AddNewLabelsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
