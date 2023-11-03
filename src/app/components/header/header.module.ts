import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
