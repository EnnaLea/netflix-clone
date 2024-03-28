import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
bgUrl = BG_IMG_URL;

email!: string;
password!: string;
loginService = inject(LoginService);
router = inject(Router);
toasterService = inject(ToastrService);



ngOnInit(){
  if(this.loginService.IsLoggedIn){
    this.router.navigateByUrl('/browse');
  }
}

onSubmit(){
  if(!this.email ||!this.password){
    this.toasterService.error("Please enter email and password");
    return;
  }
  this.loginService.login(this.email, this.password);
  this.toasterService.success("Login Successful");
  this.router.navigateByUrl('/browse');
}




}
