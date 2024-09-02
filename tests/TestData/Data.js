const mydata = require('@playwright/test')
exports.customTest = mydata.test.extend({
    testdataForContactUs: {
        fstName: "Ganesh",
        lstNAme: "Aher",
        email: "Ganesh.aher@gmail.com",
        msg: "I am learning playwright with js",
        SucessMsg: "Thank You for your Message!"
    }
})
