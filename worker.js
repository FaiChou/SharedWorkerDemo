var a = 1
onconnect = function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    a += 1
    console.log(e)
    if (e.data === 'add') {
      port.postMessage(a)
    } else {
      setTimeout(() => {
        port.postMessage(a)
      }, 800);
    }
  }
}
