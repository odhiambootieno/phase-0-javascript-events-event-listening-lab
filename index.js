
function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', () => {
        console.log('Button clicked!');
    });
}

// Call the function to bind the event listener
addingEventListener();