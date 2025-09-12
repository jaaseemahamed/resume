from flask import Flask, render_template, request
import tensorflow as tf
import pickle
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Load model & tokenizer
model = tf.keras.models.load_model("sentiment_model.h5")
with open("tokenizer.pickle", "rb") as handle:
    tokenizer = pickle.load(handle)

# Compile model to avoid warnings
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

app = Flask(__name__)

# Max length (must match training)
MAX_LENGTH = 200  

@app.route("/", methods=["GET", "POST"])
def index():
    prediction = None
    review_text = ""

    if request.method == "POST":
        # Get form data
        review_text = request.form["review"]

        # Preprocess input
        seq = tokenizer.texts_to_sequences([review_text])
        padded = pad_sequences(seq, maxlen=MAX_LENGTH, padding="post", truncating="post")

        # Predict
        pred = model.predict(padded)[0][0]

        # ✅ Threshold moved inside POST block
        if pred >= 0.7:  # instead of 0.5
            prediction = f"😊 Positive Review (Confidence: {pred*100:.2f}%)"
        else:
            prediction = f"😞 Negative Review (Confidence: {(1-pred)*100:.2f}%)"
    
    return render_template("index.html", prediction=prediction, review_text=review_text)


# @app.route("/", methods=["GET", "POST"])  # Fixed: removed extra "a"
# def index():
#     prediction = None
#     review_text = ""

#     if request.method == "POST":
#         # Get form data
#         review_text = request.form["review"]

#         # Preprocess input
#         seq = tokenizer.texts_to_sequences([review_text])
#         padded = pad_sequences(seq, maxlen=MAX_LENGTH, padding="post", truncating="post")

#         # Predict
#         pred = model.predict(padded)[0][0]

#     if pred >= 0.7:  # instead of 0.5
#         prediction = f"😊 Positive Review (Confidence: {pred*100:.2f}%)"
#     else:
#         prediction = f"😞 Negative Review (Confidence: {(1-pred)*100:.2f}%)"

    
#     return render_template("index.html", prediction=prediction, review_text=review_text)

# if __name__ == "__main__":
#     app.run(debug=True)