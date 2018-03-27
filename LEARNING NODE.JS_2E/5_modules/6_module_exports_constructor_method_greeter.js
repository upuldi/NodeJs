function Greeter(lang) {
  this.lang = lang;

  this.greetPerson = function() {
    switch (lang) {
      case 'en': console.log("Hello"); break;
      case 'fr': console.log("Hola"); break;
      case 'it': console.log("Chaio"); break;
      default : console.log("No Idea...");
    }
  }

}

/**
 * This style of exporting is called constructor method
 * In this way you MUST use module.exports
 */
module.exports = Greeter;
