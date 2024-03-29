import { NgModule } from '@angular/core';
 import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { NgxCaptchaModule } from 'ngx-captcha';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './Shared/http.service';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { CreateDirectivaOwn} from './customvalidators.directive'; 

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListaClientesComponent,
    NavbarComponent,
    // myValidators
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
