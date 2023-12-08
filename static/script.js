var classifyButton = document.getElementById('classify');
classifyButton.addEventListener('click',function() {
    handleFileUpload();
})

function handleFileUpload() {
    // Get the current value of the input
    var inputElement = document.getElementById('image-input');
    var uploadedImageElement = document.getElementById('uploaded-image');
    var formData = new FormData();
    formData.append('file', inputElement.files[0]);

    // Use fetch to send a POST request to the server
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => handleServerResponse(data))
    .catch(error => console.error('Error', error));

    var file = inputElement.files[0];
    displayImage(file, uploadedImageElement);
    uploadedImageElement.style.display = 'block'; 
}


// Function to handle the server response
function handleServerResponse(response) {
    // Update your frontend with the response data
    var resultElement = document.getElementById('result');
    resultElement.textContent = response.result;
}

// Function to display the selected image
function displayImage(file, imgElement) {
    // Create a FileReader to read the image file
    var reader = new FileReader();

    // Set up the FileReader to display the image once it's loaded
    reader.onload = function(e) {
        imgElement.src = e.target.result;
    };

    // Read the image file as a data URL
    reader.readAsDataURL(file);
}
