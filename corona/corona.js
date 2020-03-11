function corona(max, message) {
  document.body.style.overflow = 'hidden';
  document.body.style.margin = '0px';
  document.body.style.background = 'white';
  document.body.appendChild((function(){
    var msg = document.createElement('div');
    msg.style.position = 'absolute';
    msg.style.top = "0";
    msg.style.left = "0";
    msg.style.bottom = "0";
    msg.style.right = "0";
    msg.style.border = 'solid 1px';
    msg.style.width = '900px';
    msg.style.height = '150px';
    msg.style.fontSize = '72pt';
    msg.style.fontFamily = 'arial';
    msg.style.textAlign = 'center';
    msg.style.background = '#666666';
    msg.style.margin = '200px auto';
    msg.style.opacity = 0.8;
    msg.innerHTML = message;
    return msg;
  })());
  var image = 'corona/corona.png';
  var audio = document.createElement('audio');
  audio.setAttribute('loop', 'loop');
  audio.setAttribute('autoplay', 'autoplay');
  audio.innerHTML = '<source src="corona/corona.ogg" type="audio/ogg"/>';
  document.body.appendChild(audio);
  var loaded = 0;
  var arr = [];
  max = typeof max !== 'undefined' ? max : 80;
  var time = 0;
  var spawn = function() {
    var img = document.createElement('img');
    img.style.MozTransform = "";
    img.style.webkitTransform = "";
    var vx = 0;
    var vy = 0;
    while (vx == 0 && vy == 0) {
      vx = (Math.random() * 30 - 15) | 0;
      vy = (Math.random() * 30 - 15) | 0;
    }

    var obj = [img, (window.innerWidth * Math.random()) | 0, (window.innerHeight * Math.random()) | 0, 0, vx, vy, 0, 0, -1];
    img.src = image;
    obj[3] = ((Math.atan(obj[5] / obj[4]) * (57.3)) | 0);
    if (vx < 0 && vy >= 0) {
      obj[3] *= -1;
      img.style.MozTransform += "scaleX(-1)";
      img.style.webkitTransform += "scaleX(-1)";
    } else if (vx < 0 && vy <= 0) {
      obj[3] *= -1;
      img.style.MozTransform += "scaleX(-1)";
      img.style.webkitTransform += "scaleX(-1)";
    }
    arr.push(obj);
    img.style.position = 'absolute';
    img.style.left = (obj[1]) + 'px';
    img.style.top = (obj[2]) + 'px';

    img.style.MozTransform += "rotate(" + obj[3] + "deg)";
    img.style.webkitTransform += "rotate(" + obj[3] + "deg)";
    img.addEventListener('click', (
      function(obj) {
        return function() {
          for (var j = 0; j < 5; ++j) {
            var img = document.createElement('img');
            var o = [img, obj[1] + obj[0].width / 2, obj[2] + obj[0].height / 2, 0, obj[4], obj[5], 0, 0, 8];

            img.src = 'data:image/gif;base64,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GVXq1JJVr+asalUrR65dvdrkKpYl2LAfUyI9W/Nmz7MjzQIVCjduy6RD66JlmDWv3rF96erdO7Du0sF2Hf49jNhq46eNlUYmfDJyx8mUK1vG7BYyZ85eP2MWK3oy6dKIy6IeXBbAasOtX8Nt7Vo22dC22V7Nvfgob9Z+f/feKvwx0+KWaSIfDXP5Z6rOn2ONLvou9dJfr79Oqx319O6voDWDNw59/PDy5m+3TR+YOPu5wd8njp8et3nV42mDj73/dHf8/WlVn4ADTsUegeRVZ2ByBIXHWGoKMUjfbIqdtxZwOoH1IGwVaTihehtF9aGIJhU1YlPNdXacbutdCCJt2XkII3cvzqiRjDbGiGKOINXIo0Xt/XjjjkLqCF+RIeKFpJFqLcnkfE4CeWSUgEFJZYcqXollk1oC1mWSmX2JkpViSkRmmSKhqeaabJYVEAAh+QQJAQD/ACwAAAAAZABlAAcI/AD/CRxIsKDBgwgTKlzIsKHDhxAjSpxIsWJDfhYzatxYECPHjyAj8vMYsqRJgyNJnlwZMiXLlyBTqoRJc6LMmjht3szJ8+LOnkAPynQZtOhAlz+NAh1KVOlSpiOdPoUqtSfUplVpXo2aVetWrl1ZfgUb9uRYsmVbnp2ZluNatm01voUbt+Lcum7n0sULUe9evg79/s072KzgklSn6t04tqhgtIHvBn1cWCBlo5ThZk5qNbPlzUyVgh491Cnp01JPj66qerPo1qAVw47tdTZssbZzV+6ruzdknb6D70YpvDjnh8aTZ0wenDDz2zGfq14pnTbu6n5xYpecc3vjyaPeQ78O/1v29qzky3pPiz1u9brP+TLHG7+tdPf32edX/57//q7nhRUggAOm5to/q7HmGUEHGvgYQgua9qBCE0qYXWTcYXYhb2s5+JZdHWqYIUUhgvfhR1+JeJZJWzlWIovimZfYSzHytKJ2WHWX4lMyHgcYiC3+6FyNQi53VZEozoikXEQuaVGTTgJZXpQSlUYlYzleCaSWeXHplpdghikmlQEBACH+71RoaXMgR0lGIGZpbGUgd2FzIGFzc2VtYmxlZCB3aXRoIEdJRiBDb25zdHJ1Y3Rpb24gU2V0IGZyb206DQoNCkFsY2hlbXkgTWluZHdvcmtzIEluYy4NClAuTy4gQm94IDUwMA0KQmVldG9uLCBPbnRhcmlvDQpMMEcgMUEwDQpDQU5BREEuDQoNClRoaXMgY29tbWVudCBibG9jayB3aWxsIG5vdCBhcHBlYXIgaW4gZmlsZXMgY3JlYXRlZCB3aXRoIGEgcmVnaXN0ZXJlZCB2ZXJzaW9uIG9mIEdJRiBDb25zdHJ1Y3Rpb24gU2V0ACH/C0dJRkNPTm5iMS4wAgUADgwAAgAFAAAAAAAAAAAADFNUQVJXSDIuZ2lmAA4MAAIABwAAAAAAAAAAAAxTVEFSQkwzLmdpZgAODAACAAkAAAAAAAAAAAAMU1RBUlJFNC5naWYADgwAAgALAAAAAAAAAAAADFNUQVJXSDUuZ2lmAA4MAAIADQAAAAAAAAAAAAxTVEFSQkw2LmdpZgAAOw==';
            img.style.position = 'absolute';
            img.style.left = (obj[1]) + 'px';
            img.style.top = (obj[2]) + 'px';
            arr.push(o);
            document.body.appendChild(img);
          }
          obj[7] = 1;
          spawn();
          spawn();
        };
      })(obj), true);
    document.body.appendChild(img);
  };
  var img = document.createElement('img');
  img.addEventListener('load', function() {
    ++loaded;
  }, true);
  img.src = image;
  var intv = setInterval(
    function() {
      for (var i = 0; i < max; ++i) {
        spawn();
      }
      if (arr.length < max) return;
      clearInterval(intv);
      setInterval(
        function() {
          for (var i = 0; i < arr.length; ++i) {
            if (arr[i][8] > 0) {
              --arr[i][8];
            }
            if (arr[i][7] || arr[i][8] == 0) {
              arr[i][0].parentNode.removeChild(arr[i][0]);
              arr.splice(i, 1);
              --i;
              continue;
            }
            arr[i][1] += arr[i][4];
            arr[i][2] += arr[i][5];
            arr[i][0].style.left = (arr[i][1]) + 'px';
            arr[i][0].style.top = (arr[i][2]) + 'px';
            if (arr[i][1] > window.innerWidth) {
              arr[i][1] = 0;
            } else if (arr[i][1] < 0) {
              arr[i][1] = window.innerWidth;
            }
            if (arr[i][2] > window.innerHeight) {
              arr[i][2] = 0;
            } else if (arr[i][2] < 0) {
              arr[i][2] = window.innerHeight;
            }
          }
        }, 20);
    }, 50);
}
corona(20, "CORONAVIRUS!");
