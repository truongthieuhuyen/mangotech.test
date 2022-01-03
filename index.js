// Hover navbar
// document.addEventListener("DOM")


// Banner 
var index = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("banner__item");
    var dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {
        index = 1
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
    setTimeout(showSlides, 5000);
}

// Home category change slide
// document.getElementById("cate-").addEventListener("mousemove", function (event) {
//     pickSlide(event);
// });

// function pickSlide(e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     var coor = "Coordinates: (" + x + "," + y + ")";
//     document.getElementById("demo").innerHTML = coor;
// }


// Open chat bubble

function openChat() {
    var check = document.getElementById("openChat");
    if (check.style.display == "none") {
        check.style.display = "block";
    } else {
        check.style.display = "none";
    }
}

// Menu Bottom Expand 
const add = document.getElementById("add")
const ex = document.getElementById("expand")

function expand() {
    var addC = document.getElementById("addC");
    if (addC.innerHTML === "Mở rộng nội dung") {
        addC.innerHTML = "Thu gọn nội dung";
        ex.style.display = "flex";
        document.getElementById("footer").style.marginTop = "523px";
    } else {
        addC.innerHTML = "Mở rộng nội dung";
        ex.style.display = "none";
        document.getElementById("footer").style.marginTop = "0";
    }
}

$(document).ready(function () {
    $("a").on('click', function (event) {
        event.preventDefault();
    })
});

// Smooth scroll to top
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("#toTop").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});