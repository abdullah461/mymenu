from . import db
from flask_login import UserMixin

# menu model


# user model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True)
    Buisness_name = db.Column(db.String(50))
    address = db.Column(db.String(150))
    phone_number = db.Column(db.String(50))
    password = db.Column(db.String(50))
