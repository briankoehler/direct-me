# DirectMe

### Starting the Web App
This guide assumes that you are using Python3.  If you are not 
on Python3, please upgrade before doing any of the following.  It also assumes you are in a Unix environment.  If you are on Windows, you may need to consult [this](https://cloud.google.com/translate/docs/setup#windows) when environment variables are being set.

Type the following into your terminal:
```
git clone https://github.com/briankoehler/direct-me
cd direct-me
pip3 install flask
pip3 install google-cloud-translate==2.0.1
```

Make sure that your retrieve a key to use Google Cloud's translation API before continuing.  Then, type the following:
```
export FLASK_APP=views.py
export GOOGLE_APPLICATION_CREDENTIALS='PATH/TO/GOOGLE/KEY.json'
flask run
```

Ensure that you replace ```PATH/TO/GOOGLE/KEY.json``` with your actual key path.  Running the above will open up the web app at ```localhost:5000```.


### About
This web app is designed to translate communication between two different languages, enabling someone to provide directions 
to another individual to a building on the campus of the University 
of Florida.  It is built using Flask, HTML, JavaScript, and CSS.  It relies on Google Cloud's Translation API and LeafletJS for the map.  The map tiles implemented are OpenStreetMap, and UF's official overlay.



### Dependencies
* Flask
* Google Cloud Translate v2