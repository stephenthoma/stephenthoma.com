import json, os
from flask import Flask, render_template, make_response
app = Flask(__name__)


def read_projects(data_path):
    """Load JSON project data from file"""
    if os.path.isfile(data_path):
        with open(data_path) as data_file:
            projects = json.load(data_file)
        return projects['projects']
    else:
        return {}

@app.route("/")
def index():
    projects = read_projects('/var/www/stephenthoma.com/app/static/projects.json')
    return render_template('index.html', projects=projects)

@app.route("/resume")
def resume():
    binary_pdf = open('/var/www/stephenthoma.com/app/static/resume.pdf').read()
    response = make_response(binary_pdf)
    response.headers['Content-Type'] = 'application/pdf'
    response.headers['Content-Disposition'] = \
        'inline; filename=%s.pdf' % 'resume'
    return response

@app.route("/whitebarkpine")
def whitebarkpine():
    binary_pdf = open('/var/www/stephenthoma.com/app/static/pinepaper.pdf').read()
    response = make_response(binary_pdf)
    response.headers['Content-Type'] = 'application/pdf'
    response.headers['Content-Disposition'] = \
        'inline; filename=%s.pdf' % 'pinepaper'
    return response

if __name__ == "__main__":
    app.run()
