//your parameter variables go here!
let white = 255;
let r1 = 117;
let r2 = 18;
let r3 = 12;
let y1 = 240;
let y2 = 203;
let y3 = 86;
let b1 = 19;
let b2 = 28;
let b3 = 87;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);//GLIDE_WALLPAPER, GRID_WALLPAPER, DEVELOP_GLYPH
  pWallpaper.resolution(FIT_TO_SCREEN);//A4, A3, FIT_TO_SCREEN, NINE_PORTRAIT, NINE_LANDSCAPE
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 220;
  pWallpaper.grid_settings.cell_height = 310;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(20, 32, 56);//Navy Blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  strokeCap(SQUARE)

  stroke(white);//blue rect 1
  strokeWeight(2);
  line(40, 41, 40, 81);//(x, y, x, y)

  stroke(white);//blue rect 1
  strokeWeight(2);
  line(39, 81, 48, 80);//(x, y, x, y)
  
  fill(b1, b2, b3);//blue rect 1
  stroke(0);
  strokeWeight(0);
  rect(40, 40, 8 ,40);//(x, y, w, h)

  stroke(255);//red rect 1
  strokeWeight(3);
  line(60, 66, 61, 46);//(x, y, x, y)

  strokeCap(ROUND)

  stroke(255);//red rect 1
  strokeWeight(2);
  line(53, 97, 60, 97);//(x, y, x, y)

  fill(r1, r2, r3);//red rect 1
  stroke(0);
  strokeWeight(0);
  rect(53, 47, 8 ,50);//(x, y, w, h)

  fill(255);//red cube 1
  stroke(255);
  strokeWeight(0);
  rect(64, 106, 11 ,8);//(x, y, w, h)

  fill(r1, r2, r3);//red cube 1
  stroke(255);
  strokeWeight(0);
  rect(65, 105, 11 ,8);//(x, y, w, h)

  fill(y1, y2, y3);//yellow rect 1
  stroke(0);
  strokeWeight(0);
  rect(95, 35, 10 ,50);

  stroke(255);//yellow rect 1
  strokeWeight(1);
  line(98, 46, 98, 83);

  fill(y1, y2, y3);//yellow cube 1
  stroke(0);
  strokeWeight(0);
  rect(96, 100, 10 ,10);

  stroke(255);//yellow cube 1
  strokeWeight(2);
  line(96, 105, 96, 110);

  fill(y1, y2, y3);//yellow cube 2
  stroke(0);
  strokeWeight(0);
  rect(86, 120, 10 ,10);

  stroke(255);//yellow cube 2
  strokeWeight(2);
  line(86, 121, 86, 130);

  strokeCap(SQUARE)

  stroke(255);//yellow cube 2
  strokeWeight(2);
  line(86, 130, 96, 130);

  stroke(255);//yellow cube 3
  strokeWeight(2);
  line(10, 150, 50, 150);

  stroke(255);//yellow cube 3
  strokeWeight(2);
  line(10, 150, 10, 190);

  strokeCap(ROUND)

  stroke(255);//yellow cube 3
  strokeWeight(3);
  line(45, 195, 55, 195);

  fill(y1, y2, y3);//yellow cube 3
  stroke(0);
  strokeWeight(0);
  rect(10, 150, 45 ,45);

  stroke(255);//blue cube 1
  strokeWeight(2);
  line(30, 215, 30, 250);//(x, y, x, y)

  strokeCap(SQUARE)

  stroke(255);//blue cube 1
  strokeWeight(2);
  line(30, 215, 75, 215);//(x, y, x, y)

  stroke(255);//blue cube 1
  strokeWeight(2);
  line(75, 220, 75, 260);//(x, y, x, y)
  
  fill(b1, b2, b3);//blue cube 1
  stroke(0);
  strokeWeight(0);
  rect(30, 215, 45, 45);//(x, y, w, h)

  strokeCap(ROUND)

  fill(r1, r2, r3);//red rect 2
  stroke(0);
  strokeWeight(0);
  rect(10, 260, 8 ,40);//(x, y, w, h)

  stroke(255);//red rect 2
  strokeWeight(1);
  line(12, 262, 12, 298);//(x, y, x, y)

  stroke(255);//red rect 2
  strokeWeight(2);
  line(53, 97, 60, 97);//(x, y, x, y)

  fill(white);//red cube 2
  stroke(255);
  strokeWeight(0);
  rect(115, 100, 30, 30);//(x, y, w, h)

  fill(r1, r2, r3);//red cube 2
  stroke(255);
  strokeWeight(0);
  rect(116, 99, 30, 30);//(x, y, w, h)

  fill(y1, y2, y3);//yellow rect 2
  stroke(0);
  strokeWeight(0);
  rect(160, 35, 40, 6);

  stroke(255);//yellow rect 2
  strokeWeight(1);
  line(161, 36, 180, 36);

  stroke(255);//yellow rect 2
  strokeWeight(1);
  line(160, 41, 200, 41);

  strokeCap(SQUARE)

  stroke(255);//yellow cube 4
  strokeWeight(2);
  line(155, 69, 164, 69);

  fill(y1, y2, y3);//yellow cube 4
  stroke(0);
  strokeWeight(0);
  rect(155, 60, 9 ,9);//(x, y, w, h)

  stroke(255);//yellow cube 4
  strokeWeight(2);
  line(163, 69, 163, 66);

  strokeCap(ROUND)

  fill(r1, r2, r3);//red rect 3
  stroke(0);
  strokeWeight(0);
  rect(160, 90, 37, 10);//(x, y, w, h)

  stroke(255);//red rect 3
  strokeWeight(1);
  line(160, 95, 200, 96);//(x, y, x, y)

  strokeCap(ROUND)

  stroke(255);//yellow cube 5
  strokeWeight(2);
  line(151, 134, 155, 134);//(x, y, x, y)

  fill(y1, y2, y3);//yellow cube 5
  stroke(0);
  strokeWeight(0);
  rect(146, 134, 9, 8);//(x, y, w, h)

  strokeCap(SQUARE)

  stroke(255);//yellow cube 5
  strokeWeight(1);
  line(146, 141, 155, 141);//(x, y, x, y)

  fill(white);//yellow cube 6
  stroke(0);
  strokeWeight(0);
  rect(127, 143, 11, 8);//(x, y, w, h)

  fill(y1, y2, y3);//yellow cube 6
  stroke(0);
  strokeWeight(0);
  rect(128, 143, 9, 7);//(x, y, w, h)

  fill(white);//yellow rect 3
  stroke(0);
  strokeWeight(0);
  rect(155, 168, 46, 8);

  fill(y1, y2, y3);//yellow rect 3
  stroke(0);
  strokeWeight(0);
  rect(155, 168, 45, 7);

  strokeCap(ROUND)
  
  fill(y1, y2, y3);//yellow rect 4
  stroke(0);
  strokeWeight(0);
  rect(140, 181, 45, 7);

  stroke(255);//yellow cube 5
  strokeWeight(2);
  line(141, 184, 185, 184);//(x, y, x, y)
  
  strokeCap(SQUARE)

  stroke(255);//yellow cube 5
  strokeWeight(1);
  line(151, 204, 195, 204);//(x, y, x, y)

  stroke(255);//yellow cube 5
  strokeWeight(1);
  line(151, 210, 195, 210);//(x, y, x, y)

  fill(white);//red cube 3
  stroke(255);
  strokeWeight(0);
  rect(116, 214, 13, 13);//(x, y, w, h)

  fill(r1, r2, r3);//red cube 3
  stroke(255);
  strokeWeight(0);
  rect(117, 215, 11, 11);//(x, y, w, h)

  strokeCap(ROUND)

  stroke(255);//red cube 4
  strokeWeight(2);
  line(131, 243, 142, 243);//(x, y, x, y)

  fill(r1, r2, r3);//red cube 4
  stroke(255);
  strokeWeight(0);
  rect(130, 231, 11, 12);//(x, y, w, h)

  strokeCap(SQUARE)

  stroke(255);//red cube 4
  strokeWeight(1);
  line(134, 231, 142, 231);//(x, y, x, y)

  fill(y1, y2, y3);//yellow rect 5
  stroke(0);
  strokeWeight(0);
  rect(75, 263, 8, 50);
  
  stroke(255);//yellow rect 5
  strokeWeight(1);
  line(77, 263, 82, 263);//(x, y, x, y)

  stroke(255);//yellow rect 5
  strokeWeight(1);
  line(77, 263, 77, 279);//(x, y, x, y)

  stroke(255);//yellow rect 5
  strokeWeight(1);
  line(82, 286, 82, 314);//(x, y, x, y)

  strokeCap(ROUND)

  stroke(255);//yellow rect 6
  strokeWeight(2);
  line(88, 264, 88, 315);//(x, y, x, y)

  fill(y1, y2, y3);//yellow rect 6
  stroke(0);
  strokeWeight(0);
  rect(88, 263, 8, 50);

  strokeCap(SQUARE)

  stroke(255);//yellow rect 6
  strokeWeight(1);
  line(94, 265, 94, 289);//(x, y, x, y)

  fill(r1, r2, r3);//red rect 4
  stroke(0);
  strokeWeight(0);
  rect(150, 263, 42, 13);//(x, y, w, h)

  fill(white);//yellow rect 7
  stroke(0);
  strokeWeight(0);
  rect(119, 294, 8, 13);//(x, y, w, h)

  fill(y1, y2, y3);//yellow rect 7
  stroke(0);
  strokeWeight(0);
  rect(120, 293, 38, 13);//(x, y, w, h)




}
