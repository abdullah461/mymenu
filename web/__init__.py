from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# create database
db = SQLAlchemy()
DB_NAME = "database.db"

def create_app():
    app = Flask(__name__)
    
    # the secret key secure the cookies and session data
    app.config['SECRET_KEY'] = 'abdullahi'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    
    # innitialize our database
    db.init_app(app)