var images = ["https://images-na.ssl-images-amazon.com/images/I/515BniafrYL._SX479_BO1,204,203,200_.jpg",
 "https://previews.123rf.com/images/chaliya/chaliya1803/chaliya180300008/97572964-happy-father-s-day-man-open-shirt-to-show-super-dad-cartoon-vector-illustration-.jpg", 
 "https://cdn1.vectorstock.com/i/1000x1000/66/90/super-mom-cartoon-clipart-vector-19326690.jpg", 
 "https://image.shutterstock.com/z/stock-vector-super-son-the-best-superhero-boy-cartoon-character-isolated-vector-illustration-713612272.jpg"];
var i = 0;

function nextslide() {

    document.getElementById("image1").src = images[i];
    i++;
    if (i == 4) {
        i = 0;
    }

}