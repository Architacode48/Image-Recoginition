Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri)
        {
            document.getElementById("result").innerHTML='<img id="capimg"src="'+data_uri+'"/>';
        }
        );
}
console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2lcnOiLgo/model.json',modelLoaded);
function modelLoaded()
{
    console.log("model has loaded");
}
function check()
{
    img=document.getElementById("capimg");
    classifier.classify(img, getResult);
}
function getResult(error, results){
    if (error){
        console.error(error);
    }else {
        console.log(results);
        document.getElementById("object_name").innerHTML= results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
      }
    }