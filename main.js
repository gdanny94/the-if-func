// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truthy, func1 should be called, otherwise call the func2.



function _if(bool, func1, func2) {
    return bool ? func1() : func2()
    
  }
  
  // In this function:
  
  // If bool is truthy, func1() will be executed.
  // If bool is falsy, func2() will be executed.