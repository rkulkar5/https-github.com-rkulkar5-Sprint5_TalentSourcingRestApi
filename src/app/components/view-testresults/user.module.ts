import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTestresultsComponent } from './view-testresults.component';
import { SearchComponent } from '../search/search.component';
import { FilterPipe } from '../../filter.pipe';
import { UserRoutes } from './user-routing.module';
import { ApiService } from './../../service/api.service';
import { ViewTestresultsListComponent } from './view-testresults-list/view-testresults-list.component';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule, UserRoutes ],
  declarations: [ ViewTestresultsComponent, SearchComponent,  FilterPipe, ViewTestresultsListComponent ],
  providers: [ ApiService ]
})
export class UserModule { }
