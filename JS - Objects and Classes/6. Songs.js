function favSongs(inputArray) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name,
                this.time = time
        }
    }
    let songsArray = [];
    let numberSongs = inputArray.shift();
    let typeSong = inputArray.pop();

    for (let strings of inputArray) {
        let splitted = strings.split('_');
        let [typeList, name, time] = splitted;
        let song = new Song(typeList, name, time);
        // if(typeList === typeSong || typeSong === 'all'){
        songsArray.push(song);
        //     console.log(song.name);
        // }
    }
    // instead of the commented lines below the songsArray is operated by methods:
    if (typeSong === 'all') {
        songsArray.forEach((i) => console.log(i.name));
    } else {
        let filtered = songsArray.filter((i) => i.typeList === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }

    return console.log(songsArray)
}

favSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);

favSongs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);

favSongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)