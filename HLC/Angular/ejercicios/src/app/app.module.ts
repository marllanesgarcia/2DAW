import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Campo1Component } from './campo1/campo1.component';
import { Campo2Component } from './campo2/campo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Campo1Component,
    Campo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
