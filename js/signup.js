$(document).ready(function(){
    $("#main").paroller();
    $(".maintext , .pulseup").scrolla({
        mobile:true
    });
    $(".scrollspy").scrollSpy(); 
});


var firstname = document.getElementById("first_name");
var lastname = document.getElementById("last_name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var school = document.getElementById("current_school");
var grade = document.getElementById("school_grade");
var address = document.getElementById("school_address");
var city = document.getElementById("school_city");
var state = document.getElementById("school_state");
var zip = document.getElementById("school_zip");


var database;


function setup(){
    var config = {
        apiKey: "AIzaSyAO-4uspDVYbb6xE75MLzLdKsfwFhR9DrE",
        authDomain: "csbyall-interest-form.firebaseapp.com",
        databaseURL: "https://csbyall-interest-form.firebaseio.com",
        projectId: "csbyall-interest-form",
        storageBucket: "",
        messagingSenderId: "1081393027496"
    };
    firebase.initializeApp(config);
    var submitButton = document.getElementById("submit");
    submitButton.mouseClicked(submitform);
    
    database = firebase.database();
    
    
        var data = {
            firstname:firstname.value(),
            lastname:lastname.value(),
            email:email.value(),
            phone:phone.value(),
            school:school.value(),
            grade:grade.value(),
            address:address.value(),
            city:city.value(),
            state:state.value(),
            zin:zip.value(),
        }
        var ref = database.ref("Submitions");
        ref.push(data);
    
    
    
    
}