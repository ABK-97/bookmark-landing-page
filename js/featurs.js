let bookmark = document.getElementById("Simple-bookmarking");
let sShare = document.getElementById("Speedy-searching");
let eShare = document.getElementById("Easy-Sharing");
let sec2 = document.getElementById("sec-2-f");
let i = 0;
let arrayOfObject = [
    { 
        header: "Bookmark in one click",
        para: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favourite sites.`,
        img: "./images/illustration-features-tab-1.svg"
    },
    {
        header: "Intelligent search",
        para: `  Our powerful search feature will help you find saved sites in no time at all. 
        No need to trawl through all of your bookmarks.`,
        img: `./images/illustration-features-tab-2.svg`
    },
    {
        header: "Share your bookmarks",
        para: `  Easily share your bookmarks and collections with others. Create a shareable 
        link that you can send at the click of a button.`,
        img: "./images/illustration-features-tab-3.svg"
    }
]
toPage(i);

bookmark.addEventListener("click",function(){
    removeActive();
    bookmark.classList.add("active");
    i = 0;
    toPage(i);
})
sShare.addEventListener("click",function(){
    removeActive();
    sShare.classList.add("active");
    i = 1;
    toPage(i);
})
eShare.addEventListener("click",function(){
    removeActive();
    eShare.classList.add("active");
    i = 2;
    toPage(i);
})


function removeActive(){
    bookmark.classList.remove("active");
    sShare.classList.remove("active");
    eShare.classList.remove("active");
}

function toPage(i){
    sec2.innerHTML = `
    <div class="cont-1">
        <img src="./images/illustration-features-tab-${i+1}.svg" alt="img" id="featurs-img">
      </div>
    <div class="cont-2">
        <h2>${arrayOfObject[i].header}</h2>
        <p>${arrayOfObject[i].para}</p>
    </div>
    `
}