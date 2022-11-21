
function compute() {
   
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100
    let futureYearFromNow = new Date();
  

    futureYearFromNow.setFullYear(futureYearFromNow.getFullYear() + Number(years));
  
    document.getElementById("result").innerHTML = `<b>${interest}</b> will be paid in ${futureYearFromNow.getFullYear()}`;
  
  }
  
  
  function rangeSliderVal(e) {
    e.preventDefault();
    
    let rangeSliderValue = e.target.value;
  
    
    document.getElementById("rate").innerHTML = `${rangeSliderValue}`;
  }
  
 
  document.getElementById("slider").onchange = rangeSliderVal;