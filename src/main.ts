import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
<<<<<<< HEAD

=======
import { provideHttpClient } from '@angular/common/http';
//import { importProvidersFrom } from '@angular/core';
//import { IonicModule } from '@ionic/angular';
>>>>>>> 9243be3d9796f2bd8bd79373acb3080d2a3e8813
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
<<<<<<< HEAD
  ],
});
=======
    provideHttpClient(),
  ],
});


>>>>>>> 9243be3d9796f2bd8bd79373acb3080d2a3e8813
