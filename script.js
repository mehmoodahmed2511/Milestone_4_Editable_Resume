var _a;
function AddExperience() {
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('my-2');
    newNode.classList.add('experienceField');
    newNode.setAttribute('placeholder', 'Enter here');
    newNode.setAttribute('rows', '2');
    var experienceButton = document.getElementById('experience-btn');
    var experienceForm = document.getElementById('experience-form');
    experienceForm === null || experienceForm === void 0 ? void 0 : experienceForm.insertBefore(newNode, experienceButton);
}
function AddEducation() {
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('educationField');
    newNode.setAttribute('rows', '2');
    newNode.setAttribute('placeholder', 'Enter here');
    newNode.classList.add('my-2');
    var educationButton = document.getElementById('education-btn');
    var educationForm = document.getElementById('education-form');
    educationForm === null || educationForm === void 0 ? void 0 : educationForm.insertBefore(newNode, educationButton);
}
function AddCertification() {
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('certificationField');
    newNode.setAttribute('placeholder', 'Enter here');
    newNode.setAttribute('rows', '2');
    newNode.classList.add('my-2');
    var certificationButton = document.getElementById('certification-btn');
    var certificationForm = document.getElementById('certification-form');
    certificationForm === null || certificationForm === void 0 ? void 0 : certificationForm.insertBefore(newNode, certificationButton);
}
function AddSkills() {
    var newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('skillsField');
    newNode.classList.add('my-2');
    newNode.setAttribute('placeholder', 'Enter here');
    var skillsForm = document.getElementById('skills-form');
    var skillsButton = document.getElementById('skills-btn');
    skillsForm === null || skillsForm === void 0 ? void 0 : skillsForm.insertBefore(newNode, skillsButton);
}
//Generat Resume
function GenerateResume() {
    var _a, _b, _c, _d, _e, _f, _g;
    (_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.style.display = 'none';
    (_b = document.getElementById('print-btn')) === null || _b === void 0 ? void 0 : _b.style.display = 'block';
    // document.getElementById('nameFieldT2')?.style.display='block';
    (_c = document.getElementById('print-btn')) === null || _c === void 0 ? void 0 : _c.style.marginLeft = '600px';
    (_d = document.getElementById('print-btn')) === null || _d === void 0 ? void 0 : _d.style.marginTop = '50px';
    // document.getElementsByTagName('body')?.style.height='200%';
    (_e = document.getElementById('resume-template')) === null || _e === void 0 ? void 0 : _e.style.display = 'block';
    //Personal Information
    //Name
    var nameField = document.getElementById('nameField').value;
    document.getElementById('nameFieldT1').innerHTML = nameField;
    document.getElementById('nameFieldT2').innerHTML = nameField;
    //Contact
    var contactField = document.getElementById('contactField').value;
    document.getElementById('contactFieldT').innerHTML = contactField;
    //Email
    var emailField = document.getElementById('emailField').value;
    document.getElementById('emailFieldT').innerHTML = emailField;
    //Address
    document.getElementById('addressFieldT').innerHTML = document.getElementById('addressField').value;
    //Linkedin
    document.getElementById('linkedinField').innerHTML = document.getElementById('linkedinField').value;
    //Professional Information
    //Objective
    document.getElementById('objectiveFieldT').innerHTML = document.getElementById('objectiveField').value;
    //Experience
    var experienceField = document.querySelectorAll('#experience-form textarea');
    var expList = "";
    for (var _i = 0, experienceField_1 = experienceField; _i < experienceField_1.length; _i++) {
        var a = experienceField_1[_i];
        expList = expList + "<li> ".concat(a.value, "</li>");
    }
    document.getElementById('experienceFieldT').innerHTML = expList;
    //Education
    var educationField = document.querySelectorAll('#education-form textarea');
    var eduList = "";
    for (var _h = 0, educationField_1 = educationField; _h < educationField_1.length; _h++) {
        var b = educationField_1[_h];
        eduList = eduList + "<li> ".concat(b.value, "</li>");
    }
    document.getElementById('educationFieldT').innerHTML = eduList;
    //Certifications
    var certificationField = document.querySelectorAll('#certification-form textarea');
    var cerList = "";
    for (var _j = 0, certificationField_1 = certificationField; _j < certificationField_1.length; _j++) {
        var c = certificationField_1[_j];
        cerList = cerList + "<li>".concat(c.value, "</li>");
    }
    (_f = document.getElementById('certificationFieldT')) === null || _f === void 0 ? void 0 : _f.innerHTML = cerList;
    //Skills
    var skillsField = document.querySelectorAll('#skills-form input');
    var skillsList = "";
    for (var _k = 0, skillsField_1 = skillsField; _k < skillsField_1.length; _k++) {
        var d = skillsField_1[_k];
        skillsList = skillsList + "<li>".concat(d.value, "</li>");
    }
    (_g = document.getElementById('skillsFieldT')) === null || _g === void 0 ? void 0 : _g.innerHTML = skillsList;
    document.getElementById('resume-form').style.display = 'none';
}
;
// Hide Button
var isVisible = true;
function hideObj() {
    var hideBtn = document.getElementById('hide-obj');
    if (isVisible) {
        document.getElementById('objectiveFieldT').style.display = 'none';
        hideBtn === null || hideBtn === void 0 ? void 0 : hideBtn.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('objectiveFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}
function hideExp() {
    var hideBtn = document.getElementById('hide-exp');
    if (isVisible) {
        document.getElementById('experienceFieldT').style.display = 'none';
        hideBtn === null || hideBtn === void 0 ? void 0 : hideBtn.innerHTML = 'Show';
        // document.querySelectorAll('#resume-template .card').style.backgroundColor = 'white';
        isVisible = false;
    }
    else {
        document.getElementById('experienceFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}
function hideEdu() {
    var hideBtn = document.getElementById('hide-edu');
    if (isVisible) {
        document.getElementById('educationFieldT').style.display = 'none';
        hideBtn === null || hideBtn === void 0 ? void 0 : hideBtn.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('educationFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}
function hideCer() {
    var hideBtn = document.getElementById('hide-cer');
    if (isVisible) {
        document.getElementById('certificationFieldT').style.display = 'none';
        hideBtn === null || hideBtn === void 0 ? void 0 : hideBtn.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('certificationFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}
function hideSkills() {
    var hideBtn = document.getElementById('hide-skills');
    if (isVisible) {
        document.getElementById('skillsFieldT').style.display = 'none';
        hideBtn === null || hideBtn === void 0 ? void 0 : hideBtn.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('skillsFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}
///Image
var imageData = ''; // Variable to store image data
function readURL(input) {
    if (input.files && input.files[0]) {
        var file = input.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            imageData = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // Store the image data (base64 string) in a variable
            // Display the image in the resume template
            document.getElementById('output-image').src = imageData;
        };
        reader.readAsDataURL(file); // Convert the image file to base64 data URL
    }
}
// Print Button
function PrintResume() {
    var _a;
    document.getElementsByTagName('body').width = '70%';
    (_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.style.display = 'none';
    document.getElementById('print-btn').style.display = 'none';
    window.print();
}
// function PrintResume() {
//     document.getElementById('resume-form')?.style.display='none';
//     document.getElementById('print-btn')?.style.display='none';
//     
//     document.getElementsByTagName('body')?.style.display='flex';
//
//     window.print();
// }
// // Editable Resume Functionalities
// document.getElementById('EditResume').addEventListener('click', function() {
//     // Get all input fields in the form
//     const forminputs = document.querySelectorAll('#resume-form input');
//     // Enable editing by removing the 'disabled' attribute
//     formFields.forEach(function(field) {
//       field.removeAttribute('disabled');
//     });
//     // Hide the "Edit" button and show the "Save" button
//     document.getElementById('editButton').style.display = 'none';
//     document.getElementById('saveButton').style.display = 'inline';
//   });
//   document.getElementById('saveButton').addEventListener('click', function() {
//     // Get all input fields in the form
//     const formFields = document.querySelectorAll('#resumeForm input');
//     // Save the updated values (you can save them locally or send them to a server)
//     const updatedResume = {};
//     formFields.forEach(function(field) {
//       const fieldId = field.getAttribute('id');
//       updatedResume[fieldId] = field.value;
//       // Disable the fields again after editing
//       field.setAttribute('disabled', true);
//     });
//     console.log(updatedResume); // Do something with the updated resume (save to server, localStorage, etc.)
//     // Show the "Edit" button and hide the "Save" button
//     document.getElementById('editButton').style.display = 'inline';
//     document.getElementById('saveButton').style.display = 'none';
//   });
(_a = document.getElementById('EditResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a, _b;
    (_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.style.display = 'block';
    (_b = document.getElementById('resume-template')) === null || _b === void 0 ? void 0 : _b.style.display = 'none';
});
