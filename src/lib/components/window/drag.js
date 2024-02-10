let node = null
let dragging = false

export function set_node(_node){
  node = _node
}

export function start() {
    dragging = true
}

export function stop() {
    dragging = false
}

export function moveComponent( event ) {
    if ( dragging ) {
        node.style.left += event.movementX;
        node.style.top += event.movementY;
    }
}