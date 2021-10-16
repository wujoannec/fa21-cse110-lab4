function myCallback()
{
  let d = new Date();
  let time = d.toLocaleDateString();
  console.log(time);
}

var intervalID = setInterval(myCallback, 1000);
