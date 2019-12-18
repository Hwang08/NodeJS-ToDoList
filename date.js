// My own module for generating the date


exports.getDate = function () { // getDate Carries out the code inside and returns the result day

  const today = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  return today.toLocaleDateString('en-US', options);
}

exports.getDay = function () {

  const today = new Date();

  const options = {
    weekday: 'long'
  };

  return today.toLocaleDateString('en-US', options);
}

