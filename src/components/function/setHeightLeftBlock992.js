export default function setHeightLeftBlock(object) {

  if (object.props.windowWidth >= 992) {
    var height = document.getElementById('leftPart').clientHeight;
    console.log(height);
    document.getElementById('rightPart').style.height = (height )+'px';
  }else{
    document.getElementById('rightPart').style.height = 'auto';
  }
  
  object.sticky.update();
}