function calBmi(){
    var height = document.getElementById("ht").value 
    var weight = document.getElementById("wt").value 

    if((height>0)&&(weight>0)){
        var bmi = (weight/((height/100)*(height/100))).toFixed(2);
        document.getElementById('result').innerHTML = bmi;
    }else {
        document.getElementById('result').innerHTML = 'Please enter valid values for height and weight.';
    }

    var status;
    if(bmi<18.5){
        status = "Under Weight";
    }else if( (bmi>=18.5) && (bmi<24.9) ){
        status = "Normal Weight";
    }else{
        status = "Over Weight";
    }

    document.getElementById("statusresult").innerHTML = `You are `+ status
}