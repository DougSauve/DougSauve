  "use strict"

//make a block factory :)
function makeBlock(id_number, top, left, height, width, backgroundColor = "#fef") {
  let block = document.createElement("Block" + id_number);
  block.setAttribute("id", "Block" + id_number);
  block.style = "position: absolute;" +
                "display: none;" +
                "z-index: 4;" +
                "border-radius: 4px;" +
                "top: " + top + "px;" +
                "left: " + left + "px;" +
                "height: " + height + "px;" +
                "width: " + width + "px;" +
                "background-color: " + backgroundColor + ";";
  document.getElementById("Game-Container").appendChild(block);
}
//makeBlock - id_number, top, left, height, width; makeBlock is a string, others are integers.

//level 2
makeBlock ("2_1", 200, 247, 270, 5, "red");

//level 3
makeBlock ("3_1", 200, 210, 70, 10, "blue");
makeBlock ("3_2", 100, 90, 260, 30, "blue");
makeBlock ("3_3", 350, 400, 100, 5, "blue");
makeBlock ("3_4", 30, 450, 200, 5, "blue");

//level 4
makeBlock ("4_1", 300, 200, 40, 10, "green");
makeBlock ("4_2", 100, 200, 30, 240, "green");
makeBlock ("4_3", 50, 200, 200, 5, "green");
makeBlock ("4_4", 300, 250, 30, 190, "green");

//level 5
makeBlock ("5_1", 50, 50, 150, 30, "FF8133");
makeBlock ("5_2", 50, 300, 30, 150, "FF8133");
makeBlock ("5_3", 300, 420, 150, 30, "FF8133");
makeBlock ("5_4", 420, 50, 30, 150, "FF8133");
makeBlock ("5_5", 235, 235, 30, 30, "FF8133");

//level 6
makeBlock ("6_1", 50, 55, 400, 5, "pink");
makeBlock ("6_2", 50, 300, 400, 5, "pink");
makeBlock ("6_3", 250, 370, 30, 80, "pink");
makeBlock ("6_4", 50, 460, 400, 5, "pink");
makeBlock ("6_5", 235, 235, 30, 30, "pink");

//level 7
makeBlock ("7_1", 50, 40, 30, 30, "yellow");
makeBlock ("7_2", 50, 240, 30, 30, "yellow");
makeBlock ("7_3", 50, 440, 30, 30, "yellow");
makeBlock ("7_4", 100, 140, 30, 30, "yellow");
makeBlock ("7_5", 100, 340, 30, 30, "yellow");
makeBlock ("7_6", 150, 40, 30, 30, "yellow");
makeBlock ("7_7", 150, 240, 30, 30, "yellow");
makeBlock ("7_8", 150, 440, 30, 30, "yellow");
makeBlock ("7_9", 200, 140, 30, 30, "yellow");
makeBlock ("7_10", 200, 340, 30, 30, "yellow");
makeBlock ("7_11", 250, 40, 30, 30, "yellow");
makeBlock ("7_12", 250, 240, 30, 30, "yellow");
makeBlock ("7_13", 250, 440, 30, 30, "yellow");

//level 8
makeBlock ("8_1", 50, 40, 30, 50, "purple");
makeBlock ("8_2", 50, 240, 30, 50, "purple");
makeBlock ("8_3", 50, 440, 30, 50, "purple");
makeBlock ("8_4", 100, 140, 30, 50, "purple");
makeBlock ("8_5", 100, 340, 30, 50, "purple");
makeBlock ("8_6", 150, 40, 30, 50, "purple");
makeBlock ("8_7", 150, 240, 30, 50, "purple");
makeBlock ("8_8", 150, 440, 30, 50, "purple");
makeBlock ("8_9", 200, 140, 30, 50, "purple");
makeBlock ("8_10", 200, 340, 30, 50, "purple");
makeBlock ("8_11", 250, 40, 30, 50, "purple");
makeBlock ("8_12", 250, 240, 30, 50, "purple");
makeBlock ("8_13", 250, 440, 30, 50, "purple");
makeBlock ("8_14", 300, 140, 30, 50, "purple");
makeBlock ("8_15", 300, 340, 30, 50, "purple");
makeBlock ("8_16", 350, 40, 30, 50, "purple");
makeBlock ("8_17", 350, 240, 30, 50, "purple");
makeBlock ("8_18", 350, 440, 30, 50, "purple");
makeBlock ("8_19", 400, 140, 30, 50, "purple");
makeBlock ("8_20", 400, 340, 30, 50, "purple");
