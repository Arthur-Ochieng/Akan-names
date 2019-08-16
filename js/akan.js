function validation (){
    var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    if(date=='' || gender==''){
      document.getElementById("eresult").innerHTML = "All Fields required"
      return false;
    }
    else{
      return true;
    }
    
    }