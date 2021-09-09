let fvY;
let fvDist = 40;
let fvImg;
let fvColor1;
let fvColor2;
let filterPos = [17, 52, 87, 122, 157]
let toggle;

function FilterVis(positions) {
    for (let i = 0; i < positions.length; i++) {
        if (positions[i] === "scanmask") {
            fvImg = scanmaskIcon;
            fvColor1 = 'rgba(191, 225, 255, 1)';
            fvColor2 = 'rgb(153, 207, 255)';
            fvY = filterPos[i];
            toggle = faceMaskDotsButton;
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvImg, toggle);
        } else if (positions[i] === "pacman") {
            fvImg = pacmanIcon;
            fvColor1 = 'rgba(255, 245, 140, 1)';
            fvColor2 = 'rgb(229, 214, 75)';
            fvY = filterPos[i];
            toggle = pacmanButton;
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvImg, toggle);
        } else if (positions[i] === "kirby") {
            fvImg = kirbyIcon;
            fvColor1 = 'rgba(255, 186, 212, 1)';
            fvColor2 = 'rgb(234, 140, 176)';
            fvY = filterPos[i];
            toggle = kirbyButton;
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvImg, toggle);
        } else if (positions[i] === "pikachu") {
            fvImg = pikachuIcon;
            fvColor1 = 'rgba(255, 228, 165, 1)';
            fvColor2 = 'rgb(219, 179, 87)';
            fvY = filterPos[i];
            toggle = pikachuButton;
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvImg, toggle);
        } else if (positions[i] === "hitbox") {
            fvImg = hitboxIcon;
            fvColor1 = 'rgba(132, 255, 181, 1)';
            fvColor2 = 'rgb(74, 206, 125)';
            fvY = filterPos[i];
            toggle = hitboxButton;
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvImg, toggle);
        } else if (positions[i] === "pretty") {
            fvImg = prettyIcon;
            fvColor1 = 'rgba(132, 255, 181, 1)';
            fvColor2 = 'rgb(74, 206, 125)';
            fvY = filterPos[i];
            toggle = prettyButton;
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvImg, toggle);
        } else if (positions[i] === "mustache") {
            fvImg = mustacheIcon;
            fvColor1 = 'rgba(132, 255, 181, 1)';
            fvColor2 = 'rgb(74, 206, 125)';
            fvY = filterPos[i];
            toggle = mustacheButton;
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvImg, toggle);
        } else if (positions[i] === "glasses") {
            fvImg = glassesIcon;
            fvColor1 = 'rgba(132, 255, 181, 1)';
            fvColor2 = 'rgb(74, 206, 125)';
            fvY = filterPos[i];
            toggle = glassesButton;
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvImg, toggle);
        }
    }
}