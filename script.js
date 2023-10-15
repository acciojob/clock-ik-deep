//your JS code here. If required.
let p = document.getElementById('timer')
function getTimeAndDate(){
	var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " , "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
	p.innerText=datetime;
}

setInterval(getTimeAndDate,1000 )

