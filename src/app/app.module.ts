import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http'; 
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app.router'; 

import { FilterPipe } from 'src/app/filters/filter.pipe'; 
      
import { AppComponent } from './app.component';
import { DogComponent } from './components/dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
