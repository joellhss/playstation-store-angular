import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerBackgroundComponent } from './components/banner/banner-background/banner-background.component';
import { BannerLabelComponent } from './components/banner/banner-label/banner-label.component';
import { BannerBarComponent } from './components/banner/banner-bar/banner-bar.component';import { BannerComponent } from './components/banner/banner.component';
import { GameBoxComponent } from './components/game-box/game-box.component';
import { GameComponent } from './components/game-box/game/game.component';
;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BannerComponent,
    BannerBackgroundComponent,
    BannerLabelComponent,
    BannerBarComponent,
    GameBoxComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
