from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C:/Users/balah/sqlite-tools-win32-x86-3340100/sqlite-tools-win32-x86-3340100/words.db'
db = SQLAlchemy(app)

class Words(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	text = db.Column(db.String(200), unique=True)


@app.route('/')

def index():
	words = Words.query.all()
	return render_template('index.html', words = words)

@app.route('/add', methods=['POST'])

def add():
	word = Words(text = request.form['inputword'])
	db.session.add(word)
	db.session.commit()
	return redirect(url_for('index'))

@app.route('/blanks', methods=['POST'])
def blanks():
	words = Words.query.all()
	
	return render_template('blanks.html', words = words)

if __name__ == '__main__':
	app.run(debug =True)


