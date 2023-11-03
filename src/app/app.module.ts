import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/routes';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthModule } from '@auth0/auth0-angular';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
  ],
  imports: [
    HeaderModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'ng-todo.uk.auth0.com',
      clientId: 'ZfshzVAgUYKkT1qCB0Tg2QqGdU8HzZc2',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
