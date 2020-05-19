import { RouterModule, Routes } from '@angular/router';
import { ViewTestresultsComponent } from './view-testresults.component';

const routes: Routes = [
  { path: '', component: ViewTestresultsComponent }
];

export const UserRoutes = RouterModule.forChild(routes);

