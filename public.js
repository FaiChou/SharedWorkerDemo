function refresh(a) {
  // page A: <p id="count"></p>
  if (count) {
    count.innerText = a || 1
  }
}
var myWorker = new SharedWorker("worker.js");
myWorker.port.onmessage = function(e) {
  refresh(e.data)
}

function add() {
  myWorker.port.postMessage('add');
}

function getVal() {
  myWorker.port.postMessage('get')
}
getVal()