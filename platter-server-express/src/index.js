const express = require('express');

const uiIndexRouter = require('./routes/ui/index');
const uiAboutRouter = require('./routes/ui/about');



const app = express();

app.use(uiIndexRouter);
app.use(uiAboutRouter);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})
    .on('error', error => console.error(error.message));