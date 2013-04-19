
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
    "udacity",
    "woot",
    "chat roulette",
    "pinterest",
    "eHarmony",
    "skribd",
    "youtube",
    "craigslist",
    "flickr",
    "yelp",
    "reddit",
    "hipmunk",
    "pinterest",
    "prezi",
    "hacker news"
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
    "dogs",
    "meetings",
    "wooden legs",
    "tuna",
    "people with braces",
    "solar powered flashlights",
    "flightless birds",
    "stamps",
    "aging rock'n'rollers",
    "con artists",
    "clowns",
    "university cafeteria workers",
    "cab drivers riders with eczema",
    "bad programmers",
    "bankers",
    "dirty fireplaces",
    "archelologists who prefer white wine",
    "women's-lit majors",
    "elvis impersonators and their fans",
    "ux designers"
];

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
}

exports.index = function(req, res){
    var co = dict1.random();
    var group = dict2.random();

    if (req.accepted[0].value == "application/json" || req.param("json")){
        var badIdea = "It's like " + co + " for " + group + ".";
        res.json({badidea: badIdea});
    }
    else {
      res.render('index', { title: 'Bad Ideas', co:co, group:group});
    }
};
