import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddNewLabelsPage } from './add-new-labels.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewLabelsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddNewLabelsPage]
})
export class AddNewLabelsPageModule {}
