function submit() {
    const firstname = document.getElementById("FirstName").value;

    const lastname = document.getElementById("LastName").value;
    const dob = document.getElementById("date").value;
    const number = document.getElementById("contact").value;
    const email = document.getElementById("Email").value;
    const regex = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
    const address = document.getElementById("place").value;
    if (!firstname || !lastname || !dob || !number || !email || !address) {
        alert("Please fill in all fields")
        return ;
    }
    else if(isNaN(number)){
       alert("please enter the digit");
       return false;
    }
    else if(number.length<10){
        alert("please enter 10 digit number");
        return false;

    }
    else if (!regex.test(email)) {
        alert("please enter the valid email id");
        return false;
    }
    else{
        
        document.getElementById("uFirstName").textContent = 'First Name : ' + firstname;

        document.getElementById("uLastName").textContent = 'Last Name : ' + lastname;
        document.getElementById("udate").textContent = 'DOB :' + dob;
        document.getElementById("ucontact").textContent = 'Contact :' + number;
        document.getElementById("uEmail").textContent = 'Email : ' + email;
        document.getElementById("uplace").textContent = 'Address : ' + address;
        document.getElementById("userdetails").style.display = "block";
    }
}



