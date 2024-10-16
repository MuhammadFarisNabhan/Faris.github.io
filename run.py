from app import create_app

app = create_app()

if __name__ == "__main__":
    # with create_app.app_context():
    app.run(debug=True)
