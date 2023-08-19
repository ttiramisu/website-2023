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

###############################
############ INFO #############
###############################

@app.route('/silkroad/')
def silkroad_about():
    return render_template('about-silkroad.html')

@app.route('/silkroad/development')
def silkroad_development():
    return render_template('about-development.html') 

@app.route('/silkroad/map')
def silkroad_map():
    return render_template('about-map.html') 
    
@app.route('/silkroad/belt-road')
def silkroad_belt_road():
    return render_template('about-belt-road.html')

###############################
########### BULLY #############
###############################

@app.route('/reference')
def reference():
    return render_template('reference.html')

###############################
############ GAME #############
###############################
@app.route('/game/selection')
def game_selection():
     return render_template('game-selection.html')

@app.route('/game/2-player')
def game_2_player():
     return render_template('game-2.html')

@app.route('/game/3-player')
def game_3_player():
     return render_template('game-3.html')

@app.route('/game/4-player')
def game_4_player():
     return render_template('game-4.html')

@app.route('/game/role')
def role():
     return render_template('role.html')

@app.route('/game/rules')
def rule():
     return render_template('rule.html')

###############################
############ TEST #############
###############################

@app.route('/test')
def test():
     return render_template('test2.html')

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
########### EASTER ############
###############################
@app.route('/thanks')
def thanks():
    return render_template('easter/thanks.html')

@app.route('/falling')
def falling():
    return render_template('easter/troll.html')

###############################
######## RUN TIME CODE ########
###############################
if __name__ == "__main__":
    app.run(debug=True)
