import json
def get_courses():
    with open('data/subjectinfo.json', 'r') as f:
        subjects = json.load(f)
    return subjects