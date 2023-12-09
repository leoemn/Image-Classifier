import tensorflow as tf
from keras.preprocessing import image
from keras.applications.mobilenet_v2 import MobileNetV2, preprocess_input, decode_predictions
import numpy as np

# Load the MobileNetV2 model pre-trained on ImageNet
model = MobileNetV2(weights='imagenet')

def classify_image(image_file):
    # Load and preprocess the image
    img = image.load_img(image_file, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)

    # Make predictions
    predictions = model.predict(img_array)

    # Decode and return the top predicted class
    decoded_predictions = decode_predictions(predictions)
    top_prediction = decoded_predictions[0][0]

    # Format the result
    result = f"{top_prediction[1]} ({top_prediction[2]:.2%})"

    return result
