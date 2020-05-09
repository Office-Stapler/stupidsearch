import flask
from flask_cors import CORS
from commands import courses, search

APP = flask.Flask(__name__)
CORS(APP)

@APP.route('/get_courses', methods=['GET'])
def get_courses():
    return courses.get_courses()

@APP.route('/info', methods=['GET'])
def info():
    course_code = flask.request.args.get('code')
    info = search.search(course_code)
    if not info or isinstance(info, list):
        return {}
    else:
        return info
APP.run()