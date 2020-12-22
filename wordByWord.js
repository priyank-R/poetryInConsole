const wordByword = async (line) => {
    var chunkedLine = "";
    line.split(" ").forEach((word, index) => {
        let newLineChunk = ""
        if(word === "\n"){
            console.log('word is !-!')
             newLineChunk = (chunkedLine += "\n")
        }else{
          newLineChunk = (chunkedLine += " " + word);
        }
      
      setTimeout(() => {
        console.clear();
        console.log(newLineChunk);
      }, 500 * index);
    });
  };


  // wordByWord('This method types a line word by word !')

  module.exports = wordByword
