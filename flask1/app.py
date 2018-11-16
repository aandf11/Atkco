from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
app = Flask(__name__)
app.config['SECRET_KEY'] = "hfrjoekdodkcjfdb"
#app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:postgres123@localhost/atkco_users'
app.config['SQLALCHEMY_DATABASE_URI']='postgres://kakloevymlhziv:e20892df6bfe1dbfbe88b71c8bf0d479c9c1a4a47886ebd9b69883329838e1ef@ec2-75-101-153-56.compute-1.amazonaws.com:5432/dci6rf04im5ih?sslmode=require'
db=SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

class Data(UserMixin, db.Model):
    __tablename__ = "data"
    id=db.Column(db.Integer, primary_key=True)
    first_name=db.Column(db.String(120))
    last_name=db.Column(db.String(120))
    email=db.Column(db.String(120), unique=True)
    password=db.Column(db.String(120))    
    
    def __init__(self, first_name, last_name, email, password):
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.password=password

@login_manager.user_loader
def load_user(user_id):
    return Data.query.get(int(user_id))
        

@app.route('/')
def home():
    return render_template("index.html")

#DECORATORS FOR DIFFERENT LOGIN INSTANCES
@app.route('/login')
def login():
    return render_template("login.html")
@app.route('/success')
def success():
   return  render_template("login.html", text="Sign up Successful! Please login")
@app.route('/signup_')
def signup_():
    return render_template("login.html", text="Email already exists, please Login")
@app.route('/login_')
def login_():
    return render_template("login.html", text="Invalid E-mail or Password")
###################################       

@app.route('/assesment')
@login_required
def assesment():
    return render_template("questions.html")

@app.route('/home')
def home1():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    if request.method=='POST':
        hashed_password= generate_password_hash(request.form['password'], method='sha256')
        first_name = request.form['firstName']
        last_name = request.form['lastName']
        email = request.form['email']
        password = hashed_password
        if db.session.query(Data).filter(Data.email==email).count()== 0:
            data = Data(first_name, last_name, email, password)
            db.session.add(data)
            db.session.commit()
            return redirect(url_for("success"))
        
    return redirect(url_for("signup_"))

@app.route('/authenticate', methods=['POST'])
def authenticate():
    if request.method=='POST':
        email = request.form['email']
        password = request.form['password']
        user= Data.query.filter_by(email= email).first()
        if user:
            if check_password_hash(user.password, password):
                login_user(user)
                return redirect(url_for('assesment'))
        return redirect(url_for('login_'))

        


if __name__=="__main__":
    app.run(debug=True)