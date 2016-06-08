$(document).ready(function()
{
  $("form#prime-sifter").submit(function(event)
{

    var number = $("input#number").val();
    var numberList = [];
    var prime = 2;
    var removeIndex = [];

//creating my numbet list//
    for (index = 2; index < number; index ++)
    {
      numberList.push(index);
    }

    for (index = prime; index < number; index++)
    {
      for (multiple = 2; multiple < index; multiple++)
      {
        for (i = 0; i < numberList.Length; i++)
        {
          if (numberList[i] == index * multiple)
          {
            removeIndex.push(i);
          }
        }
      }
    }
})
});



/*var eratosthenes = function(n) {
  // Eratosthenes algorithm to find all primes under n
  var array = [], upperLimit = Math.sqrt(n), output = [];

  // Make an array from 2 to (n - 1)
  for (var i = 0; i < n; i++) {
      array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= upperLimit; i++) {
      if (array[i]) {
          for (var j = i * i; j < n; j += i) {
              array[j] = false;
          }
      }
  }

  // All array[i] set to true are primes
  for (var i = 2; i < n; i++) {
      if(array[i]) {
          output.push(i);
      }
  }

  return output;
};*/
