import { Component, Input } from '@angular/core';
import { Movie } from '../../type/movies';
import { tmdbConfig } from '../../constants/config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie! :Movie;
  tmdbConfig=tmdbConfig;
}
