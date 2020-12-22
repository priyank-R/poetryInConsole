 const letterByLetter = async (line) => {
    var chunkedLine = "";
    line.split("").forEach((word, index) => {
        let newLineChunk = ""
        if(word === "\n"){
            console.log('word is !-!')
             newLineChunk = (chunkedLine += "\n")
        }else{
          newLineChunk = (chunkedLine += word);
        }
      
      setTimeout(() => {
        console.clear();
        console.log(newLineChunk);
      }, 100 * index);
    });
  };

  // letterByLetter('This method types a line letter by letter')

  module.exports = letterByLetter