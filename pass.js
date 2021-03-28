function disp()
{
var l_letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var s_chars = ['@', '!', '_', '.', '+', '*', '-', '?', '~', '$', '#']
function upper(a)
{
  var u_letters = [];
for(var i = 0; i < a.length; i++)
{
  var k = l_letters[i].toUpperCase();
  u_letters.push(k);
}

return u_letters;
}
//var l = prompt("Enter the length of the password.")
u_letters = upper(l_letters);
//alert(u_letters[25]);
var p = '';
var l = document.getElementById("change")
for(var i = 0; i < 32; i++)
{
  a = l_letters[Math.floor(Math.random()*l_letters.length)];
  c = numbers[Math.floor(Math.random()*numbers.length)];
  d = s_chars[Math.floor(Math.random()*s_chars.length)];
  u = u_letters[Math.floor(Math.random()*u_letters.length)];
  var all_chars = [a, c, d, u]
  p = p + all_chars[Math.floor(Math.random() * 4)] + all_chars[Math.floor(Math.random() * 4)] + all_chars[Math.floor(Math.random() * 4)] + all_chars[Math.floor(Math.random() * 4)];
  //  alert(all_chars)
  //p = p + Math.floor(Math.random()*all_chars.length) + Math.floor(Math.random()*all_chars.length) + Math.floor(Math.random()*all_chars.length) + Math.floor(Math.random()*all_chars.length);
}

//alert(p);
var k = document.getElementById("change")
//alert(parseInt(k.value) + 4)
k = parseInt(k.value)
//alert(p.slice(0, k))
document.getElementById("pass_gen").innerHTML = p.slice(0, k)
}

function Copy() {
  /* Get the text field */
  var copyText = document.getElementById("pass_gen");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}





// function show()
// {
//
// }
