from flask import Flask, render_template, request
verisweet = Flask(__name__)

@verisweet.route('/incidents/new/', methods=['GET', 'POST'])
def new_incident():
    if request.method == 'GET':
        return render_template('new_incident.html')
    else:
        return str(request.form) 

@verisweet.route('/incidents/')
def index():
    return "list the incidents in the database"

@verisweet.route('/incidents/<int:incident_id>/')
def show(incident_id):
    return "show incident number " + str(incident_id)


if __name__ == "__main__":
    verisweet.run(debug=True)
