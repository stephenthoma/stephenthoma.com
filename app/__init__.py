import json, os
from flask import Flask, render_template, make_response
app = Flask(__name__)

BASE = '/var/www/stephenthoma.com/'
def read_data(data_path, key):
    """Load JSON project data from file"""
    if os.path.isfile(data_path):
        with open(data_path) as data_file:
            res = json.load(data_file)
        return res[key]
    else:
        return {}

def respond_pdf(filename):
    binary_pdf = open('{0}app/static/{1}.pdf'.format(BASE, filename)).read()
    response = make_response(binary_pdf)
    response.headers['Content-Type'] = 'application/pdf'
    response.headers['Content-Disposition'] = \
        'inline; filename={0}.pdf'.format(filename)
    return response

@app.route("/")
def index():
    projects = read_data(BASE + 'app/static/projects.json', 'projects')
    return render_template('index.html', projects=projects)

@app.route("/resume")
def resume():
    return respond_pdf('resume')

@app.route("/whitebarkpine")
def whitebarkpine():
    return respond_pdf('pinepaper')

if __name__ == "__main__":
    app.run()
