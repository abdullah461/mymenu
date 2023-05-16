from flask import Blueprint, render_template




def index():
    return render_template("menu.html")
