// var inputt = document.getElementsByName('input').values

// var sbt = document.getElementsByClassName('next_btn')

// document.getElementById("frm").click();

function chk(){
    let errorCount=0;
    var first_name = document.getElementById("firstname").value;
    var last_name = document.getElementById('lastname').value;
    var phone = document.getElementById('phoneno').value;
    var offno = document.getElementById('offno').value;
    var email = document.getElementById('email').value;
//    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;
    var age = document.getElementById('age').value;
    var sex = document.getElementsByName('radio').value;
//    var gender = document.getElementById('gender').value;
    var checkbox_sample18 = document.getElementById('checkbox_sample18').checked;
    var checkbox_sample19 = document.getElementById('checkbox_sample19').checked;
    var checkbox_sample20 = document.getElementById('checkbox_sample20').checked;
//    console.log(`checkbox_sample18 ${checkbox_sample18} checkbox_sample19 ${checkbox_sample19} checkbox_sample20 ${checkbox_sample20}`);
    var txt = document.getElementById('txt').value;
    var rd1 = document.getElementById('residence1').checked
    var rd2 = document.getElementById('residence2').checked


    if(!first_name){
        alert("Enter First Name.");
        errorCount+=1;
        // return false;
    }

    if(!last_name){
        alert("Enter Last Name.");
        // return false;
        errorCount+=1;
        // return false;
    }

    if(!phone){
        alert("Enter phone number");
        errorCount+=1;
        // return false;
    }else if(phone.length != 10){
        alert("Phone shopuld have only 10 digits.");
        errorCount+=1;
        // return false;
    }else if(phone == phone.isInteger){
        alert("Enter Number only");
        errorCount+=1;
        // return false;
    }

    // if(offno){
    //     alert("Enter office no.");
    //     errorCount+=1;
    //     // return false;
    // }else 
    // if(offno == offno.isInteger){
    //     alert("Enter number only in office no.");
    //     errorCount+=1;
    //     // return false;
    // }

    if(!email){
        alert("Enter Email Id.");
        errorCount+=1;
        // return false;
    }else if(!validateEmail(email)){
        alert("Enter proper email id.");
        errorCount+=1;
        // return false;
    }

    if(!pass){
        alert("Enter Password");
        errorCount+=1;
    }
    
    if(!cpass){
        alert("Enter confirm Paswword.");
        errorCount+=1;
    }else if(!(pass.length >=7)){
            alert("Password should have 8 char");
            errorCount+=1;
    }else if(pass != cpass){
        alert("Password not match.");
        errorCount+=1;        
        // return false;
    }

    if(!age){
        alert("Select your birthday.");
        errorCount+=1;
    }

    // if(!sex.checked){
    //     alert("Select gender.")
    //     errorCount+=1;
    // }

    if(!(rd1 || rd2)){
        alert("Plz select Gender.")
        errorCount+=1;
    }

    if((checkbox_sample18) || (checkbox_sample19) || (checkbox_sample20)){
        
    }else{
        alert("Select atleast one box");
        errorCount+=1;
    }

    if(!txt){
        alert("Enter some text.")
        errorCount+=1;
    }


    if(errorCount>0){
        return false;
    }

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function dd(){
    var bdm = document.getElementById('bdm').value;
    var bdd = document.getElementById('bdd').value;
    var bdy = document.getElementById('bdy').value;


    if(bdd && bdm && bdy){
        var dat = new Date();
        dat.setFullYear(bdy,bdm,bdd);
        var dz = new Date();

    }
}

// function calcAge(){
//     var bdm = document.getElementById('bdm').value;
//     var bdd = document.getElementById('bdd').value;
//     var bdy = document.getElementById('bdy').value;
    
    
   
//     //console.log(bdz);
//     if(bdd && bdm && bdy){
//         const date1 = new Date(bdy,bdm-1,bdd);
//         //console.log(`dob ${date1}`);
//         const date2 = new Date();
//         const diffTime = (date2.getTime() - date1.getTime());
//         const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
//         //const diffYears = (diffTime / (1000 * 60 * 60 * 24 * 365));
//         const diffmonth = Math.floor((diffTime / (1000 * 60 * 60 * 24 * 365)) * 12 % 12); 
//         console.log(diffmonth);
//         document.getElementById('age').value=diffYears + "." + diffmonth;

//     }
// }

function calcAge() {
    var bdm = document.getElementById('bdm').value;
    var bdd = document.getElementById('bdd').value;
    var bdy = document.getElementById('bdy').value;
    
    var today = new Date();
    var dbdd = today.getDate() - bdd;
    var mbdm = today.getMonth() - bdm;
    var ybdy = today.getFullYear() - bdy;
    // var birthDate = new Date(bdy,bdm-1,bdd);
    // var age = today.getFullYear() - birthDate.getFullYear();
    // console.log(age);
    // var m = today.getMonth() - birthDate.getMonth();
    // console.log(m);
    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    // age--;
    // }
    // if((m === 0 && today.getDate() < birthDate.getDate())) {
    // m-=1;
    // }
    // if(m<0){
    // m+=12; 
    // }
    // document.getElementById('age').val(age + '.' + m);
    //return age; 
    if(today.getDate() >= bdd){
        mbdm+=1;
    }
    if((today.getMonth()+1) >= bdm && today.getDate() < bdd){
        ybdy-=1;
    }
    if(mbdm<0){
        mbdm+=12;
    }
    if(mbdm>12){
        mbdm-=12;
    }
    
    document.getElementById('age').value = ((ybdy) + '.' + (mbdm));
}

function calcday(){
    var mm = document.getElementById('bdd');
    var bdm = document.getElementById('bdm').value;
    var bdd = document.getElementById('bdd').value;
    var bdy = document.getElementById('bdy').value;
    let bdz = getDaysInMonth(bdm, bdy);
    
    var html;
    for(let i=1;i<=bdz;i++)
    {
        var html = html + "<option value="+i+">"+i+"</option>";
        //console.log(html);
    }
    mm.innerHTML = html;
}

var getDaysInMonth = function(month,year) {
   return new Date(year, month, 0).getDate();
}