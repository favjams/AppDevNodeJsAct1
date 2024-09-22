const jamp3 = {
    index: (req, res) => {
        res.render('home');
    },
    songs: (req, res) => {
        res.render('songs');
    },
    playlist: (req, res) => {
        res.render('playlist');
    },
    albums: (req, res) => {
        res.render('albums');
    },
    artist: (req, res) => {
        res.render('artist');
    }
};

module.exports = jamp3;