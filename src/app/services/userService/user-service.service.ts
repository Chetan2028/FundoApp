import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService : HttpServiceService) { }

  registerUser(data) {
    console.log("data in user service " , data);
    return this.httpService.post('user/userSignUp',data);
  }

  loginUser(data) {
    return this.httpService.post('user/login', data);
  }

}
