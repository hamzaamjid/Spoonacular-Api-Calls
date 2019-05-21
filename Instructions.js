const express = require('express')
const app = express()
const port = 3000

const request = require('request');

const options = {
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/417357/analyzedInstructions?stepBreakdown=true',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7a8a25626dmsh78aeb291ed0645bp172bf6jsn9b0c195d3e1a',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
}
app.get('/api', () => {
    console.log('Working');
    theRequest();

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// called above 
function theRequest() {
    console.log("CALLLLLED")
    request(options, function (err, res, body) {
        let parsedBody = JSON.parse(body)
        console.log(parsedBody);
        var i = 0;
        let InstructionList = [];
        for (i; i < parsedBody[0].steps.length; i++) {
            InstructionList.push({
                number: parsedBody[0].steps[i].number,
                step: parsedBody[0].steps[i].step
            });
        }
        console.log(InstructionList);
    })
}