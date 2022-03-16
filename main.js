var dog =0;
var cat =0;
var monkey =0;
var lion =0;

function StartClassification()

{
navigator.mediaDevices.getUserMedia({audio:true})
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2sS05pYSf//model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}

function gotResult(error,results)
{
    if(error){
        console.error(error);
    }else{
        console.log('results');
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("detected").innerHTML = "Detected dog - "+dog+" Detected cat - "+cat+" Detected lion - "+lion+" Detected monkey - "+monkey+" -;
        document.getElementById("detected").style.color = "rgb("+randaom_number_r+","+randaom_number_g+",+randaom_number_b+")";

        document.getElementById("animal_voices").innerHTML = "Detected dog - "+dog+" Detected cat - "+cat+" Detected lion - "+lion+" Detected monkey - "+monkey+" -;
        document.getElementById("animal_voices").style.color = "rgb("+randaom_number_r+","+randaom_number_g+",+randaom_number_b+")";
 
        imag = document.getElementById("aniaml_images");

        if(results[0].label =="barking") {
            img.src = "https://images.hive.blog/0x0/https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmc8aGgfB8EFEKevh5bqs8FzAWkN9cpRh5eq2vaQNntEUb/dogjumpandp.gif";
          dog =dog +1;
        }
        else if(results[0].label =="meawing") {
            img.src = "https://c.tenor.com/Tkmzq2w3mMgAAAAC/meow-cat.gif";
          cat =cat +1;
        }
        else if(results[0].label =="roaring") {
            img.src = "https://acegif.com/wp-content/uploads/2020/07/lion-roar.gif";
          lion =lion +1;
        }
        else (results[0].label =="monkey") {
            img.src = "https://media1.giphy.com/media/hRxXnkHRHBOky3ZOLr/giphy.gif";
          monkey =monkey +1;
        }
        
    }
    }
