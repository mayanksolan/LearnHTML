let fs = require("fs");

fs.mkdir("stuff", function() {
  console.log("directory created");
  fs.readFile("readme.txt", "utf8", function(err, data) {
    console.log(data);
    fs.writeFile("./stuff/writeme.txt", data, err => {
      if (err) throw err;
      console.log("New file created adn data written");
    });
  });
});
