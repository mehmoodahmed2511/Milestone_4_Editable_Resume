

function AddExperience() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('my-2');
    newNode.classList.add('experienceField');
    newNode.setAttribute('placeholder', 'Enter here')
    newNode.setAttribute('rows', '2');

    let experienceButton = document.getElementById('experience-btn');
    let experienceForm = document.getElementById('experience-form');
    experienceForm?.insertBefore(newNode, experienceButton);
}

function AddEducation() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control');
    newNode.classList.add('educationField');
    newNode.setAttribute('rows', '2');
    newNode.setAttribute('placeholder', 'Enter here')
    newNode.classList.add('my-2');

    let educationButton = document.getElementById('education-btn');
    let educationForm = document.getElementById('education-form');
    educationForm?.insertBefore(newNode, educationButton);
}

function AddCertification() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control');
    newNode.classList.add('certificationField');
    newNode.setAttribute('placeholder', 'Enter here')
    newNode.setAttribute('rows', '2');
    newNode.classList.add('my-2');

    let certificationButton = document.getElementById('certification-btn');
    let certificationForm = document.getElementById('certification-form');
    certificationForm?.insertBefore(newNode, certificationButton);
}

function AddSkills() {
    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('skillsField');
    newNode.classList.add('my-2');
    newNode.setAttribute('placeholder', 'Enter here');

    let skillsForm = document.getElementById('skills-form');
    let skillsButton = document.getElementById('skills-btn');
    skillsForm?.insertBefore(newNode, skillsButton);
}


//Generat Resume
function GenerateResume() {
    document.getElementById('resume-form')?.style.display='none';
    document.getElementById('print-btn')?.style.display='block';
    // document.getElementById('nameFieldT2')?.style.display='block';
    document.getElementById('print-btn')?.style.marginLeft='600px';
    document.getElementById('print-btn')?.style.marginTop='50px';
    // document.getElementsByTagName('body')?.style.height='200%';
    document.getElementById('resume-template')?.style.display='block';
    //Personal Information
    //Name
    let nameField = document.getElementById('nameField').value;
    document.getElementById('nameFieldT1').innerHTML = nameField;
    document.getElementById('nameFieldT2').innerHTML = nameField;

    //Contact
    let contactField = document.getElementById('contactField').value;
    document.getElementById('contactFieldT').innerHTML = contactField;

    //Email
    let emailField = document.getElementById('emailField').value;
    document.getElementById('emailFieldT').innerHTML = emailField;

    //Address
    document.getElementById('addressFieldT').innerHTML = document.getElementById('addressField').value;

    //Linkedin
    document.getElementById('linkedinField').innerHTML = document.getElementById('linkedinField').value;


    //Professional Information
    //Objective
    document.getElementById('objectiveFieldT').innerHTML = document.getElementById('objectiveField').value;

    //Experience
    let experienceField = document.querySelectorAll('#experience-form textarea');
    let expList = "";
    for (let a of experienceField) {
        expList = expList + `<li> ${a.value}</li>`;
    }
    document.getElementById('experienceFieldT').innerHTML = expList;

    //Education
    let educationField = document.querySelectorAll('#education-form textarea');
    let eduList = "";
    for (let b of educationField) {
        eduList = eduList + `<li> ${b.value}</li>`;
    }
    document.getElementById('educationFieldT').innerHTML = eduList;


    //Certifications
    let certificationField = document.querySelectorAll('#certification-form textarea');
    let cerList = "";
    for (let c of certificationField) {
        cerList = cerList + `<li>${c.value}</li>`;
    }
    document.getElementById('certificationFieldT')?.innerHTML = cerList;

    //Skills
    let skillsField = document.querySelectorAll('#skills-form input');
    let skillsList = "";
    for (let d of skillsField) {
        skillsList = skillsList + `<li>${d.value}</li>`;
    }
    document.getElementById('skillsFieldT')?.innerHTML = skillsList;

    document.getElementById('resume-form').style.display = 'none';
};

// Hide Button

let isVisible = true;
function hideObj() {
    let hideBtn = document.getElementById('hide-obj');
    if (isVisible) {
        document.getElementById('objectiveFieldT').style.display = 'none';
        hideBtn?.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('objectiveFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}

function hideExp() {
    let hideBtn = document.getElementById('hide-exp');
    if (isVisible) {
        document.getElementById('experienceFieldT').style.display = 'none';
        hideBtn?.innerHTML = 'Show';
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
    let hideBtn = document.getElementById('hide-edu');
    if (isVisible) {
        document.getElementById('educationFieldT').style.display = 'none';
        hideBtn?.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('educationFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}

function hideCer() {
    let hideBtn = document.getElementById('hide-cer');
    if (isVisible) {
        document.getElementById('certificationFieldT').style.display = 'none';
        hideBtn?.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('certificationFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}

function hideSkills() {
    let hideBtn = document.getElementById('hide-skills');
    if (isVisible) {
        document.getElementById('skillsFieldT').style.display = 'none';
        hideBtn?.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('skillsFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}

///Image
let imageData = '';  // Variable to store image data
function readURL(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            imageData = e.target?.result;  // Store the image data (base64 string) in a variable

            // Display the image in the resume template
            document.getElementById('output-image').src = imageData;
        };
        reader.readAsDataURL(file);  // Convert the image file to base64 data URL
    }
}

// Print Button
function PrintResume() {
    document.getElementsByTagName('body').width='70%';
    document.getElementById('resume-form')?.style.display='none';
    document.getElementById('print-btn').style.display='none';
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
  


document.getElementById('EditResume')?.addEventListener('click',function(){
    document.getElementById('resume-form')?.style.display='block';
    document.getElementById('resume-template')?.style.display='none';
})