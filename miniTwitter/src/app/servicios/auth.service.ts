import { Injectable } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { LoginResponse } from '../modelos/login-response.interface';
import { SignUpDto } from '../dto/signUp.dto';
import { RegistryResponse } from '../modelos/registry-response.interface';
import { Tweets} from '../modelos/tweet.interface'
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const LOGIN_URL = 'https://www.minitwitter.com:3001/apiv1/auth/login';
const REGISTRY_URL='https://www.minitwitter.com:3001/apiv1/auth/signup';
const TWEETS_URL='https://www.minitwitter.com:3001/apiv1/tweets/all'

var token= localStorage.getItem('token')

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + token
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      LOGIN_URL,
      loginDto,
      httpOptions
    );
  }

  registro(signUpDto:SignUpDto): Observable<RegistryResponse>{
    return this.http.post<RegistryResponse>(
      REGISTRY_URL,
      signUpDto,
      httpOptions
    );

  }

  verTweet():Observable<Tweets[]>{
    return this.http.get<Tweets[]>(TWEETS_URL,httpOptions);
  }
}
