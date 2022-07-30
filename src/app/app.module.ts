import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RedElDirective } from './red-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    FormComponent,
    UsdInrPipe,
    ReactiveformComponent,
    RedElDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
