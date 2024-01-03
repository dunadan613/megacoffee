function fnAddActive(el){
  el.classList.add('active');
}
function fnRemoveActive(el){
  el.classList.remove('active');
}
function fnDisplay(el,opt){
  el.style.display=opt;
}
function fnAutoHeight(widthValue){
  return widthValue*0.5645;
}