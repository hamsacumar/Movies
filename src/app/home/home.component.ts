import { Component } from '@angular/core';
import {HeaderComponent} from './../header/header.component'
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from "../feature/star-rating/star-rating.component";
import { Router } from '@angular/router';  

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    NgbModule,
    StarRatingComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private http:HttpClient,private router:Router) {}

  trendingMovies:any;
  theatreMovies:any;
  popularMovies:any;

  ngOnInit(): void{
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies(): void {
    this.http.get('http://localhost:5100/api/movies/trending').subscribe((movies: any) => {
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    });
  }
  
  getTheatreMovies(): void {
    this.http.get('http://localhost:5100/api/movies/theatre').subscribe((movies: any) => {
      this.theatreMovies = movies;
      console.log(this.theatreMovies);
    });
  }
  
  getPopularMovies(): void {
    this.http.get('http://localhost:5100/api/movies/popular').subscribe((movies: any) => {
      this.popularMovies = movies;
      console.log(this.popularMovies);
    });
  }
  
  goToMovie(type:string,id:string){
    this.router.navigate(['movie',type,id]);
  }


  
    
}
