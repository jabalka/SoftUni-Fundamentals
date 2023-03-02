function gramophone(bandName, album, songName){

    let songDuration = (album.length * bandName.length) * songName.length / 2;
    let plateFullrotation = 2.5;

    let totalPlateRotation = songDuration / plateFullrotation;
    console.log(`The plate was rotated ${Math.ceil(totalPlateRotation)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')