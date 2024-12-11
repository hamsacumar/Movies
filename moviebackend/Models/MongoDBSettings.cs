using MongoDB.Driver;

namespace MongoExample.Models
{
    public class MongoDBSettings
    {
        public string ConnectionURI { get; set; } = "mongodb+srv://study:study@cluster0.kg5ai.mongodb.net/";
        public string DatabaseName { get; set; } = "popular"; // Default to a known value
        public string PopularCollectionName { get; set; } = "popular";
        public string TrendingCollectionName { get; set; } = "trending";
        public string TheatreCollectionName { get; set; } = "theatre";
    }
}