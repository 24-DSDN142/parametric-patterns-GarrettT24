//your parameter variables go here!
//OG
let brush = 255;
let r1 = 117;
let r2 = 18;
let r3 = 12;
let y1 = 240;
let y2 = 203;
let y3 = 86;
let b1 = 19;
let b2 = 28;
let b3 = 87;

//greyscale
// let brush = 0;
// let r1 = 47;
// let r2 = 47;
// let r3 = 47;
// let y1 = 201;
// let y2 = 201;
// let y3 = 201;
// let b1 = 32;
// let b2 = 32;
// let b3 = 32;

//primaries
// let brush = 255;
// let r1 = 255;
// let r2 = 0;
// let r3 = 0;
// let y1 = 255;
// let y2 = 225;
// let y3 = 0;
// let b1 = 0;
// let b2 = 0;
// let b3 = 255;

//Colour swaps
// let brush = 255;
// let r1 = 20;
// let r2 = 32;
// let r3 = 56;
// let y1 = 240;
// let y2 = 203;
// let y3 = 86;
// let b1 = 19;
// let b2 = 28;
// let b3 = 87;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);//GLIDE_WALLPAPER, GRID_WALLPAPER, DEVELOP_GLYPH
  pWallpaper.resolution(NINE_LANDSCAPE);//A4, NINE_PORTRAIT, A3, FIT_TO_SCREEN, , NINE_LANDSCAPE
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 230;
  pWallpaper.grid_settings.cell_height = 320;
  pWallpaper.grid_settings.row_offset  = 160;
}

