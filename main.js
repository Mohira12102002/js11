//1-misol

function convertToSlug(string) {
    return string.toLowerCase().replace(/\s+/g, '-');
  }
  
  const inputString = "Robin Singh from USA";
  const outputString = convertToSlug(inputString);
  console.log(outputString); // "robin-singh-from-usa"
  

  //2-Misol
  function capitalizeFirstLetter(string) {
    const words = string.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  }
  
  const inputString1 = "js string Mashqlari";
  const outputString1 = capitalizeFirstLetter(inputString1);
  console.log(outputString1); // "Js String Mashqlari"
  

//3-misol

  function swapCase(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char === char.toLowerCase()) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
    }
    return result;
  }
  
  // Misol uchun:
  const inputString2 = "AaBbc";
  const outputString2= swapCase(inputString2);
  console.log(outputString2); // "aAbBC"
  

  //4-misol

  function splitString(str, n) {
    const result = [];
    for (let i = 0; i < str.length; i += n) {
      result.push(str.substr(i, n));
    }
    return result;
  }
  
  // Misol uchun:
  const inputString3= "w3resource";
  const n = 2;
  const outputArray = splitString(inputString3, n);
  console.log(outputArray); // ["w3", "re", "so", "ur", "ce"]


//6-misol

  function removeHtmlTags(string) {
    return string.replace(/<[^>]+>/g, '');
  }
  
  // Misol uchun:
  const inputString4 = "<p><strong><em>Jonga tegdi </em></strong></p>";
  const outputString4 = removeHtmlTags(inputString4);
  console.log(outputString4); // "Jonga tegdi "
  
  
  
  