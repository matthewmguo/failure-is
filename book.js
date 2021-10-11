//flip book animations
// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");
const paper10 = document.querySelector("#p10");
const paper11 = document.querySelector("#p11");
const paper12 = document.querySelector("#p12");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 11;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                document.getElementById('section-title').innerHTML = "1. Understanding personal definitions of success & failure"
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                document.getElementById('section-title').innerHTML = "1. Understanding personal definitions of success & failure"
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                document.getElementById('section-title').innerHTML = "2. Interrogating and reframing definitions of success & failure"
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                document.getElementById('section-title').innerHTML = "2. Interrogating and reframing definitions of success & failure"
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                document.getElementById('section-title').innerHTML = "3. Understanding personal motivators and goals"
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                document.getElementById('section-title').innerHTML = "3. Understanding personal motivators and goals"

                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                document.getElementById('section-title').innerHTML = "3. Understanding personal motivators and goals"

                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                document.getElementById('section-title').innerHTML = "3. Understanding personal motivators and goals"
                break;
            case 9:
                paper9.classList.add("flipped");
                paper9.style.zIndex = 9;
                document.getElementById('section-title').innerHTML = "3. Understanding personal motivators and goals"
                break;
            case 10:
                paper10.classList.add("flipped");
                paper10.style.zIndex = 10;
                document.getElementById('section-title').innerHTML = "4. Applying newfound learnings with confidence"
                break;
            case 11:
                paper11.classList.add("flipped");
                paper11.style.zIndex = 11;
                document.getElementById('section-title').innerHTML = "4. Applying newfound learnings with confidence"
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 11;
                document.getElementById('section-title').innerHTML = "1. Understanding personal definitions of success & failure"
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 10;
                document.getElementById('section-title').innerHTML = "1. Understanding personal definitions of success & failure"
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 9;
                document.getElementById('section-title').innerHTML = "2. Interrogating and reframing definitions of success & failure"
                break;
            case 5:
                openBook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 8;
                document.getElementById('section-title').innerHTML = "2. Interrogating and reframing definitions of success & failure"
                break;
            case 6:
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 7;
                document.getElementById('section-title').innerHTML = "3. Understanding personal motivators and goals"
                break;
            case 7:
                openBook();
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 6;
                document.getElementById('section-title').innerHTML = "3. Understanding personal motivators and goals"
                break;
            case 8:
                openBook();
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 5;
                document.getElementById('section-title').innerHTML = "3. Understanding personal motivators and goals"
                break; 
            case 9:
                openBook();
                paper8.classList.remove("flipped");
                paper8.style.zIndex = 4;
                document.getElementById('section-title').innerHTML = "3. Understanding personal motivators and goals"
                break;  
            case 10:
                openBook();
                paper9.classList.remove("flipped");
                paper9.style.zIndex = 3;
                document.getElementById('section-title').innerHTML = "3. Understanding personal motivators and goals"
                break;  
            case 11:
                openBook();
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 2;
                document.getElementById('section-title').innerHTML = "4. Applying newfound learnings with confidence"
                break;  
            case 12:
                openBook();
                paper11.classList.remove("flipped");
                paper11.style.zIndex = 1;
                document.getElementById('section-title').innerHTML = "4. Applying newfound learnings with confidence"
                break;  
            // case 13:
            //     openBook();
            //     paper12.classList.remove("flipped");
            //     paper12.style.zIndex = 1;
            //     break;  
            default:
                throw new Error("unkown state");
        }
        currentLocation--;
    }

}

function openNav() {
    document.getElementById("myModal").style.display = "block";
  }
  
function closeNav() {
    document.getElementById("myModal").style.display = "none";
  }
  