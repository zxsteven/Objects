var movies = [

	{
		title: 'Fast and Furious',
		rating: 6,
		hasWatched: true
	},

	{
		title: 'Naked Gun',
		rating: 5,
		hasWatched: true
	},

	{
		title: 'Frozen',
		rating: 2,
		hasWatched: false
	},

	{
		title: 'A Goofy Movie',
		rating: 4,
		hasWatched: true
	},

	{
		title: 'Scarface',
		rating: 5,
		hasWatched: true
	}

	]

for (var i = 0; i < movies.length; i++) {
	if (movies[i].hasWatched === true) {
		console.log('You have watched ' + '"' + movies[i].title + '"' + ' - ' + movies[i].rating + ' stars')
	}
	else console.log('You have not watched ' + '"' + movies[i].title + '"' + ' - ' + movies[i].rating + ' stars')
};