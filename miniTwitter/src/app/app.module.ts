import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './servicios/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ListatweetsComponent } from './componentes/listatweets/listatweets.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ListatweetsComponent,
    PageNotFoundComponent
  ],

  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule
  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
