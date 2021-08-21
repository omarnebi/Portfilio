import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeroComponent } from './hero/hero.component';
import { PortfilioComponent } from './portfilio/portfilio.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactsComponent
  },
  {
    path:'portfilio',
    component:PortfilioComponent
  },
  {
    path:'resume',
    component:ResumeComponent
  },
  {
    path:'portfilio',
    component:PortfilioComponent
  },
  {
    path:'home',
    component:HeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
