function thePyramid(base, increment) {

    let height = +increment;

    let stoneMaterial = 0;
    let marbleMaterial = 0;
    let lapisLazuliMaterial = 0;
    let goldMaterial = 0;

    let pyramidHeightCounter = 0;

    let block = 1;

    let reducingHeight = base * base
    let steps = 0;
    let stoneRequired = 0;


    while (reducingHeight >= block) {
        stoneRequired = (base - 2) * (base - 2);
        steps = reducingHeight - stoneRequired;
        base -= 2
        reducingHeight = base * base;
        pyramidHeightCounter++;

        stoneMaterial += stoneRequired
        if (pyramidHeightCounter % 5 == 0) {
            lapisLazuliMaterial += steps;
        } else {
            marbleMaterial += steps;
        }
        if (base <= 2) {
            break;
        }

    }

    goldMaterial += reducingHeight; // steps
    pyramidHeightCounter++;
    let totalStone = stoneMaterial * height;
    let totalMarble = marbleMaterial * height;
    let totalLapisLazuli = lapisLazuliMaterial * height;
    let totalGold = goldMaterial * height;
    let totalPyradimHeight = pyramidHeightCounter * height;

    console.log(`Stone required: ${Math.round(totalStone)}`);
    console.log(`Marble required: ${Math.round(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.round(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.round(totalGold)}`);
    console.log(`Final Pyramid height: ${Math.round(totalPyradimHeight)}`);

    console.log(`*******NEW PYRAMID*******`);
}
thePyramid(11, 1)

thePyramid(11, 0.75)

thePyramid(12, 1)

thePyramid(23, 0.5)