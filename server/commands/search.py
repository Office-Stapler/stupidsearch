import bs4
import json
import requests

SUBJECT_INFO = {}

HANDBOOK_URL = 'https://www.handbook.unsw.edu.au/undergraduate/courses/2020/'


def parse_subject_info():
    """Parses the course information from JSON into a Python dict.

    Returns:
        array[array[dict]]: [{
            faculty_name: [
                {
                    "code": 8 character course code,
                    "name": Full course name,
                    "uoc": Unit of credits
                }
            ]
        }]
    """

    subject_info = {"faculties": set()}

    with open('subjectinfo.json', 'r') as f:
        subjects = json.load(f)

    for faculty in subjects:
        subject_info[faculty] = subjects[faculty]
        subject_info["faculties"].add(faculty)

    return subject_info


def get_handbook_details(query):
    """Gets a more detailed description of a course from the handbook. 

    Args:
        query (str) - course code (possibly partial) to search the handbook.

    Returns:
        tuple: (overview, offering)
    """

    page = requests.get(HANDBOOK_URL + query).text
    soup = bs4.BeautifulSoup(page, 'html.parser')
    info = soup.find_all('div', class_='readmore__wrapper')
    overview = info[0].get_text().strip()
    offering = soup.find_all('p', class_='')

    for offer in offering:
        if 'Term' in offer.get_text():
            offering = offer.get_text()
            break

    return overview, offering


def search(query):
    ''' 
    Args:
        query (str) - course code (possibly partial) to search the handbook.
    
    Returns: 
        dict: {
            'overview': Course overview,
            'terms': Course offering terms,
            'name': Course name
        }

        None if faculty code is not found.
        list if faculty code found, but course code not found.
    '''

    query = query.upper()
    faculty_code = query[0:4]

    global SUBJECT_INFO
    if not SUBJECT_INFO:
        SUBJECT_INFO = parse_subject_info()
    subjects = SUBJECT_INFO

    if faculty_code not in SUBJECT_INFO["faculties"]:
        return None
    
    if query not in [subject["code"] for subject in subjects[faculty_code]]:
        return [subject["code"] for subject in subjects[faculty_code]]
        
    for subject in subjects[faculty_code]:
        if subject["code"] == query:
            name = subject["name"]

    overview, offering = get_handbook_details(query)

    return {
        'overview': overview,
        'terms': offering,
        'name': name
    }
