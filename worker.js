var a = 1
onconnect = function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    switch (e.data) {
      case 'add': {
        a += 1
        port.postMessage(a)
        break
      }
      case 'get': {
        port.postMessage(a)
        break
      }
      default: {
        port.postMessage(a)
        break
      }
    }
  }
}
