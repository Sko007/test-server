const faker = require("faker");
const lodash = require("lodash");

module.exports = function() {
  return {
    hotels: lodash.times(10, function(n) {
      return {
        hotels: [
          {
            id: n,
            name: faker.name.findName(),
            description: faker.lorem.words(),
            distance_to_venue: faker.helpers.randomize(),
            rating: faker.random.number(),
            price_category: "medium",
            amenities: ["free_parking", "free_wifi"],
            images: [
            faker.image.imageUrl(),
              faker.image.imageUrl(),
              faker.image.imageUrl(),
            ]
          }
        ]
      };
    })
  };
};
