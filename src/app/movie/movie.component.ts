import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StarRatingComponent } from "../feature/star-rating/star-rating.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent, StarRatingComponent,CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInit triggered');
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
  
    if(this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    } else if(this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    } else if(this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
  
    console.log('URL:', this.url);  // Check if URL is being set correctly.
    this.getMovie();
  }
  

  getMovie(): void {
    this.http.get(this.url).subscribe((movies: any) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: number }) => movie.id === Number(this.id)
      );
      
      if (index > -1) {
        this.movie = this.movies[index];
        console.log(this.movie);  // Add this line to check if movie data is correct
      }
    });
  }
  
}
