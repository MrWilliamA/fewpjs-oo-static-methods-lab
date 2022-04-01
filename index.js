class Formatter {
  //add static methods here

      static capitalize(string) {
        const firstLetter = string.charAt(0).toUpperCase();
        const remaining = string.slice(1);
        return firstLetter + remaining;
      }

      static sanitize(string) {
        let cleaned = string.replace(/[^\w,'-\s]/g, '')                    
        return cleaned;
      }

      static titleize(string) {
        const toArray = string.split(" ");
        let exludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
       
        let capitalise = toArray.map( word => {
          let n = exludeWords.includes(word);
          
           if(!n){      
            return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
           } else {
             return word;
           }
        }).join(' ');

        return capitalise.charAt(0).toUpperCase() + capitalise.slice(1);
       
      }

}