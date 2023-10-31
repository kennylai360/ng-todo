import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import packageJson from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  public applicationVersion: string = packageJson.version;

  public submitForm(): void {
    console.log(this.loginForm.value);
  }

}
