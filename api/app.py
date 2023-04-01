from flask import Flask, render_template


app = Flask(__name__, static_folder='static', static_url_path='')

###############################
############ MAIN #############
###############################

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about-us')
def about():
    return render_template('about.html')

@app.route('/policy')
def policy():
    return render_template('policy.html')

@app.route('/about/silkroad')
def silkroad_about():
    return render_template('about-silkroad.html')

@app.route('/about/development')
def silkroad_development():
    return render_template('about-development.html') 

@app.route('/about/map')
def silkroad_map():
    return render_template('about-map.html') 
    
@app.route('/about/belt-road')
def silkroad_belt_road():
    return render_template('about-belt-road.html')

@app.route('/about/coming-soon')
def coming_soon():
    return render_template('coming-soon.html')

###############################
############ ERROR ############
###############################

@app.errorhandler(404)
def page_not_found(e):
	return render_template("404.html"), 404


@app.errorhandler(500)
def page_not_found(e):
	return render_template("500.html"), 500


###############################
######## RUN TIME CODE ########
###############################
if __name__ == "__main__":
    app.run(debug=True)
