using MongoExample.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MongoExample.Services
{
    public class MongoDBService
    {
        private readonly IMongoCollection<Popular> _popularCollection;
        private readonly IMongoCollection<Popular> _trendingCollection;
        private readonly IMongoCollection<Popular> _theatreCollection;

        public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            // Initialize MongoDB client
            MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);

            // Separate databases
            IMongoDatabase popularDatabase = client.GetDatabase("PopularDatabase");
            IMongoDatabase trendingDatabase = client.GetDatabase("TrendingDatabase");
            IMongoDatabase theatreDatabase = client.GetDatabase("TheatreDatabase");

            // Collections in their respective databases
            _popularCollection = popularDatabase.GetCollection<Popular>("PopularCollection");
            _trendingCollection = trendingDatabase.GetCollection<Popular>("TrendingCollection");
            _theatreCollection = theatreDatabase.GetCollection<Popular>("TheatreCollection");
        }

        // Methods to interact with the collections

        public async Task<List<Popular>> GetPopularMoviesAsync()
        {
            return await _popularCollection.Find(Builders<Popular>.Filter.Empty).ToListAsync();
        }

        public async Task<List<Popular>> GetTrendingMoviesAsync()
        {
            return await _trendingCollection.Find(Builders<Popular>.Filter.Empty).ToListAsync();
        }

        public async Task<List<Popular>> GetTheatreMoviesAsync()
        {
            return await _theatreCollection.Find(Builders<Popular>.Filter.Empty).ToListAsync();
        }
    }
}
