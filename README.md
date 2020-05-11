# stupidsearch
A simple website that searches UNSW courses based on the Flask Backend.

# How it works
The website calls fetch requests to the backend, where all the courses are stored. Then the backend will scrape UNSW's Handbook to collect
information about the course.

## Set up
To start, clone the repo into a folder
```sh
git clone git@github.com:Office-Stapler/stupidsearch.git {folder name}
```
Then make your virtual environment with either venv or virtualenv,
```sh
python3 -m venv {virtual enviroment name}
```
or
```sh
python3 -m virtual env {virtual environment name}
```
The usual name for the virtual environment is `venv`.
After making your virual environment, you will need to activate it with:
```sh
source venv/bin/activate
```
You should notice the virtual environment name to the left of the terminal.
Then you can run the requirements.txt, which the server needs to run.
```sh
pip3 install -r server/requirements.txt
```
After finishing you can deactivate the virtual environment with:
```sh
deactivate
```

Then run the `server.py` in the server folder.
After the server is up, you open `index.html`
