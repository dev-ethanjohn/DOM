/*
    1. Go to wallhaven.cc/latest in your Browser
       and open up the dev tools

    2. How would you get an Array of ALL of the
       "src" attribute values for the wallpaper
       images on the page?

    HINT* NodeList is not an Array, but you can
          turn it in to one


*/

// NOTE
// (1) document.querySelectorAll("figure > img")
// - this returns NodeList[]

// (2) Array.from(document.querySelectorAll("figure > img")).map(e => e.src);
// - this return an array of src

// (3) const hello = Array.from(document.querySelectorAll("figure > img")).map(e => e.src);
// hello[10];
//? 'https://th.wallhaven.cc/small/gp/gp38kd.jpg'
