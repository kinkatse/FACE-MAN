let fvY;
let fvDist = 110;
let fvWord;
let fvColor1;
let fvColor2;
let filterPos = [17, 52, 87, 122, 157]

function FilterVis(positions) {
    for (let i = 0; i < positions.length; i++) {
        if (positions[i] === "scanmask") {
            fvWord = "Scanmask";
            fvColor1 = 'rgba(191, 225, 255, 1)';
            fvColor2 = 'rgb(153, 207, 255)';
            fvY = filterPos[i];
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvWord);
        } else if (positions[i] === "pacman") {
            fvWord = "Pacman";
            fvColor1 = 'rgba(255, 245, 140, 1)';
            fvColor2 = 'rgb(229, 214, 75)';
            fvY = filterPos[i];
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvWord);
        } else if (positions[i] === "kirby") {
            fvWord = "Kirby";
            fvColor1 = 'rgba(255, 186, 212, 1)';
            fvColor2 = 'rgb(234, 140, 176)';
            fvY = filterPos[i];
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvWord);
        } else if (positions[i] === "pikachu") {
            fvWord = "Pikachu";
            fvColor1 = 'rgba(255, 228, 165, 1)';
            fvColor2 = 'rgb(219, 179, 87)';
            fvY = filterPos[i];
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvWord);
        } else if (positions[i] === "hitbox") {
            fvWord = "Hitbox";
            fvColor1 = 'rgba(132, 255, 181, 1)';
            fvColor2 = 'rgb(74, 206, 125)';
            fvY = filterPos[i];
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvWord);
        } else if (positions[i] === "pretty") {
            fvWord = "Pretty";
            fvColor1 = 'rgba(132, 255, 181, 1)';
            fvColor2 = 'rgb(74, 206, 125)';
            fvY = filterPos[i];
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvWord);
        } else if (positions[i] === "mustache") {
            fvWord = "Mustache";
            fvColor1 = 'rgba(132, 255, 181, 1)';
            fvColor2 = 'rgb(74, 206, 125)';
            fvY = filterPos[i];
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvWord);
        } else if (positions[i] === "glasses") {
            fvWord = "Glasses";
            fvColor1 = 'rgba(132, 255, 181, 1)';
            fvColor2 = 'rgb(74, 206, 125)';
            fvY = filterPos[i];
            new FilterPos(fvY, fvColor1, fvColor2, fvDist, fvWord);
        }
    }
}