import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliderComponent} from './components/slider/slider.component';
import {ProjectsPageComponent} from './components/project-page/projects-page.component';
import {ProjectsRoutingModule} from './projects.routing.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    SliderComponent,
    ProjectsPageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
  ]
})
export class ProjectsModule { }
