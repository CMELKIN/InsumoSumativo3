
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsList = [
    {
      title: 'Noticia 1',
      description: 'La Policía detiene a múltiples personas acusadas de terrorismo',
      image: 'https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240111112523-fito-ecuador-full-169.jpg?resize=1100,620',
    },
    {
      title: 'Noticia 2',
      description: 'Miembros de las Fuerzas Armadas inspeccionan a un hombre durante una operación para proteger la seguridad civil en Quito, el 10 de enero de 2024. Crédito: STRINGER/AFP vía Getty Images',
      image: 'https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1915743016.jpg',
    },
    {
      title: 'Noticia 3',
      description: 'Reclusos en el techo de la prisión Turi, en Cuenca, Ecuador, el 9 de enero de 2024.  (Crédito: FERNANDO MACHADO/AFP via Getty Images)',
      image: 'https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1913159296.jpg',
    },
    {
      title: 'Noticia 4',
      description: 'Soldados patrullan las calles de Cuenca, Ecuador, el 11 ded enero de 2024, tras la ola de violencia. (Crédito: STRINGER/AFP via Getty Images)',
      image: 'https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1918189011.jpg',
    },
  ];
}

