export default  function cutnumber(text) {
      text = text.toString();
      return text.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }