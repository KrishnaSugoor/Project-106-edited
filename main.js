function startclassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json", modelready);

}
 function modelready() {
    classifier.classify(getresult);
    
 }
 function modelready() {
    classifier.classify(getresult);
    
 }
 function getresult(error,result){
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("resultlabel").innerHTML="I can Hear "+result[0].label;
        document.getElementById("confidence").innerHTML='Accuracy - '+ (result[0].confidence*100).toFixed(2)+" %";
        img1=document.getElementById("bigearboy");
        
        if(result[0].label=="Barking")
        {
            img1.src="dog.gif";
        }  
        else if(result[0].label=="Meowing")   
        {
            img1.src="cat.gif";
        }
        else{
            img1.src="ear boy.gif"
        }
    }
 }