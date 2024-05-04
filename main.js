function preload() {
    moustache=loadImage("https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L3JtNjQ4LTA5Mi5wbmc.png");
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log('poseNet Is Intialized');
}

function draw() {
    image(video, 0, 0, 300, 300);

    image(moustache, noseX, noseY, 30, 03);
}

function take_snapshot(){
    save('MyMoustacheFilterImage.png');
}

noseX=0;
noseY=0;