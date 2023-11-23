// script.js
function openBeneficiaryAdvices() {
    // Create the modal
    var modal = document.createElement('div');
    modal.id = 'modal';

    // Create the content
    var modalContent = document.createElement('div');
    modalContent.id = 'modal-content';
    
    // Add heading
    var heading = document.createElement('h2');
    heading.textContent = 'Beneficiary Advices for Pregnant Women';
    modalContent.appendChild(heading);

    // Add points
    var advicesList = document.createElement('ul');
    var advices = [
        "Stay hydrated",
        "Get regular check-ups",
        "Eat a balanced diet",
        "Exercise regularly",
        "Manage stress",
        "Get enough sleep",
        "Avoid smoking and alcohol",
        "Take prenatal vitamins",
        "Attend prenatal classes",
        "Reach out for support"
    ];
    advices.forEach(function (advice) {
        var listItem = document.createElement('li');
        listItem.textContent = advice;
        advicesList.appendChild(listItem);
    });

    modalContent.appendChild(advicesList);

    // Create the OK button
    var okButton = document.createElement('button');
    okButton.id = 'ok-button';
    okButton.textContent = 'OK';
    okButton.onclick = function () {
        modal.style.display = 'none';
    };

    // Append the content and button to the modal
    modal.appendChild(modalContent);
    modal.appendChild(okButton);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Display the modal
    modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    
    // Function to handle smooth scrolling
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    }
    // Event listener for the "About Us" menu click
    var aboutUsMenu = document.querySelector('a[href="#about-us-section"]');
    if (aboutUsMenu) {
        aboutUsMenu.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            scrollToSection('about-us-section');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    
    // Function to handle smooth scrolling
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    }
    // Event listener for the "Predict" menu click
    var predictMenu = document.querySelector('a[href="#prediction-section"]');
    if (predictMenu) {
        predictMenu.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            scrollToSection('predict-button');
        });
    }
});

function redirectToGitHub(githubProfileUrl) {
    window.location.href = githubProfileUrl;
}