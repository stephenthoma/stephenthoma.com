# stephenthoma.com
Source code for my personal website built with Flask, and intended to be run in production as a vassal of UWSGI emperor. Projects are stored in `static/projects.json`, and loaded into the index template via the `read_projects()` function defined in `__init__.py`.


The only dependency is Flask, which can be installed via `pip install flask`.
Run the development server by executing `python __init__.py`, and browsing to `127.0.0.1:5000`.
