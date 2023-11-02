import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import packageJson from '../../package.json';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(
    public auth: AuthService
  ) {

  }

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  public applicationVersion: string = packageJson.version;

  public submitForm(): void {
    console.log(this.loginForm.value);
  }

  public redirectToOAuth(): void {
    this.auth.loginWithRedirect();
  }

  public logoutOAuth(): void {
    this.auth.logout({logoutParams: {returnTo: document.location.origin}});
  }

}
