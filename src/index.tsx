// angular stuff
import 'core-js/proposals/reflect-metadata';
import '@angular/compiler';

// other
import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'sample-piral';
import { defineNgModule, fromNg } from 'piral-ng/convert';
import { AppModule } from './app/app.module';

import './styles.css';
import { AppComponent } from './app/app.component';
import { Tile } from './Tile';
import { translations } from './translations';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  defineNgModule(AppModule, {
    // remove the following if you actually want to enable zone.js
    ngZone: 'noop',
  });

  app.registerPage('/page', Page);

  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/page">Page</Link>);
  app.registerMenu(() => <Link to="/foo">Angular-Pages</Link>);

  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });

  // Add translations
  app.setTranslations(translations);

  app.registerPage('/foo/:path*', fromNg(AppComponent));

  app.registerTile(fromNg(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