function wallpaper_background() {
  //background(0,0,255);blue
  background(20, 32, 56);//Navy Blue
  //background(19, 28, 87);//my blue
  //background(240, 203, 86);//my yellow
  //background(117, 18, 12);//my red
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  strokeCap(SQUARE)

  stroke(brush);//blue rect 1
  strokeWeight(2);
  line(40, 41, 40, 81);//(x, y, x, y)

  stroke(brush);//blue rect 1
  strokeWeight(2);
  line(39, 81, 48, 80);//(x, y, x, y)
  
  if(x = 2){fill(b1, b2, b3);//blue rect 14
  let x = 2}
  stroke(brush);
  strokeWeight(0);
  rect(40, 40, 8 ,40);//(x, y, w, h)

  stroke(brush);//red rect 1
  strokeWeight(3);
  line(60, 66, 61, 46);//(x, y, x, y)

  strokeCap(ROUND)

  stroke(brush);//red rect 1
  strokeWeight(2);
  line(53, 97, 60, 97);//(x, y, x, y)

  fill(r1, r2, r3);//red rect 1
  stroke(brush);
  strokeWeight(0);
  rect(53, 47, 8 ,50);//(x, y, w, h)

  fill(brush);//red cube 1
  stroke(brush);
  strokeWeight(0);
  rect(64, 106, 11 ,8);//(x, y, w, h)

  fill(r1, r2, r3);//red cube 1
  stroke(brush);
  strokeWeight(0);
  rect(65, 105, 11 ,8);//(x, y, w, h)

  fill(y1, y2, y3);//yellow rect 1
  stroke(brush);
  strokeWeight(0);
  rect(95, 35, 10 ,50);

  stroke(brush);//yellow rect 1
  strokeWeight(1);
  line(98, 46, 98, 83);

  fill(y1, y2, y3);//yellow cube 1
  stroke(brush);
  strokeWeight(0);
  rect(96, 100, 10 ,10);

  stroke(brush);//yellow cube 1
  strokeWeight(2);
  line(96, 105, 96, 110);

  fill(y1, y2, y3);//yellow cube 2
  stroke(brush);
  strokeWeight(0);
  rect(86, 120, 10 ,10);

  stroke(brush);//yellow cube 2
  strokeWeight(2);
  line(86, 121, 86, 130);

  strokeCap(SQUARE)

  stroke(brush);//yellow cube 2
  strokeWeight(2);
  line(86, 130, 96, 130);

  stroke(brush);//yellow cube 3
  strokeWeight(2);
  line(10, 150, 50, 150);

  stroke(brush);//yellow cube 3
  strokeWeight(2);
  line(10, 150, 10, 190);

  strokeCap(ROUND)

  stroke(brush);//yellow cube 3
  strokeWeight(3);
  line(45, 195, 55, 195);

  fill(y1, y2, y3);//yellow cube 3
  stroke(brush);
  strokeWeight(0);
  rect(10, 150, 45 ,45);

  stroke(brush);//blue cube 1
  strokeWeight(2);
  line(30, 215, 30, 250);//(x, y, x, y)

  strokeCap(SQUARE)

  stroke(brush);//blue cube 1
  strokeWeight(2);
  line(30, 215, 75, 215);//(x, y, x, y)

  stroke(brush);//blue cube 1
  strokeWeight(2);
  line(75, 220, 75, 260);//(x, y, x, y)
  
  fill(b1, b2, b3);//blue cube 1
  stroke(brush);
  strokeWeight(0);
  rect(30, 215, 45, 45);//(x, y, w, h)

  strokeCap(ROUND)

  fill(r1, r2, r3);//red rect 2
  stroke(brush);
  strokeWeight(0);
  rect(10, 260, 8 ,40);//(x, y, w, h)

  stroke(brush);//red rect 2
  strokeWeight(1);
  line(12, 262, 12, 298);//(x, y, x, y)

  stroke(brush);//red rect 2
  strokeWeight(2);
  line(53, 97, 60, 97);//(x, y, x, y)

  fill(brush);//red cube 2
  stroke(brush);
  strokeWeight(0);
  rect(115, 100, 30, 30);//(x, y, w, h)

  fill(r1, r2, r3);//red cube 2
  stroke(brush);
  strokeWeight(0);
  rect(116, 99, 30, 30);//(x, y, w, h)

  fill(y1, y2, y3);//yellow rect 2
  stroke(brush);
  strokeWeight(0);
  rect(160, 35, 40, 6);

  stroke(brush);//yellow rect 2
  strokeWeight(1);
  line(161, 36, 180, 36);

  stroke(brush);//yellow rect 2
  strokeWeight(1);
  line(160, 41, 200, 41);

  strokeCap(SQUARE)

  stroke(brush);//yellow cube 4
  strokeWeight(2);
  line(155, 69, 164, 69);

  fill(y1, y2, y3);//yellow cube 4
  stroke(brush);
  strokeWeight(0);
  rect(155, 60, 9 ,9);//(x, y, w, h)

  stroke(brush);//yellow cube 4
  strokeWeight(2);
  line(163, 69, 163, 66);

  strokeCap(ROUND)

  fill(r1, r2, r3);//red rect 3
  stroke(brush);
  strokeWeight(0);
  rect(160, 90, 37, 10);//(x, y, w, h)

  stroke(brush);//red rect 3
  strokeWeight(1);
  line(160, 95, 200, 96);//(x, y, x, y)

  strokeCap(ROUND)

  stroke(brush);//yellow cube 5
  strokeWeight(2);
  line(151, 134, 155, 134);//(x, y, x, y)

  fill(y1, y2, y3);//yellow cube 5
  stroke(brush);
  strokeWeight(0);
  rect(146, 134, 9, 8);//(x, y, w, h)

  strokeCap(SQUARE)

  stroke(brush);//yellow cube 5
  strokeWeight(1);
  line(146, 141, 155, 141);//(x, y, x, y)

  fill(brush);//yellow cube 6
  stroke(brush);
  strokeWeight(0);
  rect(127, 143, 11, 8);//(x, y, w, h)

  fill(y1, y2, y3);//yellow cube 6
  stroke(brush);
  strokeWeight(0);
  rect(128, 143, 9, 7);//(x, y, w, h)

  fill(brush);//yellow rect 3
  stroke(brush);
  strokeWeight(0);
  rect(155, 168, 46, 8);

  fill(y1, y2, y3);//yellow rect 3
  stroke(brush);
  strokeWeight(0);
  rect(155, 168, 45, 7);

  strokeCap(ROUND)
  
  fill(y1, y2, y3);//yellow rect 4
  stroke(brush);
  strokeWeight(0);
  rect(140, 181, 45, 7);

  stroke(brush);//yellow cube 5
  strokeWeight(2);
  line(141, 184, 185, 184);//(x, y, x, y)
  
  strokeCap(SQUARE)

  stroke(brush);//yellow cube 5
  strokeWeight(1);
  line(151, 204, 195, 204);//(x, y, x, y)

  stroke(brush);//yellow cube 5
  strokeWeight(1);
  line(151, 210, 195, 210);//(x, y, x, y)

  fill(brush);//red cube 3
  stroke(brush);
  strokeWeight(0);
  rect(116, 214, 13, 13);//(x, y, w, h)

  fill(r1, r2, r3);//red cube 3
  stroke(brush);
  strokeWeight(0);
  rect(117, 215, 11, 11);//(x, y, w, h)

  strokeCap(ROUND)

  stroke(brush);//red cube 4
  strokeWeight(2);
  line(131, 243, 142, 243);//(x, y, x, y)

  fill(r1, r2, r3);//red cube 4
  stroke(brush);
  strokeWeight(0);
  rect(130, 231, 11, 12);//(x, y, w, h)

  strokeCap(SQUARE)

  stroke(brush);//red cube 4
  strokeWeight(1);
  line(134, 231, 142, 231);//(x, y, x, y)

  fill(y1, y2, y3);//yellow rect 5
  stroke(brush);
  strokeWeight(0);
  rect(75, 263, 8, 50);
  
  stroke(brush);//yellow rect 5
  strokeWeight(1);
  line(77, 263, 82, 263);//(x, y, x, y)

  stroke(brush);//yellow rect 5
  strokeWeight(1);
  line(77, 263, 77, 279);//(x, y, x, y)

  stroke(brush);//yellow rect 5
  strokeWeight(1);
  line(82, 286, 82, 314);//(x, y, x, y)

  strokeCap(ROUND)

  stroke(brush);//yellow rect 6
  strokeWeight(2);
  line(88, 264, 88, 315);//(x, y, x, y)

  fill(y1, y2, y3);//yellow rect 6
  stroke(brush);
  strokeWeight(0);
  rect(88, 263, 8, 50);

  strokeCap(SQUARE)

  stroke(brush);//yellow rect 6
  strokeWeight(1);
  line(94, 265, 94, 289);//(x, y, x, y)

  fill(r1, r2, r3);//red rect 4
  stroke(brush);
  strokeWeight(0);
  rect(150, 263, 42, 13);//(x, y, w, h)

  fill(brush);//yellow rect 7
  stroke(brush);
  strokeWeight(0);
  rect(119, 294, 8, 13);//(x, y, w, h)

  fill(y1, y2, y3);//yellow rect 7
  stroke(brush);
  strokeWeight(0);
  rect(120, 293, 38, 13);//(x, y, w, h)




}
