
function reset(){
    document.getElementById("reset").reset();
}


function add(){
    var form = document.getElementById("res")
    form.style.display="none"

    var num1 = document.getElementById("no1").value
    var num2 = document.getElementById("no2").value
    var sum = Number(num1)+ Number(num2);
    var main_div = document.createElement("div")
    document.body.append(main_div)
    main_div.style.padding = "426px"
    main_div.style.marginTop = "-250px"
    main_div.textContent = "The Result is"
    main_div.style.textAlign = "center"
    main_div.style.fontSize = "25px"
    main_div.style.backgroundColor = "purple"

    var cont = document.createElement("p")
    main_div.appendChild(cont)
    cont.textContent = `${sum}`

    var back=document.getElementById("back")
    main_div.appendChild(back)
    back.style.display="inline"
    

    
}



function sub(){
    var form = document.getElementById("res")
    form.style.display="none"
    var form = document.getElementById("res")
    form.style.display="none"
    var num1 = document.getElementById("no1").value
    var num2 = document.getElementById("no2").value
    var sub = Number(num1)- Number(num2);
    var main_div = document.createElement("div")
    document.body.append(main_div)
    main_div.style.backgroundColor="1px solid black"
    main_div.style.padding="426px"
    main_div.style.marginTop="-250px"
    main_div.style.position="absolue"
    main_div.textContent="The Result is"
    main_div.style.textAlign="center"
    main_div.style.fontSize="25px"
    main_div.style.backgroundColor="purple"
    main_div.style.zIndex="-1"

    var cont = document.createElement("p")
    main_div.appendChild(cont)
    cont.textContent=`${sub}`
    
    var back=document.getElementById("back")
    main_div.appendChild(back)
    back.style.display="inline"

}

function mul(){
    var form = document.getElementById("res")
    form.style.display="none"
    var num1 = document.getElementById("no1").value
    var num2 = document.getElementById("no2").value
    var mul = Number(num1)* Number(num2);
    var main_div = document.createElement("div")
    document.body.append(main_div)
    main_div.style.backgroundColor="1px solid black"
    main_div.style.padding="426px"
    main_div.style.marginTop="-250px"
    main_div.style.position="absolue"
    main_div.textContent="The Result is"
    main_div.style.textAlign="center"
    main_div.style.fontSize="25px"
    main_div.style.backgroundColor="purple"
    main_div.style.zIndex="1px"

    var cont = document.createElement("p")
    main_div.appendChild(cont)
    cont.textContent=`${mul}`


    var back=document.getElementById("back")
    main_div.appendChild(back)
    back.style.display="inline"

}

function div(){
    var form = document.getElementById("res")
    form.style.display="none"
    var num1 = document.getElementById("no1").value
    var num2 = document.getElementById("no2").value
    var div = Number(num1) / Number(num2);

    var main_div = document.createElement("div")
    document.body.append(main_div)
    main_div.style.backgroundColor="1px solid black"
    main_div.style.padding="426px"
    main_div.style.marginTop="-250px"
    main_div.style.position="absolue"
    main_div.textContent="The Result is"
    main_div.style.textAlign="center"
    main_div.style.fontSize="25px"
    main_div.style.backgroundColor="purple"
    main_div.style.zIndex="1px"

    var cont = document.createElement("p")
    main_div.appendChild(cont)
    cont.textContent=`${div}`


    var back=document.getElementById("back")
    main_div.appendChild(back)
    back.style.display="inline"
    
}