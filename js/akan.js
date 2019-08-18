function validation (){
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var gender1 = document.getElementById('gender1').value;
    var gender2 = document.getElementById('gender2').value;
    if(day.value<=0 || day.value>31 || isNaN(day.value) || day.value === null){
      document.getElementById("eresult").innerHTML = "Enter valid day"
      return false;
    }
     else{
      return true;
    }
    if(month.value<=0 || month.value>12 || isNaN(month.value) || month.value === null){
      document.getElementById("eresult").innerHTML = "Enter valid month"
      return false;
    }
     else{
      return true;
    }
    if(year.value<=0 || year.value>2019 || isNaN(year.value) || year.value ===null){
      document.getElementById("eresult").innerHTML = "Enter valid year"
      return false;
    }
     else{
      return true;
    }
    }
    var maleName = [" Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var DayOfCentury = parseInt(DateOfBirth.toString().slice(0, 2));
    var DayofBirth = parseInt(YearOfBirth.value.slice(2, 4));
    var Dayoftheweek = parseInt(((DayOfCentury / 4) - 2 * DayOfCentury - 1) + ((5 * DayofBirth / 4)) + ((26 * (MonthOfBirth + 1) / 10)) + DateOfBirth) % 7;
    var Mname = maleName[Dayoftheweek-1];
    var Day = Days[Dayoftheweek - 1];
    var Fname = femaleName[Dayoftheweek - 1];
    var Day = Days[Dayoftheweek - 1];
    if(gender1.checked == true){
      document.getElementById("outputs").innerHTML=("If you were born on "     + Day +    " your name is " + Mname);
    } 
    else if(gender2.checked == true){
      document.getElementById("outputs").innerHTML=("If you were born on "     + Day +    " your name is " + Fname);
        }
        myfunction();
    
    
    
    //if(gender.value<=0 || day.value>31 || NaN=(day.value) || day.value ===null){
      //alert("Enter valid date or gender")
    
    /*if(date=='' || gender==''){
      document.getElementById("eresult").innerHTML = "Enter valid date or gender"
      return false;
    }
    else{
      return true;
    }
    
    function calculate(CC,YY,MM,DD){
    
     return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7; 
     }
     
     let day = 
     let month = 
     let year = 
     let cc = *?
     
     
     
     let day = calculate(day,month,year,cc)
     
    
    }