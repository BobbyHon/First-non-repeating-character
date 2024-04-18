function firstNonRepeatingLetter(s) {
    let filterArr = Array.from(new Set(s))
    
    for (let i = 0; i < filterArr.length; i++){
      const count = s.split('').filter((x) => x.toLowerCase() == filterArr[i].toLowerCase()).length
      
      if (count == 1)
        {
          return filterArr[i]
        }
    }
    return ''
  }