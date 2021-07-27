let video = document.getElementById("video");
let model;
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
const landmarkArray = [];
let mouthOpen = false;
let eyesClosed = false;

const setUpCamera = () => {
    navigator.mediaDevices.getUserMedia({
        video: {width: 1000, height: 600},
        audio: false,
    }).then((stream) => {
        video.srcObject = stream;
    });
};

const detectFaces = async () => {
    const facePrediction = await model.estimateFaces(video, false);
    if (facePrediction.length === 0) {
        return console.log("Error: no face detected");
    }
    if (facePrediction.length > 1) {
        return console.log("Error: This app will only handle 1 person at a time");
    }
    console.log(facePrediction);
    context.drawImage(video, 0, 0, 1000, 600);
    facePrediction.forEach((pred) => {
        context.beginPath();
        context.lineWidth = "4";
        context.strokeStyle = "blue";
        if (pred.bottomRight[0] - pred.topLeft[0] - 40 < 125 || pred.bottomRight[1] - pred.topLeft[1] + 110 < 200) {
            return console.log("Error: Bring your face closer and keep it straight");
        }
        if (pred.bottomRight[0] - pred.topLeft[0] - 40 > 225 || pred.bottomRight[1] - pred.topLeft[1] + 110 > 300) {
            return console.log("Error: Back up a bit and keep your head straight");
        }
        context.rect (
            pred.topLeft[0] + 20,
            pred.topLeft[1] - 100,
            pred.bottomRight[0] - pred.topLeft[0] - 40,
            pred.bottomRight[1] - pred.topLeft[1] + 110
        );
        context.stroke();

        context.fillStyle = "red";
        pred.landmarks.forEach((landmark) => {
            landmarkArray.push(landmark);
            context.fillRect(landmark[0], landmark[1], 5, 5);
        });
    });
}

setUpCamera();
video.addEventListener("loadeddata", async () => {
    model = await blazeface.load();
    // detectFaces();
    setInterval(detectFaces, 50);
})