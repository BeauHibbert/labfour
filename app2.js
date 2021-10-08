let likesFootball = prompt('Do you enjoy watching football?');
console.log('likesFootball: ', likesFootball);

if (likesFootball == 'Yes'){
  document.write('<h2>You are in the right place then ' + likesFootball + '!</h2>');
} else {
  document.write('<h2>Get outta here ' + likesFootball + '!</h2>');
}