import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'piral-ng/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ThirdComponent } from './third.component';

import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [ThirdComponent],
  imports: [CommonModule, DividerModule, SharedModule, FormsModule, InputTextModule, CardModule, BadgeModule],
})
export class ThirdModule {}
