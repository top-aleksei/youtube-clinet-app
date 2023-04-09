import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import AdminRoutingModule from './admin-routing.module';
import AdminComponent from './admin.component';
import NewCardComponent from './pages/new-card/new-card.component';

@NgModule({
  declarations: [AdminComponent, NewCardComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
class AdminModule {}
export default AdminModule;
