import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    RouteReuseStrategy
} from '@angular/router';

import {
    IonicModule,
    IonicRouteStrategy
} from '@ionic/angular';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';

import {
    AppRoutingModule
} from './app-routing.module';
import {
    AppComponent
} from './app.component';


import {
    VgCoreModule
} from '../../node_modules/videogular2/compiled/core';
import {
    VgControlsModule
} from '../../node_modules/videogular2/compiled/controls';
import {
    VgOverlayPlayModule
} from '../../node_modules/videogular2/compiled/overlay-play';
import {
    VgBufferingModule
} from '../../node_modules/videogular2/compiled/buffering';
import {
    ScreenOrientation
} from '@ionic-native/screen-orientation/ngx';
@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ScreenOrientation,
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}