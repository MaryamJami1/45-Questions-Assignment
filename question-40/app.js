//Define the make album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three functions & creating three variables with different values
var album1 = make_album("Maryam", "Album title 1");
var album2 = make_album("Aqsa", "Album title 2");
//Calling a makealbum function with third parameter
var album3 = make_album("Jiya", "Album title 3", 10);
//Printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
