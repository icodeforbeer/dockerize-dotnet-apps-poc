using System;
using Newtonsoft.Json;

namespace king.Model

{
    public class Product
    {
        public Product(){
            UpdatedDate = DateTime.UtcNow;
        }
        [JsonProperty("_id")]
        public int Id { get; set; }
        [JsonProperty("prod_name")]
        public string ProductName { get; set; }
        [JsonProperty("prod_desc")]
        public string ProductDescription { get; set; }
        [JsonProperty("prod_price")]
        public decimal ProductPrice { get; set; }
        [JsonProperty("updated_at")]
        public DateTime UpdatedDate { get; set; }
    }
}