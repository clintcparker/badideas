
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
    "eHarmony"
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
    "solar powered flashlights",
    "flightless birds",
    "stamps",
    "aging rock'n'rollers"
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
