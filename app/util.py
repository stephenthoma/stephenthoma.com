import json, os

def read_projects(data_path):
    """Load JSON project data from file"""
    if os.path.isfile(data_path):
        with open(data_path) as data_file:
            projects = json.load(data_file)
        return projects
    else:
        return {}
