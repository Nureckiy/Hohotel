import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { HeaderComponent } from './components/shared/header.component';
import { NavigationComponent } from './components/core/navigation.component';
import { TileComponent } from './components/dishes/tile/tile.component';
import { AddDishModal } from './components/dishes/add-dish-modal/add-dish-modal.component';
import { BasketComponent } from './components/basket/basket.component';
import { TotalDishItemComponent } from './components/basket/total-dish-item.component/total-dish-item.component';
import { LoaderComponent } from './components/shared/loader.component';

import { DishService } from './services/dish.service';
import { DishEffects } from './effects/dish.effect';

import rootReducer from './reducers/index';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule,
    StoreModule.provideStore(rootReducer),
    EffectsModule.run(DishEffects)
  ],
  declarations: [
    AppComponent,
    DishesComponent,
    HeaderComponent,
    NavigationComponent,
    TileComponent,
    AddDishModal,
    BasketComponent,
    TotalDishItemComponent,
    LoaderComponent
  ],
  providers: [
    DishService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
