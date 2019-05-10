let Library = function(name, creator) {

  this.name = name;
  this.creator = creator;
  this.playlists = [];  

}

let Playlist  = function(name) { 

  this.name = name;
  this.tracks = [];

}

let Track = function(title, rating, length) {

  this.title = title;
  this.rating = rating;
  this.length = length;

}

Playlist.prototype.overallRating = function() {
  let sumofRates = 0
  for (let track of this.tracks) {
    sumofRates += track.rating;
  }
  return (sumofRates / this.tracks.length)
}

Playlist.prototype.totalDuration = function() {
  let sumofLength = 0
  for (let track of this.tracks) {
    sumofLength += track.length;
  }
  return (sumofLength)

}

let track1 = new Track("Track1", 5, 320)
let track2 = new Track("Track2", 4, 300)
let track3 = new Track("Track3", 3, 200)
let track4 = new Track("Track4", 2, 100)
let track5 = new Track("Track5", 1, 350)
let track6 = new Track("Track6", 5, 400)
let myPlaylist = new Playlist("My playlist")
myPlaylist.tracks.push(track1);
myPlaylist.tracks.push(track2);
myPlaylist.tracks.push(track3);
myPlaylist.tracks.push(track4);
let otherPlaylist = new Playlist("Other playlist")
otherPlaylist.tracks.push(track5);
otherPlaylist.tracks.push(track6);
let myLibrary = new Library("My Library", "Jon Snow")
myLibrary.playlists.push(myPlaylist)
myLibrary.playlists.push(otherPlaylist)

console.log("this is my playlist", myPlaylist)
console.log("this is other playlist", otherPlaylist)
console.log("this is my library", myLibrary);
console.log("this is total duration of myPlaylist", myPlaylist.totalDuration())
console.log("this is overallRating for other playlist", otherPlaylist.overallRating())
