const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Gym = require("../models/gym");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
  await Gym.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const gym = new Gym({
      author: "5fdb7d9e77b424018c02679e",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {

          url: "https://res.cloudinary.com/dusszlqnj/image/upload/v1608393540/YelpCamp/fas79b75awqzsfyfrmue.jpg",
          filename: "YelpCamp/fas79b75awqzsfyfrmue"
        },
        {

          url: "https://res.cloudinary.com/dusszlqnj/image/upload/v1608393540/YelpCamp/rg2q7fpkjbtvfe8w8nxo.jpg",
          filename: "YelpCamp/rg2q7fpkjbtvfe8w8nxo"
        },
        {

          url: "https://res.cloudinary.com/dusszlqnj/image/upload/v1608393540/YelpCamp/gopuhzsqrhuxi3r5qq1n.jpg",
          filename: "YelpCamp/gopuhzsqrhuxi3r5qq1n"
        }
      ],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!",
      price,
      geometry:
      {
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude
        ],
        type: "Point"
      }
    })
    await gym.save();
  }
}

seedDB().then(() => {
  mongoose.connection.close();
})