from flask import Flask, render_template, request, jsonify
from image_classifier import classify_image
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        result = 'No file selected'
        return jsonify({'error': result})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'result': 'No selected file'})

    if file and allowed_file(file.filename):
        # Save the file temporarily
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename).replace("\\", "/")
        file.save(filepath)

        # Print filename and filepath for debugging
        print("Filename:", filename)
        print("Filepath:", filepath)

        # Classify the image
        result = classify_image(filepath)

        # Remove the temporary file
        os.remove(filepath)

        return jsonify({'result': result})

    return jsonify({'error': 'Invalid file format'})

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

if __name__ == '__main__':
    app.run(debug=True)
