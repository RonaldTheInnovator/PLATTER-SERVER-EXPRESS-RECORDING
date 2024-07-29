const getIndex = (req, res) => {

    //res.write('Hello,Express!');
    // res.end('Here I come, this is Ronald')


    console.log(req.method)
    res.send('Hello Express! <br/> Here I come, this is Ronald Netya. Loving this new journey')
};

const postIndex = (req, res) => {

    //res.write('Hello,Express!');
    // res.end('Here I come, this is Ronald')


    console.log(req.method);
    res.send('I know I have to add to the DB but I dont know how! But I am still learning this stuff');
};


module.exports = {

    getIndex,
    postIndex
};