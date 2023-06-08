// css 

var main_div = document.getElementById("main_div")
main_div.style.textAlign="center"
main_div.style.margin="170px 256px"
main_div.style.position="relative"

var date = document.getElementById("date")
date.style.border = "1px solid black"
date.style.height = "100px"
date.style.width = "200px"
date.style.textAlign="center"
date.style.borderRadius="10px"
date.style.backgroundColor="aqua"
date.style.marginLeft="415px"


var hour = document.getElementById("hour")
hour.style.border = "1px solid black"
hour.style.height = "100px"
hour.style.width = "100px"
hour.style.textAlign="center"
hour.style.borderRadius="10px"
hour.style.backgroundColor="aqua"
hour.style.display="inline-block"
hour.style.margin="20px"

var min = document.getElementById("min")
min.style.border = "1px solid black"
min.style.height = "100px"
min.style.width = "100px"
min.style.textAlign="center"
min.style.borderRadius="10px"
min.style.backgroundColor="aqua"
min.style.display="inline-block"
min.style.margin="20px"

var sec = document.getElementById("sec")
sec.style.border = "1px solid black"
sec.style.height = "100px"
sec.style.width = "100px"
sec.style.textAlign="center"
sec.style.borderRadius="10px"
sec.style.backgroundColor="aqua"
sec.style.display="inline-block"
sec.style.margin="20px"


var am_pm = document.getElementById("am_pm")
am_pm.style.border = "1px solid black"
am_pm.style.height = "100px"
am_pm.style.width = "100px"
am_pm.style.textAlign="center"
am_pm.style.borderRadius="10px"
am_pm.style.backgroundColor="aqua"
am_pm.style.display="inline-block"
am_pm.style.margin="20px"




// function 


setInterval(showtime,1000)

function showtime(){
    var time = new Date()
    var hour = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var am_pm = "AM"

    if(hour>=12){
        am_pm="PM"
        hour=hour-12
    }

    if(hour==0){
        hour = 12
    }
    
    var sec = sec < 10 ? "0" + sec : sec;
    var hour = hour < 10 ? "0" + hour : hour;
    var min = min < 10 ? "0" + min : min;

    var hour1 = document.getElementById("hour1")
    hour1.textContent = `${hour}`

    var min1 = document.getElementById("min1")
    min1.textContent = `${min}`
    var sec1 = document.getElementById("sec1")
    sec1.textContent = `${sec}`

    var am_pm1 = document.getElementById("am_pm1")
    am_pm1  .textContent = `${am_pm}`

    return;

}




setInterval(showtime1,1000)
function showtime1(){
    var time = new Date()
    var hour = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var am_pm = "AM"

    if(hour>=12){
        am_pm="PM"
        hour=hour-12
    }

    var sec = sec < 10 ? "0" + sec : sec;
    var hour = hour < 10 ? "0" + hour : hour;
    var min = min < 10 ? "0" + min : min;

    var hour2 = document.getElementById("hour2")
    hour2.textContent = `${hour}`

    var min2 = document.getElementById("min2")
    min2.textContent = `${min}`
    var sec2 = document.getElementById("sec2")
    sec2.textContent = `${sec}`

    var am_pm2 = document.getElementById("am_pm2")
    am_pm2 .textContent = `${am_pm}` 
    
    return;
}



setInterval(showtime2,1000)
function showtime2(){
    var time = new Date()
    var hour = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var date = time.getDate()
    var month = time.getMonth()
    var year = time.getFullYear()
    var day = time.getDay()
    var am_pm = "AM"

    // if(hour>=12){
    //     am_pm="PM"
    //     hour=hour-12
    // }

    // if(hour==0){
    //     hour = 12
    // }

    var arr =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var weekday = arr[day]


    var sec = sec < 10 ? "0" + sec : sec;
    var hour = hour < 10 ? "0" + hour : hour;
    var min = min < 10 ? "0" + min : min;
    var day = day < 10 ? "0" + day : day;
    var date = date < 10 ? "0" + date : date;
    var month = month < 10 ? "0" + month : month;

    var D_T = document.getElementById("D_T")
    D_T.textContent = `${date}-${month}-${year} - ${weekday}`


    var hour1 = document.getElementById("hour1")
    hour1.textContent = `${hour}`

    var min1 = document.getElementById("min1")
    min1.textContent = `${min}`
    var sec1 = document.getElementById("sec1")
    sec1.textContent = `${sec}`

    var am_pm1 = document.getElementById("am_pm1")
    am_pm1  .textContent = `${am_pm}`

    return;
}


function time_format(){
    var select = document.getElementById("timing")
    var selectval = select.value.trim()

    if(selectval == "12-hours"){
        showtime();
        date.style.display="none" 
    }

    if(selectval == "24-hours"){
       showtime1();
       date.style.display="none"
    }

    if(selectval == "Date&time"){
        showtime2();
        date.style.display="block"
    }
}




