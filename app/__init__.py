import json, os
from flask import Flask, render_template
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

if __name__ == "__main__":
    app.run()
