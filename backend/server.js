const express = require('express')

const APP = express()
const PORT = 3003



APP.listen(PORT, () => {
    console.log('Server is up and running on port', PORT)
})