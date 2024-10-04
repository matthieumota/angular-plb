import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @ViewChild('userForm') form!: NgForm; // Va extraire la partie #userForm
  @ViewChild('username') username!: NgModel;

  user = {
    username: '',
    password: '',
  }

  constructor(private http: HttpClient) {}

  register() {
    //console.log(this.username);
    //console.log(this.form.value, this.user);
    if (this.form.invalid) return;

    this.http.post(`${environment.url}/users`, this.user).subscribe((user: any) => {
      alert(`L'utilisateur ${user.id} a été crée.`)
    });
  }
}
