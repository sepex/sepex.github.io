import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ThfModule } from '@totvs/thf-ui';
import { CPComponent } from './Segmentos/cp/cp.component';
import { RHComponent } from './Segmentos/rh/rh.component';

@NgModule({
  declarations: [
    AppComponent,
    CPComponent,
    RHComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
