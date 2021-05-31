const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const usersRouter = require("./routes/api/users");
const config = require('config');
const app = express();
// Body parser middleware
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
// DB Config
const db = config.get('mongoURI');
// Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", usersRouter);

/* //Serve static assets if in production
if (process.env.NODE_ENV = "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
 */

app.post("/dashboard", (req, res) => {
    //pass code
    const code = req.body.code
    // authorization information
    const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:8080',
      clientId: '4fa3f8755d384650b48a71b1ce8277df',
      clientSecret: 'c92e66282fd24aeb8ddc39f6aa20a9ca'
    })
// res token
    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })

    })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));