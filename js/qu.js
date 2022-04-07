let q1 = document.querySelector(".q-1");
let q2 = document.querySelector(".q-2");
let q3 = document.querySelector(".q-3");
let q4 = document.querySelector(".q-4");
let ar1 = document.getElementById("ar-1");
let ar2 = document.getElementById("ar-2");
let ar3 = document.getElementById("ar-3");
let ar4 = document.getElementById("ar-4");
indecator1 = 0 ;
indecator2 = 0 ;
indecator3 = 0 ;
indecator4 = 0 ;
arrayOfAnswer = [
    // index 0
    `  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
    justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
    // index 1
    `  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
    Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
    ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
    Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
    // index 2
    `  Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
    urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
    sollicitudin ex et ultricies bibendum.`,
    // index 3
    `  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
    vitae neque eget nisl gravida pellentesque non ut velit.`
]
ar1.onclick = toPageQ;
ar2.onclick = toPageQ;
ar3.onclick = toPageQ;
ar4.onclick = toPageQ;


function toPageQ(){
    if(this.getAttribute("data-index") == 0){
        if(indecator1 == 0){
            ar1.classList.add("active");
            q1.innerHTML = arrayOfAnswer[0];
            indecator1 = 1;
        }else {
            q1.innerHTML = "";
            indecator1 = 0;
            ar1.classList.remove("active");
        }
    }
    if(this.getAttribute("data-index") == 1){
        if(indecator2 == 0){
            ar2.classList.add("active");
            q2.innerHTML = arrayOfAnswer[1];
            indecator2 = 1;
        }else {
            q2.innerHTML = "";
            indecator2 = 0;
            ar2.classList.remove("active");
        }
    }
    if(this.getAttribute("data-index") == 2){
        if(indecator3 == 0){
            ar3.classList.add("active");
            q3.innerHTML = arrayOfAnswer[2];
            indecator3 = 1;
        }else {
            q3.innerHTML = "";
            indecator3 = 0;
            ar3.classList.remove("active");
        }
    }
    if(this.getAttribute("data-index") == 3){
        if(indecator4 == 0){
            ar4.classList.add("active");
            q4.innerHTML = arrayOfAnswer[3];
            indecator4 = 1;
        }else {
            q4.innerHTML = "";
            indecator4 = 0;
            ar4.classList.remove("active");
        }
    }

    
}