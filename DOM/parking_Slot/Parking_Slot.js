
var count = 1


function res(){
    document.getElementById("res").reset();
}

var head = document.createElement("table")
    head.textContent="Details of the bike parking"
    document.body.append(head)

    var h1 = document.createElement("thead")
    document.body.append(h1)
    var h2 = document.createElement("tr")
    document.body.append(h2)
    var h3 = document.createElement("th")
    h3.textContent ="SNO"
    document.body.append(h3)
    h3.style.border="1px solid black"
    h3.style.padding="10px"

    var h4 = document.createElement("th")
    h4.textContent ="Bike NO"
    document.body.append(h4)
    h4.style.border="1px solid black"
    h4.style.padding="10px"

    var h5 = document.createElement("th")
    h5.textContent ="Bike Owner"
    document.body.append(h5)
    h5.style.border="1px solid black"
    h5.style.padding="10px"

    var h6 = document.createElement("th")
    h6.textContent ="Check in"
    document.body.append(h6)
    h6.style.border="1px solid black"
    h6.style.padding="10px"

    var h6 = document.createElement("th")
    h6.textContent ="Check out"
    document.body.append(h6)
    h6.style.border="1px solid black"
    h6.style.padding="10px"



function fun(){

    // for(i=0;i<count;i++)
    // {

    var inp1 =  document.getElementById("B_no").value;
    var inp2 =  document.getElementById("B_own").value;
    var inp3 =  document.getElementById("B_TCI").value;
    var inp4 =  document.getElementById("B_TCO").value;

           
    var b1 = document.createElement("tbody")
    document.body.append(b1)
    var b2 = document.createElement("tr")
    document.body.append(b2)

    

    var s1 = document.createElement("td")
    document.body.append(s1)
    s1.textContent =`${count}`
    s1.style.border="1px solid black"
    s1.style.padding="10px"

    

    var b3 = document.createElement("td")
    document.body.append(b3)
    b3.textContent =`${inp1}`
    b3.style.border="1px solid black"
    b3.style.padding="10px"

    var b4 = document.createElement("td")
    document.body.append(b4)
    b4.textContent =`${inp2}`
    b4.style.border="1px solid black"
    b4.style.padding="10px"

    var b5 = document.createElement("td")
    document.body.append(b5)
    b5.textContent =`${inp3}`
    b5.style.border="1px solid black"
    b5.style.padding="10px"

    var b6 = document.createElement("td")
    document.body.append(b6)
    b6.textContent =`${inp4}`
    b6.style.border="1px solid black"
    b6.style.padding="10px"

    count++
}



// count++