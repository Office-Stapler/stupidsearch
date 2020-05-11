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
Then run the `server.py` in the server folder.
After the server is up, you open `index.html`
