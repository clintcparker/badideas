
/*
 * GET home page.
 */
var dict1 = [
    "linked-In",    
    "bitBucket",
    "myspace",
    "snapchat",
    "digg",
    "yahoo",
    "bing",
    "forrst",
    "foursquare",
    "rdio",
    "ancestry.com",
    "legalZoom",
    "udacity"
];
var dict2 = [
    "fish",
    "donuts",
    "six year olds",
    "robots",
    "weddings",
    "office furniture",
    "fake plants",
    "paper towels",
    "hats",
    "short TV hosts",
    "yoga balls",
    "dogs"
];

exports.index = function(req, res){
    var co = dict1[Math.floor(Math.random()*dict1.length)];
    var group = dict2[Math.floor(Math.random()*dict2.length)];
    if (req.is("json") || req.param("json")){
        var badIdea = "It's like " + co + " for " + group + ".";
        res.json({badidea: badIdea});
    }
  res.render('index', { title: 'Bad Ideas', co:co, group:group});
};