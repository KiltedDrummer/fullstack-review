const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repo_name: String,
  description: String,
  user_name: String,
  updated_at: Date
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (array) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  arr.forEach(repoInfo => {

    let releventData = {
      username: repoInfo.owner.login,
      repo_name: repoInfo.name,
      updated_at: repoInfo.updated_at,
      description: repoInfo.description
    };

  	let repo = new Repo(releventData);
  	repo.save((err, documents) => {
  		if (err) {
  			console.error(err);
  		} else {
  			console.log(document, 'has been saved to mongo!')
  		}
  	});
  });
}

module.exports.save = save;