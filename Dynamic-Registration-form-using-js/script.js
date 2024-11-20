var button = document.querySelector("#submitbtn");
button.addEventListener('click', submit);
const firstname = document.querySelector("#FirstName");
const lastname = document.querySelector("#LastName");
const dob = document.querySelector("#date");
const contact = document.querySelector("#contact");
const email = document.querySelector("#email");
const address = document.querySelector("#place");
const phoneregex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
const emailregex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

function submit() {
    if (!firstname.value || !lastname.value || !dob.value || !contact.value || !email.value || !address.value) {
        alert(" all field are required");
        return;
    }
    else if (!phoneregex.test(contact.value)) {
        alert("please enter the valid phone number");
        return false;
    }
    else if (!emailregex.test(email.value)) {
        alert("please enter the valid email id");
        return false
    }
    else {
        const div = document.createElement("div");
        div.setAttribute("class", "userdetail");
        document.body.appendChild(div);
        console.log(div);

        const heading = document.createElement("h1");
        heading.setAttribute("id", "head");
        const text = document.createTextNode("User details");
        heading.appendChild(text);
        div.appendChild(heading);
       
        const para1 = document.createElement("p");
        para1.setAttribute("id", "firstname1");
        div.appendChild(para1);
        para1.innerText = "FirstName : " + firstname.value;
        firstname.value = "";

        const para2 = document.createElement("p");
        para2.setAttribute("id", "lastname1");
        div.appendChild(para2);
        para2.innerText = "LastName : " + lastname.value;
        lastname.value = "";

        const para3 = document.createElement("p");
        para3.setAttribute("id", "dob1");
        div.appendChild(para3);
        para3.innerText = "DOB : " + dob.value;
        dob.value = "";

        const para4 = document.createElement("p");
        para4.setAttribute("id", "contact1");
        div.appendChild(para4);
        para4.innerText = "Contact : " + contact.value;
        contact.value = "";

        const para5 = document.createElement("p");
        para5.setAttribute("id", "email1");
        div.appendChild(para5);
        para5.innerText = " email : " + email.value;
        email.value = ""

        const para6 = document.createElement("p");
        para6.setAttribute("id", "address1");
        div.append(para6);
        para6.innerText = "Address :" + address.value;
        address.value = "";
    }
}