const allAbout = (req, res) => {

    console.log(req.method);
    res.send('This app has been created by Ronald Netya')

};

module.exports = {
    allAbout

};