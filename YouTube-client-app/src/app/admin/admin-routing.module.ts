import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import NewCardComponent from './pages/new-card/new-card.component';

const routes: Routes = [
  {
    path: '',
    component: NewCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
class AdminRoutingModule {}

export default AdminRoutingModule;
