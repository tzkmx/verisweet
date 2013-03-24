Setup
========

I'm using virtualenv with my python but I put the virtual python directory into .gitignore so that I wouldn't have everything checked into github.  

    sudo easy_install virtualenv
    virtualenv venv
    ./venv/bin/activate
    pip install Flask

Running
=======

    python verisweet.py

Accessing
=========
Point your browser at http://localhost:5000/incidents/new
