var classifyButton = document.getElementById('classify');
classifyButton.addEventListener('click',function() {
    handleFileUpload();
})

function handleFileUpload() {
    var inputElement = document.getElementById('image-input');
    var uploadedImageElement = document.getElementById('uploaded-image');
    var formData = new FormData();
    formData.append('file', inputElement.files[0]);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        handleServerResponse(data);

        var resultElement = document.getElementById('result');
        resultElement.textContent = data.result;
    })
    .catch(error => {
        console.error('Error', error);
        // Handle error gracefully, e.g., display an error message to the user
        var resultElement = document.getElementById('result');
        resultElement.textContent = 'Error: Unable to process the request';
    });

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
