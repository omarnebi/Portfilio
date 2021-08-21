import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadearComponent } from './headear/headear.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { SectionComponent } from './section/section.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfilioComponent } from './portfilio/portfilio.component';
import { TemoiniageComponent } from './temoiniage/temoiniage.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadearComponent,
    AboutComponent,
    HeroComponent,
    SectionComponent,
    SkillsComponent,
    ResumeComponent,
    PortfilioComponent,
    TemoiniageComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
