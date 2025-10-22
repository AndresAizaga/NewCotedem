import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(isValid => {
      if (isValid) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}
