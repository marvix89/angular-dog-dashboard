import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DogComponent } from './components/dog/dog.component';


const appRoutes: Routes = [
    { path: '', component: DogComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes
      )
    ],
    exports: [
      RouterModule
    ]
  })

  export class AppRoutingModule {}
