import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ScanPageComponent, DetailsDialogComponent } from './scan-page/scan-page.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {TextFieldModule} from '@angular/cdk/text-field';




import {MatDividerModule} from '@angular/material/divider';
import { CourrierComponent } from './scan-page/courrier/courrier.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'scan', component: ScanPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ScanPageComponent,
    DetailsDialogComponent,
    CourrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    TextFieldModule,
    MatExpansionModule,
    MatDividerModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  entryComponents: [
    DetailsDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
