import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Add HTTP client support here
    provideRouter(routes),
    NgbModule,
  ],
}).catch(err => console.error(err));
