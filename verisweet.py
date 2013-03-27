from flask import Flask, render_template, request
import json
verisweet = Flask(__name__)

@verisweet.route('/incidents/new/', methods=['GET', 'POST'])
def new_incident():
    if request.method == 'GET':
        return render_template('incidents/new.html')
    else:
        incident = {}
        for key,value in request.form.iteritems():
            if value != "":
                incident[key] = value
        return json.dumps(incident) 

@verisweet.route('/incidents/')
def index():
    return "list the incidents in the database"

@verisweet.route('/incidents/<int:incident_id>/')
def show(incident_id):
    return "show incident number " + str(incident_id)


if __name__ == "__main__":
    verisweet.run(debug=True)
