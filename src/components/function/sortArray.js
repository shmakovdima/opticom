export default function sortArray(property) {
    var sortOrder = 1;
    if(property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
    }

    if (property=='date')
      {
        return function (a,b) {
            var result = (Date.parse(a[property]) < Date.parse(b[property])) ? 1 : (Date.parse(a[property]) > Date.parse(b[property])) ? 0 : -1;
            return result * sortOrder;
        }
      }
    else
    {
      return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
    }


}