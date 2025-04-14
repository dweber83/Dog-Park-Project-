
document.addEventListener("DOMContentLoaded", () => {
  const parkSelect = document.getElementById("park");
  const form = document.getElementById("checkin-form");
  const statusDiv = document.getElementById("status");

  // Dummy park list
  const parks = [
    { name: "Rover Run Park", lat: 0, lng: 0 },
    { name: "Paws Playground", lat: 0, lng: 0 }
  ];

  // Populate park dropdown
  parks.forEach(park => {
    const option = document.createElement("option");
    option.value = park.name;
    option.textContent = park.name;
    parkSelect.appendChild(option);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const now = new Date().toLocaleTimeString();
    const dogName = document.getElementById("dogName").value;
    const breed = document.getElementById("breed").value;
    const park = parkSelect.value;
    statusDiv.textContent = `${dogName} the ${breed} checked in to ${park} at ${now}.`;
  });
});
