var badIdeas = require("../public/javascripts/badIdeas");


exports.index = function(req, res){
    var badIdea = badIdeas.idea(); 
    if (req.accepted[0].value == "application/json" || req.param("json")){
        res.json(badIdea);
    }
    else {
      res.render('index', { title: 'Bad Ideas', co:badIdea.co, group:badIdea.group});
    }
};
