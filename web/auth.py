from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import User
from . import db


auth = Blueprint('auth',__name__)
@auth.route('/login')
def UserDetails():
    pass