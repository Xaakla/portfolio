import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
