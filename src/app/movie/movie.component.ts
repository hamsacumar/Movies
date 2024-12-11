import { Component } from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from "../feature/star-rating/star-rating.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent, StarRatingComponent, CommonModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  type = '';
  id = '';
  url = '';
  movie: any = {};
  newReview: any = { author: '', rating: 0, text: '' };
  loading = true;  // For indicating data loading state

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    this.setUrlBasedOnType();
    this.getMovie();
  }

  setUrlBasedOnType(): void {
    switch (this.type) {
      case 'trending':
        this.url = `http://localhost:5099/api/movies/theatre`;
        break;
      case 'theatre':
        this.url = `http://localhost:5099/api/movies/theatre`;
        break;
      case 'popular':
        this.url = `http://localhost:5099/api/movies/popular`;
        break;
      default:
        console.error('Invalid movie type:', this.type);
    }
  }

  getMovie(): void {
    this.http.get(this.url).subscribe(
      (movie: any) => {
        this.movie = movie;
        this.loading = false;  // Data fetched successfully
        console.log('Movie details:', this.movie); // To check if the data is being fetched correctly
      },
      (error) => {
        this.loading = false;  // Data fetching failed
        console.error('Error fetching movie:', error);
      }
    );
  }

 
}
