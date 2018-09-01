import React from 'react';

const RepoList = (props) => (

  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>
)


// Refactoring into a class Component

// function RepoList(props) {
	// const RepoEntries = props.repos.map(entry => {
	// 	return (
	// 		<section>
	// 			<div className="user">
	// 				<p className="username" onClick={ linkToUser }>{ entry.username }</p>
	// 			</div>
	// 			<div className="repo">
	// 				<p className="reponame">{ entry.repo_name }</p>
	// 			</div>
	// 			<div className="description">
	// 				<p className="repo-description">{ entry.description }</p>
	// 			</div>

	// 		</section>
	// 	)
	// });


// 	return (
// 		<div>
// 	    <h4> Repo List Component </h4>
// 	    There are {props.repos.length} repos.
// 	    <RepoEntries />
// 	  </div>
// 		)
// }


export default RepoList;