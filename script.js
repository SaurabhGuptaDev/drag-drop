// Select the draggable element
const draggable = document.getElementById('draggable');

// Add event listeners for drag events
draggable.addEventListener('dragstart', dragStart);
draggable.addEventListener('dragend', dragEnd);

function dragStart(event) {
    // Change the opacity of the draggable element during the drag
    event.target.style.opacity = '0.5';

    // Store a reference to the dragged element
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragEnd(event) {
    // Reset the opacity of the draggable element
    event.target.style.opacity = '1';
}

// Select the droppable element
const droppable = document.getElementById('droppable');

// Add event listeners for drop events
droppable.addEventListener('dragover', dragOver);
droppable.addEventListener('drop', drop);

function dragOver(event) {
    // Prevent default behavior to allow dropping
    event.preventDefault();
}

function drop(event) {
    // Prevent default behavior
    event.preventDefault();

    // Get the id of the draggable element
    const id = event.dataTransfer.getData('text');

    // Append the draggable element to the droppable element
    const draggableElement = document.getElementById(id);
    droppable.appendChild(draggableElement);
}
