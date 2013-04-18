
/*
 * GET home page.
 */
var dict1 = [
    "linked-In",    
    "bitBucket",
    "myspace"
];
var dict2 = [
    "fish",
    "donuts",
    "six year olds"
];

exports.index = function(req, res){
    var co = dict1[Math.floor(Math.random()*dict1.length)];
    var group = dict2[Math.floor(Math.random()*dict2.length)];
  res.render('index', { title: 'Bad Ideas', co:co, group:group});
};