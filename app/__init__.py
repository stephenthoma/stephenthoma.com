from flask import Flask, render_template
from util import read_projects
app = Flask(__name__)

@app.route("/")
def index():
    projects = read_projects('static/projects.json')
    return render_template('index.html', projects=projects)

if __name__ == "__main__":
    app.run()
