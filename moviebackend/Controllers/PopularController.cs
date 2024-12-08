using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoExample.Services;
using MongoExample.Models;

namespace MongoExample.Controllers
{
    [ApiController]
    [Route("api/movies")]
    public class MoviesController : ControllerBase
    {
        private readonly MongoDBService _mongoDBService;

        public MoviesController(MongoDBService mongoDBService)
        {
            _mongoDBService = mongoDBService;
        }

        // GET: api/movies/trending
        [HttpGet("trending")]
        public async Task<ActionResult<List<Popular>>> GetTrendingMovies()
        {
            var trendingMovies = await _mongoDBService.GetTrendingMoviesAsync();
            return Ok(trendingMovies);
        }

        // GET: api/movies/theatre
        [HttpGet("theatre")]
        public async Task<ActionResult<List<Popular>>> GetTheatreMovies()
        {
            var theatreMovies = await _mongoDBService.GetTheatreMoviesAsync();
            return Ok(theatreMovies);
        }

        // GET: api/movies/popular
        [HttpGet("popular")]
        public async Task<ActionResult<List<Popular>>> GetPopularMovies()
        {
            var popularMovies = await _mongoDBService.GetPopularMoviesAsync();
            return Ok(popularMovies);
        }
    }
}
