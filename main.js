document.addEventListener('DOMContentLoaded', function() {
  // create a table with 8 rows and 2 columns
  const postTable = document.getElementById("postTable");
  const rows = 8;
  const cols = 2;
  let images = [
    ["https://cdn.pixabay.com/photo/2016/11/10/11/08/iran-1814032_1280.jpg", "https://randomwordgenerator.com/img/picture-generator/55e6d0405754a809ea898279c02132761022dfe05a51774073267dd2_640.jpg", "https://randomwordgenerator.com/img/picture-generator/55e7d2464e57a814f1dc8460962e33791c3ad6e04e5074417c2d78d39545c6_640.jpg"],
    ["img4.jpg", "img5.jpg", "img6.jpg"],
    ["img7.jpg", "img8.jpg", "img9.jpg"],
    ["img10.jpg", "img11.jpg", "img12.jpg"],
    ["img13.jpg", "img14.jpg", "img15.jpg"],
    ["img16.jpg", "img17.jpg", "img18.jpg"],
    ["img19.jpg", "img20.jpg", "img21.jpg"],
    ["img22.jpg", "img23.jpg", "img24.jpg"]
  ];

  let index = 0;
  for(let i = 0; i < rows; i++) {
      let row = document.createElement("tr");

      for(let j = 0; j < cols; j++) {
          let cell = document.createElement("td");

          // 50% chance of having an image, Math.random() returns a number between 0 and 1
          const hasImage = Math.random() > 0.5;
          
          if (hasImage) {
              // create an image element 
              const img = document.createElement("img");

              // randomly select an image from the images array
              const startImg = Math.floor(Math.random() * 3) - 1;

              img.src = images[index][startImg];
              console.log(img.src);

              // add the image to the cell
              cell.appendChild(img);

              // create a button element
              const button = document.createElement("button");
              // set the button text(default is "stop")
              button.innerText = "Stop";

              // randomly select an interval time between 1 and 5 seconds
              let intervalTime = Math.floor(Math.random() * 4) + 1;

              let postImage = [...images[index]];

              // set the interval to change the image
              let interval = setInterval(function() {
                  let currentImage = postImage.shift();
                  postImage.push(currentImage);
                  img.src = currentImage;
              }, intervalTime * 1000);


              // add an event listener to the button, when the button is clicked, stop the interval, and change the button text to "start"
              button.addEventListener('click', function() {
                  if (button.innerText === "Stop") {
                      clearInterval(interval);
                      button.innerText = "Start";
                  } else {
                      intervalTime = Math.floor(Math.random() * 5) + 1;
                      interval = setInterval(function() {
                          let currentImage = postImage.shift();
                          postImage.push(currentImage);
                          img.src = currentImage;
                      }, intervalTime * 1000);
                      button.innerText = "Stop";
                  }
              });

              // add the button to the cell
              cell.appendChild(button);
          }

          // create a paragraph element and add it to the cell
          let text = document.createElement("p");
          text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum magna eget consequat maximus. Aliquam accumsan egestas lectus, id ultrices urna tristique eget. Fusce nec ante quam. In commodo maximus metus, non condimentum leo aliquam sed. Praesent id velit ac eros venenatis fringilla. Etiam vitae diam risus. Nulla maximus vestibulum est, vitae gravida ipsum eleifend et. Nunc ut vehicula odio, eget lobortis purus. Mauris ultricies, augue eget accumsan lobortis, massa sem dictum orci, at fermentum nunc quam non massa. Duis aliquet, diam eu eleifend sagittis, lectus augue auctor odio, eget ullamcorper ante tellus sit amet nisi. Nulla id felis vel eros facilisis lobortis a non nisl.";
          cell.appendChild(text);
          
          // add the cell to the row
          row.appendChild(cell);
          
          // increment the index, and if it is greater than the length of the images array, mod it by the length of the images array
          index = (index + 1) % images.length;
      }
      // add the row to the table
      postTable.appendChild(row);
  }
});
