console.log('hi');

var imageTree = {
	1 :{
		'id' : "1344555446761061116",
		'display_src' : 'https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/14294832_1599817553655446_315719975027343360_n.jpg?ig_cache_key=MTM0NDU1NTQ0Njc2MTA2MTExNg%3D%3D.2',
	},
	2 :{
		'id' : "1343792924978138245",
		'display_src' : 'https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/14334636_591329411071123_5191916734109450240_n.jpg?ig_cache_key=MTM0Mzc5MjkyNDk3ODEzODI0NQ%3D%3D.2'
	},
	3 :{
		"id":"1343107551621005151",
        "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/14309829_1178118795601071_595204579_n.jpg?ig_cache_key=MTM0MzEwNzU1MTYyMTAwNTE1MQ%3D%3D.2",
    },
	4: {
		"id":"1340711102492849858",
        "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/14359602_1778785042397328_365549883_n.jpg?ig_cache_key=MTM0MDcxMTEwMjQ5Mjg0OTg1OA%3D%3D.2",
	},
	5: {
		"id":"1339545966021253047",
        "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/14309681_1569257790049700_469135041_n.jpg?ig_cache_key=MTMzOTU0NTk2NjAyMTI1MzA0Nw%3D%3D.2",
	},
}

var commentTree = {
	1 : {
		'id' : '1',
		'comment_str' : 'You look terrible. You should not be on HONY',
	},
	
	2: {
		'id' : '2',
		'comment_str' : 'That is so brave! I wish I could be more like you.',
	},
	
	3: {
		'id' : '3',
		'comment_str' : 'crying',
	},
	4: {
		'id' : '4',
		'comment_str' : 'Is this guy serious?',
	},
	5: {
		'id' : '5',
		'comment_str' : 'Thanks for sharing.',
	},
}

var currentQuestion = 1;


function run(){
		console.log(imageTree[currentQuestion]['display_src']);
		console.log(document.getElementById("display_comment").innerHTML);
		document.getElementById('display_image').src = imageTree[currentQuestion]['display_src'];
		document.getElementById('display_comment').innerHTML = commentTree[currentQuestion]['comment_str'];		
}



/*console.log(imageTree[currentQuestion]['display_src']);
console.log(document.getElementById("display_comment").innerHTML);
document.getElementById('display_image').src = imageTree[currentQuestion]['display_src'];
document.getElementById('display_comment').innerHTML = commentTree[currentQuestion]['comment_str'];
*/

run();
function reactionSubmit(reaction){
	console.log("Reaction worked");
	updateRecords(reaction);
	nextPicture();
	run();
	currentQuestion++;
}

function updateRecords(reaction){
	
}



function nextPicture(){
	var elements = document.getElementsByClassName('mdl-radio__button');
	for (var i = 0; i < elements.length; i++){
		elements[i].checked = false;
	}
	
}

/*{
	"nextId": 0,
	"posts": []
}

var REACTION_ANGRY = "angry";
var REACTION_HAPPY = "happy";

var postsObj = {};
postsObj = loadJSONFromFile("postsObj.json");
var createPost = function(id, comment, reaction, photo) {
	
};

app.post('/post', function(req, res) {
	var body = req.body;
	createPost(postsObj,nextId, "", "", req.photo)
	savePostsObjToFile()
})

posts: 
{
	"id": "",
	"comment": "",
	"reaction": "",
	"photo": ""
}*/