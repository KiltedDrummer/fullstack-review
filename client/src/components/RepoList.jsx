import React from 'react';

// const RepoList = (props) => (

//   <div>
//     <h4> Repo List Component </h4>
//     There are {props.repos.length} repos.
//   </div>
// )


// Refactoring into a functional Component

function RepoList(props) {
	console.log(props)
	const RepoEntries = props.repos.map(entry => {

			return (
			<section>
				
					<span className="username" onClick={ props.linkTo }>{ entry.username }  -  </span>
			

					<span className="reponame">{ entry.repo_name }  -  </span>
				
			
					<span className="repo-description">{ entry.description }</span>
		

			</section>
			)

	});

console.log

	return (
		<div>
	    <h4> Repo List Component </h4>
	    There are {props.repos.length} repos.
	    <div className="results">
	    	{ RepoEntries }
	    </div>

	  </div>
		)
}


export default RepoList;