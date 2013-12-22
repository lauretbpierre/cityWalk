
/*
 * GET home page.
 */
 
 var citiesObj = [
    {
        _id: '1',
        name: 'Paris',
        country: 'France',
        rank: 5,
        reviews: [5, 5, 5, 5, 5, 5, 5, 5, 5],
        attractions: ['Eiffel Tour', 'Louvre', 'Montmartre'],
        description: "Paris is the capital and most populous city of France. It is situated on the River Seine, in the north of the country, at the heart of the Île-de-France region. Within its administrative limits (the 20 arrondissements), the city had 2,234,105 inhabitants in 2009 while its metropolitan area is one of the largest population centres in Europe with more than 12 million inhabitants."
    },
    {
        _id: '2',
        name: 'London',
        country: 'UK',
        rank: 4,
        reviews: [3, 5, 3, 5, 4],
        attractions: ['London Eye'],
        description: "London is the capital city of England and of the United Kingdom. It is the most populous region, urban zone and metropolitan area in the United Kingdom. Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium."
    },
    {
        _id: '3',
        name: 'Berlin',
        country: 'Germany',
        rank: 3,
        reviews: [3, 5, 3, 2, 1, 4],
        attractions: [],
        description: "Berlin is the capital city of Germany and one of the 16 states of Germany. With a population of 3.4 million people, Berlin is Germany's largest city and is the second most populous city proper and the seventh most populous urban area in the European Union."
   }
 ];


// Main application view.
exports.index = function(req, res){
  res.render('index');
};


// JSON API to retrieve all the cities.
exports.cityList = function (req, res) {
    var cities = citiesObj;
    
    res.json(cities);
}


// JSON API to retrieve a single city.
exports.city = function (req, res) {
    var cityId = req.params.id;
    var city = {};
    
    for (var i = 0; i < citiesObj.length; i += 1) {
        city = citiesObj[i];
        
        if (city._id === cityId) {
            res.json(city);
        }
    }
    
    if (city === {}) {
        res.json({error: true});
    }
}