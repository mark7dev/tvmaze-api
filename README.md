This API REST was created with NodeJs and Express.

## Steps to run app

1. Clon repository
2. Create a MongoDB with name **tvmazelocal** and collection **shows**
3. In the project directory run: `npm install`
4. In the project directory run: `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:4000/tvmazeapi/shows](http://localhost:4000/tvmazeapi/shows) to view it in the browser.

**Use Postman to test API**

## Services

- **Create** show **http://localhost:4000/tvmazeapi/shows** (POST)
```
{
    "name": "Test",
    "duration": 60,
    "schedule": "morning",
    "poster": "https://c402277.ssl.cf1.rackcdn.com/photos/18134/images/priority_species_small/Medium_WW226365.jpg?1574452099",
    "rating": 2.5,
    "language": "Portuguese"
}
```

- **Read** all shows **http://localhost:4000/tvmazeapi/shows** (GET)
- **Update** show by id **http://localhost:4000/tvmazeapi/shows/id** (PUT)
- **Delete** show by id **http://localhost:4000/tvmazeapi/shows/id** (DELETE)

## Data of payload

- "mame" must be string
- "duration" must be integer (seconds)
- "schedule" must be string
- "poster" must be a valid url
- "rating" must be float
- "language" must be one of these options: English, Spanish or Portuguese


## Dependencies

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js
- [Nodemon](https://nodemon.io/) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
- [Express-validator](https://express-validator.github.io/docs/) - Express-validator is a set of express.js middlewares that wraps validator.js validator and sanitizer functions.
