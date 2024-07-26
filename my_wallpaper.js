//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(20, 32, 56);//Navy Blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  strokeCap(SQUARE)

  stroke(255);//blue rect 1
  strokeWeight(2);
  line(40, 41, 40, 81);//(x, y, x, y)

  stroke(255);//blue rect 1
  strokeWeight(2);
  line(39, 81, 48, 80);//(x, y, x, y)
  
  fill(19, 28, 87);//blue rect 1
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

  fill(117, 18, 12);//red rect 1
  stroke(0);
  strokeWeight(0);
  rect(53, 47, 8 ,50);//(x, y, w, h)

  fill(255);//red cube 1
  stroke(255);
  strokeWeight(0);
  rect(64, 106, 11 ,8);//(x, y, w, h)

  fill(117, 18, 12);//red cube 1
  stroke(255);
  strokeWeight(0);
  rect(65, 105, 11 ,8);//(x, y, w, h)

  fill(240, 203, 86);//yellow rect 1
  stroke(0);
  strokeWeight(0);
  rect(95, 35, 10 ,50);

  stroke(255);//yellow rect 1
  strokeWeight(1);
  line(98, 46, 98, 83);

  fill(240, 203, 86);//yellow cube 1
  stroke(0);
  strokeWeight(0);
  rect(96, 100, 10 ,10);

  stroke(255);//yellow cube 1
  strokeWeight(2);
  line(96, 105, 96, 110);

  fill(240, 203, 86);//yellow cube 2
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

  fill(240, 203, 86);//yellow cube 3
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
  
  fill(19, 28, 87);//blue cube 1
  stroke(0);
  strokeWeight(0);
  rect(30, 215, 45, 45);//(x, y, w, h)

  strokeCap(ROUND)

  fill(117, 18, 12);//red rect 1
  stroke(0);
  strokeWeight(0);
  rect(10, 260, 8 ,40);//(x, y, w, h)

  stroke(255);//red rect 1
  strokeWeight(1);
  line(12, 262, 12, 298);//(x, y, x, y)

  stroke(255);//red rect 1
  strokeWeight(3);
  line(60, 66, 61, 46);//(x, y, x, y)

  strokeCap(ROUND)

  stroke(255);//red rect 1
  strokeWeight(2);
  line(53, 97, 60, 97);//(x, y, x, y)

  fill(117, 18, 12);//red rect 1
  stroke(0);
  strokeWeight(0);
  rect(53, 47, 8 , 50);//(x, y, w, h)

  fill(255);//red cube 1
  stroke(255);
  strokeWeight(0);
  rect(115, 100, 30, 30);//(x, y, w, h)

  fill(117, 18, 12);//red cube 1
  stroke(255);
  strokeWeight(0);
  rect(116, 99, 30, 30);//(x, y, w, h)

  fill(240, 203, 86);//yellow rect 1
  stroke(0);
  strokeWeight(0);
  rect(160, 35, 40, 6);

  stroke(255);//yellow rect 1
  strokeWeight(1);
  line(161, 36, 180, 36);

  stroke(255);//yellow rect 1
  strokeWeight(1);
  line(160, 41, 200, 41);

}
