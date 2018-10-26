import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LetterDisplayComponent } from './letter-display/letter-display.component';
import { LetterDetailComponent } from './letter-detail/letter-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentBodyComponent,
    SidebarComponent,
    LetterDisplayComponent,
    LetterDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
