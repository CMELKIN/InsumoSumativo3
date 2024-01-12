
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NewsCardComponent } from '../news-card/news-card.component'; // Asegúrate de tener la ruta correcta

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, NewsCardComponent], // Asegúrate de incluir NewsCardComponent aquí
})
export class HomePageModule {}
