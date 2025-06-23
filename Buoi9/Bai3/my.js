function BMI()
{
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight / (height*height);
    let result;
    if(bmi < 18.5)
    {
        result = "Underweight";
    }
    else if(bmi < 25.0)
    {
        result = "Normal";
    }
    else if(bmi < 30.0)
    {
        result = "Overweight";
    }
    else{
        result = "Obese";
    }
    let messa = document.getElementById("result");
    messa.innerText = "Chỉ số BMI là: "+ bmi + ". Bạn đang là: " + result;
}

