let images = ["1.jpg", "2.jpg", "3.jpg","4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg",
"10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
"21.jpg"];

//rendering the album
function loadAlbum() {     
  for (i = 0; i<images.length; i++) {   
    document.getElementById('imagecontent').innerHTML += `
    <img class="fotoalbum" src="./img/${images[i]}" alt="bild${i}" onclick="openAlbum(${i})")>
    `;
  }
}

//open an image on screen
function openAlbum(j) {             
  document.getElementById('header').style.display = "none";
  document.body.style.overflow = "hidden";                        //hidding scroll bar
  let blocker = document.getElementById('imageblockcontainer');
  blocker.style.display = "flex";                                 //making imageblockcontainer visible
  renderOpenFoto(j);                                              //displaying all items
}

//opened photo and icon
function renderOpenFoto(j) {
  document.getElementById('imageblockcontainer').innerHTML = `
  <div id="iconcontainer">
    <img src="./img/close.png" alt="logo" class="icon x" onclick="closeImage()">
    <img src="./img/leftArrow.png" alt="logo" class="icon" onclick="leftArrow(${j})">
  </div>

  <img src="./img/${images[j]}" alt="logo" class="openedPhoto" onclick="closeImage()">

  <div id="hiddentoolbar">
    <img src="./img/leftArrow.png" alt="logo" class="icon" onclick="leftArrow(${j})">
    <img src="./img/close.png" alt="logo" class="icon x" onclick="closeImage()">
    <img src="./img/rightArrow.png" alt="logo" class="icon" onclick="rightArrow(${j})">
  </div>

  <img src="./img/rightArrow.png" alt="logo" class="icon arrow" onclick="rightArrow(${j})">
  `;
}

function closeImage() {
  document.getElementById('header').style.display = "flex";
  let blocker = document.getElementById('imageblockcontainer');  
  blocker.style.display = "none";                                  //closing blocker container (blur effect)
  document.body.style.overflow = "unset";                          //reactivating scrollbar
}

function rightArrow(j) {
  if (j == 19) {                                                  //check if last image ---> then first image
    j = 0;
    openAlbum(j);
  } else {
    j++;                                                          //going to next image
    openAlbum(j);
  }
}

function leftArrow(j) {
  if (j == 0) {                                                 //check if first image ---> then last image
    j = 19;
    openAlbum(j);
  } else {
    j--;                                                        //going to previous image
    openAlbum(j);
  }
}