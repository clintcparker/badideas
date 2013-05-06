var companyJSON = require("../JSON/companies.json"),
    usergroupJSON = require("../JSON/usergroups.json");
    
var companies = companyJSON.companies;
var usergroups = usergroupJSON.usergroups;



Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
}


var newIdea = function(){
    var co = companies.random();
    var group = usergroups.random();
    
    return {
        badidea: "It's like " + co + " for " + group + ".",
        co: co,
        group:group
    }
}
exports.idea = newIdea;

