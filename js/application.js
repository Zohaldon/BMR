function ChangeCalcType() {
  var calc_value = document.getElementById("CalcType").value;

  /* Hide Div Based on Select Value */
  if(calc_value == "Metric") {
    document.getElementById("Metric_Calc_Fields").style.display = "block";
    document.getElementById("Imperial_Calc_Fields").style.display = "none";
  }
  else {
    document.getElementById("Imperial_Calc_Fields").style.display = "block";
    document.getElementById("Metric_Calc_Fields").style.display = "none";
  }
}

function CalculateBmpMetric() {
    var Age      = document.getElementById('Bmp_Age').value;
    check_age    = CheckNumber(Age,"Please Enter Your Age")
    var HeightCm = document.getElementById('H_Cm').value;
    check_height = CheckNumber(HeightCm,"Please Enter Your Height In CM")
    var WeightK  = document.getElementById('W_K').value;
    check_weight = CheckNumber(WeightK,"Please Enter Your Weight In KG")
    if(check_age || check_height || check_weight)
      return false;

    var gender   = document.getElementById("Bmp_Gender").value;
    
    
    if (gender == "Male")
    {
      bmr = 66.5 + (13.75 * WeightK) + (5.003 * HeightCm) - (6.755 * Age);
      name = "Bmp_ActivityLevel";
      var ActivityLevel = document.querySelector("input[name="+name+"]:checked")
      var storage;
      if(ActivityLevel){
        ActivityLevelValue = ActivityLevel.value
        if (ActivityLevelValue == "little" || ActivityLevelValue == "light")
        {
          var bmr_value = 1.53 * bmr;
          storage = bmr_value;
        }
        else if (ActivityLevelValue == "moderate" || ActivityLevelValue == "hard" )
        {
           var bmr_value = 1.76 * bmr;
           storage = bmr_value;
        }
        else if (ActivityLevelValue == "vhard")
        {
           var bmr_value = 2.25 * bmr; 
           storage = bmr_value;
        }
        
      }
    }
    else
    {
      bmr = 655.1 + (9.563 * WeightK) + (1.850 * HeightCm) - (4.676 * Age);
      name = "Bmp_ActivityLevel";
      var ActivityLevel = document.querySelector("input[name="+name+"]:checked")
      var storage = 0.0;
      if(ActivityLevel){
        ActivityLevelValue = ActivityLevel.value
        if (ActivityLevelValue == "little" || ActivityLevelValue == "light")
        {
          var bmr_value = 1.53 * bmr;
          storage = bmr_value;
        }
        else if (ActivityLevelValue == "moderate" || ActivityLevelValue == "hard" )
        {
           var bmr_value = 1.76 * bmr;
           storage = bmr_value;
        }
        else if (ActivityLevelValue == "vhard")
        {
           var bmr_value = 2.25 * bmr; 
           storage = bmr_value;
        }
        
      }
    }

    alert("your bmr is: "+ bmr +"\n"+"Your daily calories intake is: " + storage);
}

function CalculateImperial() {
    var Age      = document.getElementById('Imp_Age').value;
    check_age    = CheckNumber(Age,"Please Enter Your Age")
    var HeightI  = document.getElementById('inches').value;
    check_height = CheckNumber(HeightI,"Please Enter Your Height In Inch")
    var WeightP  = document.getElementById('pounds').value;
    check_weight = CheckNumber(WeightP,"Please Enter Your Weight In Pound")
    if(check_age || check_height || check_weight)
      return false;
    var gender = document.getElementById("Imp_Gender").value
    var bmr = 0.0
    if (gender == "Male")
    {
      bmr = 66 + (6.2 * WeightP) + (12.7 * HeightI) - (6.76 * Age);
    }
    else
    {
      bmr = 655.1 + (4.35 * WeightP) + (4.7 * HeightI) - (4.7 * Age);
    }
    name = "Imp_ActivityLevel";
    var bmr_value;
    var storage;
    var ActivityLevel = document.querySelector("input[name="+name+"]:checked")
    if(ActivityLevel){
      ActivityLevelValue = ActivityLevel.value
      if (ActivityLevelValue == "little" || ActivityLevelValue == "light")
      {
        var bmr_value = 1.53 * bmr;
        storage = bmr_value;
      }
      else if (ActivityLevelValue == "moderate" || ActivityLevelValue == "hard" )
      {
        var bmr_value = 1.76 * bmr;
        storage = bmr_value;
      }
      else if (ActivityLevelValue == "vhard")
      {
        var bmr_value = 2.25 * bmr; 
        storage = bmr_value;
      }
    }
    alert("your bmr is: "+ bmr +"\n"+"Your daily calories intake is: " + storage );
}

function CheckNumber(number,message){
  number_check = false
  if(number == '' || number < 0 ){
    alert(message)
    number_check = true
  }
  return number_check
}
