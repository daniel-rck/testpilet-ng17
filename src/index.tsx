import "core-js/proposals/reflect-metadata";
import "zone.js";

import * as React from 'react';
import { Link } from 'react-router-dom';
import { TileComponent } from './tile.component';
import { translations } from './translations';
import { createConverter } from 'piral-ng/standalone';
import { appConfig } from 'app/app.config';
import { AppComponent } from "app/app.component";
import { PiletApi } from 'sample-piral';

import './styles.css';

export function setup(app: PiletApi) {
  const fromNg = createConverter(appConfig);
  app.registerPage('/foo/:path*', fromNg(AppComponent));

  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/foo">Angular-Pages</Link>);

  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });

  // Add translations
  app.setTranslations(translations);

  app.registerTile(fromNg(TileComponent), {
    initialColumns: 2,
    initialRows: 2,
  });
}
