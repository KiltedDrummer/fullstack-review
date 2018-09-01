const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: {type : Number, unique : true, require : true},
  repo_name: String,
  description: String,
  username: String,
  updated_at: Date
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (array) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log('ARRAY TYPE', typeof array)
  let arr = JSON.parse(array);

  for (let i = 0; i < arr.length; i++) {
    let releventData = {
      id: arr[i].id,
      username: arr[i].owner.login,
      repo_name: arr[i].name,
      updated_at: arr[i].updated_at,
      description: arr[i].description
    };
  
  	let repo = new Repo(releventData);
  	repo.save((err, documents) => {
  		if (err) {
  			// console.error(err);
        Repo.findOneAndUpdate({id : releventData.id}, releventData, (err, document) => {
          if (err) {
            console.error(err);
          } else {
            console.log('document', 'Has been updated!');
          }
        });
  		} else {
  			console.log('document', 'has been saved to mongo!');
  		}
  	})
  }

};



let get = () => {
  console.log('GETTING!');
  return Repo.find({}).limit(25).sort({ updated_at : -1 });
}

module.exports.save = save;
module.exports.get = get;

// Repo.find({}, function(err, repos) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Repos', repos);
//   }
// });