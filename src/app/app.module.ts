import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BillingComponent } from './component/billing.component/billing.component';
import { BodyBillingComponent } from './component/billing.component/body-billing.component/body-billing.component';
import { HeaderBillingComponent } from './component/billing.component/header-billing.component/header-billing.component';
import { FooterBillingComponent } from './component/billing.component/footer-billing.component/footer-billing.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBillingComponent,
    BodyBillingComponent,
    FooterBillingComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
