import request from 'superagent';
// functions used in multiple components
// delay
export const delay = (() => {
  var timer = 0;
  return (callback, ms) => {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

export const formattingItemArr = (item_arr, elem) => {
  const formatted = item_arr.find(item => {
    return item[0] === elem;
  })
  if (formatted) {
    return formatted[1];
  }
  return undefined;
}

export const dateFromTime = (time) => {
  const date = new Date(time);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return day + "/" + month + "/" + year + " " + hour + ":" + minute;
}

export const formattingMoney = (money) => {
  var str = money.toString();
  var arr = str.split('');
  var temp = [];
  var count = -1;
  for (var i = arr.length - 1; i >= 0; i--) {
    count++;
    if (count === 3) {
      temp.push(',');
      count = 0;
    }
    temp.push(arr[i]);
  }
  return (temp.reverse().join(''));
}

export const MoneyToNumber = (money) => {
  var arr = [];
  for (var i = 0; i < money.length; i++) {
    if (money[i] !== ",") {
      arr.push(money[i]);
    }
  }
  if (isNaN(Number(arr.join('')))) {
    return 0;
  }

  return Number(arr.join(''));
}
export const guid = () => Math.floor((Math.random() * 1000000) + 1) + Date.now()

export const codeGenerator = (maxNumber, oldCode) => {
  var currentNumber = Number(oldCode.slice(-2));
  if (currentNumber === maxNumber) {
    return -1;
  }
  try {
    var newNumber = currentNumber + 1;
    if (newNumber < 10) {
      newNumber = "0" + newNumber;
    }
    var d = new Date();
    var year = d.getFullYear().toString().substr(2, 2);
    var month = d.getMonth() + 1;
    var day = d.getDate();
    if (day < 10) {
      day = "0" + day.toString();
    }
    if (month < 10) {
      month = "0" + month.toString();
    }
    var str = year + month + day;
    if (oldCode.indexOf(str) == 0) {
      str = str + newNumber;
    }
    else {
      str = str + "01";
    }
    return str;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export const getProvinces = (context) => {
  request
    .get('/api/location/provinces')
    .end((error, res) => {
      var data = [];
      res.body.results.forEach(function (item) {
        var obj = {};
        obj.label = item.type + " " + item.name;
        obj.value = item.province_id;
        data.push(obj);
      }, context);
      context.setState({ provinceOptions: data, isLoadingProvince: false });
    })
}

export const getDistricts = (province_id, context) => {
  request
    .get(`/api/location/districts/${province_id}`)
    .end((err, res) => {
      var data = [];
      res.body.results.forEach(function (item) {
        var obj = {};
        obj.label = item.type + " " + item.name;
        obj.value = item.district_id;
        data.push(obj);
      }, context);
      context.setState({ districtOptions: data, isLoadingDistrict: false });
    })
}
