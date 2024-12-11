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
            MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
            var database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);

            // Initialize collections
            _popularCollection = database.GetCollection<Popular>(mongoDBSettings.Value.PopularCollectionName);
            _trendingCollection = database.GetCollection<Popular>(mongoDBSettings.Value.TrendingCollectionName);
            _theatreCollection = database.GetCollection<Popular>(mongoDBSettings.Value.TheatreCollectionName);
        }

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
