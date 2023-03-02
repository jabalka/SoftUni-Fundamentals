function maxSequence(array) {

    let maxSeq = [];
    for (let i = 0; i < array.length; i++) {
        let currentSeq = [array[i]];
        for (let r = i + 1; r < array.length; r++) {

            if (array[i] === array[r]) {
                currentSeq.push(array[r]);
            } else {
                break;
            }
            if (maxSeq.length < currentSeq.length) {
                maxSeq = currentSeq;
            }
        }
    }
    console.log(maxSeq.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);