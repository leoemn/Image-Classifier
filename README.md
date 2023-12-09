# Image Classifier Web App

This is a web application for image classification using Flask, TensorFlow, and JavaScript. The app allows users to upload an image, and it provides a classification result based on a pre-trained MobileNetV2 model.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/leoemn/Image-Classifier.git

2. Change into the project directory:
   ```bash
   cd image-classifier-web-app

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt

4. Run the Flask app:

   ```bash
   python app.py

## Usage

1. Open your web browser and go to http://localhost:5000.
2. Upload an image using the provided form.
3. Click the "Classify" button to get the classification result.
4. The result will be displayed on the webpage.

## Folder Structure
1. static: Contains static assets like CSS and JavaScript files.
2. templates: Contains HTML templates for Flask.
3. uploads: Temporary directory to store uploaded images.
4. app.py: Flask application file.
5. image_classifier.py: Module for image classification logic.
6. requirements.txt: List of Python dependencies.

## Dependencies
1. Flask
2. TensorFlow
3. Pillow

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.
