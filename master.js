console.log('hi');
var imageId;
var commentId;

var imageTree = {
	1 :{
		'id' = "1344555446761061116",
		'display_src' = 'https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/14294832_1599817553655446_315719975027343360_n.jpg?ig_cache_key=MTM0NDU1NTQ0Njc2MTA2MTExNg%3D%3D.2'
	},
	2 :{
		'id' = "1343792924978138245",
		'display_src' = 'https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/14334636_591329411071123_5191916734109450240_n.jpg?ig_cache_key=MTM0Mzc5MjkyNDk3ODEzODI0NQ%3D%3D.2'
	},
	3 :{
		"id":"1343107551621005151",
        "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/14309829_1178118795601071_595204579_n.jpg?ig_cache_key=MTM0MzEwNzU1MTYyMTAwNTE1MQ%3D%3D.2"
    },
	4: {
		"id":"1340711102492849858",
        "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/14359602_1778785042397328_365549883_n.jpg?ig_cache_key=MTM0MDcxMTEwMjQ5Mjg0OTg1OA%3D%3D.2"
	},
	5: {
		"id":"1339545966021253047",
        "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/14309681_1569257790049700_469135041_n.jpg?ig_cache_key=MTMzOTU0NTk2NjAyMTI1MzA0Nw%3D%3D.2"
	}
}

var image_id = document.getElementById('display_image').value;

function display_picture(currentQuestion){
	image_id.src = imageTree[currentQuestion][]
}

function reactionSubmit(reaction){
	updateRecords();
	nextPicture();
}

function updateRecords(){
	
}

var currentQuestion = 0;

function nextPicture(){
	currentQuestion ++;
	
}

{
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
}