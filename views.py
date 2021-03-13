from flask import Flask, render_template, request
from google.cloud import translate_v2 as translate


app = Flask(__name__)
translate_client = translate.Client()


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/help')
def help():
    return render_template('help.html')


@app.route('/translate')
def translate_text():
    args = request.args
    try:
        return translate_client.translate(args.get('text'), source_language=args.get('source'), target_language=args.get('target'))
    except:
        return {'Code': 400, 'Message': 'Bad Request'}
    