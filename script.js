
function loadalert() {
    alert("Loading weather report...");
    }

    var y = document.querySelectorAll("h3")
    function convert(temp){
        for(i=0; i < y.length; i++){
            if (temp == "F"){
                var value = parseFloat(y[i].innerText)
                y[i].innerText =Math.floor (value * 9/5) + 32;
            }
            else if (temp == "C"){
                var value = parseFloat(y[i].innerText)
                y[i].innerText =Math.round((value - 32)*5/9 *10)/10;
            }
        }
    }

    function cookie_accept(){
        document.querySelector(".cookie_hate").remove()
    }