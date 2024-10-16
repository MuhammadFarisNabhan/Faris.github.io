from flask import Blueprint, render_template

routes = Blueprint("routes",__name__)

@routes.route("/",methods = ["GET","POST"])
def index():
    return render_template('index.html')

@routes.route("/projects", methods=["GET","POST"])
def projects():
    return render_template('projects.html')

@routes.route("/contact", methods=["GET","PUSH"])
def  contact():
    return render_template('contact.html')
