import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFacade } from '../../data/auth.facade';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-login-page',
  imports: [CommonModule],
  template:  `
    <p>Login simulado</p>
    <button (click)="login()">Entrar</button>
  `,
})
export class LoginPage {
  private auth = inject(AuthFacade)
  private router= inject(Router)

  login(){
    this.auth.login({
      username: 'admin',
      password: 'admin',
    });

    this.router.navigate(['/dashboard']);
  }
}


