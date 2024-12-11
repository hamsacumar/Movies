using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace MongoExample.Models
{
    public class Popular
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId? _id { get; set; }

        [BsonElement("cover")]
        public string? Cover { get; set; }

        [BsonElement("id")]
        public string? id { get; set; }

        [BsonElement("name")]
        public string? name { get; set; }

        [BsonElement("rating")]
        public string? rating { get; set; }

        [BsonElement("reviews")]

        public object? reviews { get; set; }
    }
}
