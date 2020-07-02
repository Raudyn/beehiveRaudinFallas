window.addEventListener('load', Proyecto, false);

function Proyecto() {


    var bees = [];
    var posts = [];
    var albunes = [];
    var toDos = [];
    var beesUrl = 'https://beehive-270a2.firebaseio.com/data/users.json';
    var postsUrl = 'https://beehive-270a2.firebaseio.com/data/posts.json';
    var commentsUrl = 'https://beehive-270a2.firebaseio.com/data/comments.json';
    var albumsUrl = 'https://beehive-270a2.firebaseio.com/data/albums.json';
    var photosUrl = 'https://beehive-270a2.firebaseio.com/data/photos.json';
    var toDoUrl = 'https://beehive-270a2.firebaseio.com/data/todos.json';

    function sendRequest(url, callBack) {
        var request = new XMLHttpRequest();
        request.addEventListener('load', callBack);
        request.open('GET', url);
        request.send();
    }

    sendRequest(beesUrl, getBeesComplete);

    function getBeesComplete(e) {
        var request = e.target;

        if (request.status === 200) {

            var data = JSON.parse(request.responseText);

            data.forEach(function (beeData) {
                var bee = new Bee(beeData.name,
                    beeData.address,
                    beeData.phone,
                    beeData.username,
                    beeData.company,
                    beeData.email,
                    beeData.website,
                    beeData.id);
                bees.push(bee);
            });

        } else {
            console.log('erroren on request');
        }
    }

    sendRequest(postsUrl, getPostsComplete);

    function getPostsComplete(e) {

        var request = e.target;

        if (request.status === 200) {

            var data = JSON.parse(request.responseText);

            for (let i = 0; i < data.length; i++) {
                postsData = data[i];
                var post = new Post(postsData.body, postsData.id, postsData.title, postsData.userId);
                posts.push(post);
                addPostToBee(post);
            }

            sendRequest(commentsUrl, getCommentsComplete);

        } else {
            console.log('error');
        }
    }

    // agregar los post a los bees

    function addPostToBee(post) {
        bees.forEach(bee => {

            if (bee.id === post.userId) {
                bee.addPost(post);
            }
        });
    }

    // extraer los comments de el url

    function getCommentsComplete(e) {

        var request = e.target;

        if (request.status === 200) {

            var data = JSON.parse(request.responseText);

            for (let i = 0; i < data.length; i++) {
                commentData = data[i];
                var comment = new Comment(commentData.body, commentData.email, commentData.id, commentData.name, commentData.postId);
                addCommentToPost(comment);
            }

        } else {
            console.log('error');
        }
    }

    function addCommentToPost(comment) {

        posts.forEach(post => {

            if (post.id === comment.postId) {
                post.addComment(comment);
            }
        });
    }

    //     Albums      //

    sendRequest(albumsUrl, getAlbumsComplete);
    function getAlbumsComplete(e) {

        var request = e.target;

        if (request.status === 200) {
            var data = JSON.parse(request.responseText);

            for (let i = 0; i < data.length; i++) {
                constData = data[i];
                var album = new Album(constData.id, constData.title, constData.userId);
                albunes.push(album);
                addAlbumToBee(album);
            }
        } else {
            console.log('erroren on request');
        }
    }

    function addAlbumToBee(album) {

        bees.forEach(bee => {

            if (bee.id === album.userId) {
                bee.addAlbum(album);
            }
        });
    }

    //     photos      //


    sendRequest(photosUrl, getPhotosComplete);
    function getPhotosComplete(e) {

        var request = e.target;

        if (request.status === 200) {
            var data = JSON.parse(request.responseText);

            for (let i = 0; i < data.length; i++) {
                constData = data[i];
                var photo = new Photo(constData.albumId, constData.id, constData.thumbnailUrl, constData.title, constData.url);
                addPhotosToAlbum(photo);
            }
        } else {
            console.log('erroren on request');
        }
    }

    function addPhotosToAlbum(photo) {

        albunes.forEach(album => {

            if (album.id === photo.albumId) {
                album.addPhotos(photo);
            }
        });
    }

    //     photos      //

    sendRequest(toDoUrl, getToDosComplete);
    function getToDosComplete(e) {

        var request = e.target;

        if (request.status === 200) {
            var data = JSON.parse(request.responseText);

            for (let i = 0; i < data.length; i++) {
                Data = data[i];
                var todo = new ToDo(Data.completed, Data.id, Data.title, Data.userId);
                toDos.push(todo);
                addToDosToBee(todo);
            }
        } else {
            console.log('erroren on request');
        }
    }

    function addToDosToBee(todo) {

        bees.forEach(bee => {

            if (bee.id === todo.userId) {
                bee.addToDos(todo);
            }
        });
    }

    console.log(bees);
}