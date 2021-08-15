import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { AppRouteModule } from './app-routing.modules';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import{StoreModule} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './Auth/store/auth.effects';
import { RecipeEffects } from './recipes/store/recipe.effects';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRouteModule,
    CoreModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects,RecipeEffects])
  ],
  bootstrap: [AppComponent],

 
})
export class AppModule { }
