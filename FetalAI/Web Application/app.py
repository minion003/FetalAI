from flask import Flask, render_template, request
import joblib

app = Flask(__name__, static_folder='static')

# Load your pre-trained model
model = joblib.load('fetalai_final.pkl')

@app.route('/')
def front():
    return render_template('index.html')

@app.route('/input')
def index():
    return render_template('input.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get input data from the HTML form
    acc = float(request.form['acc'])
    ld = float(request.form['ld'])
    uc = float(request.form['uc'])
    pd = float(request.form['pd'])
    asv = float(request.form['asv'])
    msv = float(request.form['msv'])
    plv = float(request.form['plv'])
    hnp = float(request.form['hnp'])
    m = float(request.form['m'])
   # hn = float(request.form['hn'])

    # Make a prediction
    input_data = [[acc, ld, uc, pd , asv, msv, plv, hnp, m]]
    prediction = model.predict(input_data)

    # Pass the prediction to the result page
    return render_template('result.html', prediction=prediction[0])

if __name__ == '_main_':
    app.run(debug=True)