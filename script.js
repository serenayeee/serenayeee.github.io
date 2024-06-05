function toggleStylistInfo(stylistId) {
    var stylistInfo = document.getElementById('stylist-info-' + stylistId);
    var clickMeButton = document.getElementsByClassName('click-me')[stylistId - 1];

    if (stylistInfo.style.display === 'none' || stylistInfo.style.display === '') {
        stylistInfo.style.display = 'block';
        clickMeButton.innerHTML = 'Close';
    } else {
        stylistInfo.style.display = 'none';
        clickMeButton.innerHTML = 'Click Me';
    }
}

$(document).ready(function() {
    $('.toggle-prices').click(function() {
        var prices = $(this).siblings('.service-prices');
        prices.toggle();
        $(this).text(prices.is(':visible') ? 'Close' : 'Prices');
    });
});

function toggleContactTooltip(button) {
    var tooltip = button.nextElementSibling;
    tooltip.classList.toggle("show");

    var section2 = document.querySelector('.section:nth-child(2)');
    var section3 = document.querySelector('.section:nth-child(3)');
    var topPosition = (section2.offsetTop + section3.offsetTop) / 2;
    tooltip.style.top = topPosition + 'px';
}

function validateForm() {
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (fullname === '' || email === '' || phone === '') {
        alert('Please fill in all fields.');
        return false; 
    }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false; 
    }

    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return false; 
    }

    return true; 
}

document.addEventListener('DOMContentLoaded', function() {
    var transitionLinks = document.querySelectorAll('.transition-link');
    transitionLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetPageId = this.getAttribute('href').substring(1);
            var targetPage = document.getElementById(targetPageId);

            var pages = document.querySelectorAll('.page');
            pages.forEach(function(page) {
                if (page !== targetPage) {
                    page.classList.remove('active');
                }
            });

            setTimeout(function() {
                targetPage.classList.add('active');
            }, 50);
        });
    });
});

function loadContent(url, target) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                target.innerHTML = xhr.responseText;
            } else {
                console.error("Error loading content from " + url + ". Status: " + xhr.status);
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
document.addEventListener('DOMContentLoaded', function() {
    var transitionLinks = document.querySelectorAll('.transition-link');
    transitionLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            var targetPageId = this.getAttribute('href').substring(1);
            var targetPage = document.getElementById(targetPageId);

            var pages = document.querySelectorAll('.page');
            pages.forEach(function(page) {
                if (page !== targetPage) {
                    page.classList.remove('active');
                }
            });

            setTimeout(function() {
                targetPage.classList.add('active');
                loadContent(targetPageId + '.html', targetPage); 
            }, 50);
        });
    });
});

