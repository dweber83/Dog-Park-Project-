document.getElementById('checkin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const dogName = document.getElementById('dog-name').value;
    const breed = document.getElementById('breed').value;
    const arrivalTime = document.getElementById('arrival-time').value;

    const dogListItem = document.createElement('li');
    dogListItem.textContent = `${dogName} (${breed}) - Arrived at ${new Date(arrivalTime).toLocaleString()}`;

    document.getElementById('dog-list').appendChild(dogListItem);

    // Clear the form
    event.target.reset();
});