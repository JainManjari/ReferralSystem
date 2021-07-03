var textarea = document.querySelectorAll('form textarea');

for(let i=0;i<textarea.length;i++)
{
    textarea[i].addEventListener('keydown', autosize);
}
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}