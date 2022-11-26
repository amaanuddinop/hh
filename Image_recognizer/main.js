//https://teachablemachine.withgoogle.com/models/8JBiRAGzx//
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
 camra=document.getElementById("camra");
 Webcam.attach('#camra');
 function tack_snapshoot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captur_img" src="'+data_uri+'">';
    });
 }
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8JBiRAGzx/model.json',modelLoaded);
function modelLoaded(){
    console.log('model loaded');
}
function check(){ 
    img=document.getElementById("captur_img");
    classifier.classify(img,gotResult);
}
function gotResult (error,results){
if(error)
{
    console.error(error);
}
else{
    console.log(results);
document.getElementById("result_object").innerHTML=results[0].label;
document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);

}

}








