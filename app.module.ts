import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import socialSharing library to access cordova
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

//setup for server communication
import { HttpClientModule } from '@angular/common/http';

import { InputDialogService } from 'C:/Users/Gamer/groceries/src/app/input-dialog.service';
import { GroceriesService } from 'C:/Users/Gamer/groceries/src/app/groceries.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  //added import for server communication
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  //added social sharing to providers to access import
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, InputDialogService, GroceriesService, SocialSharing],
  bootstrap: [AppComponent],
})
export class AppModule {}
