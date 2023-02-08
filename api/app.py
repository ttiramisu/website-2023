from flask import Flask, render_template, redirect


app = Flask(__name__)
###############################
############ MAIN #############
###############################


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/main')
def main():
    return render_template('main.html')
###############################
############ ERROR ############
###############################


# @app.errorhandler(404)
# def page_not_found(e):
#     return render_template('404.html'), 404


# @app.errorhandler(500)
# def page_not_found(e):
#     return render_template('500.html'), 500


if __name__ == "__main__":
    app.run(debug=True)
