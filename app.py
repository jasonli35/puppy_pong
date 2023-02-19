# Necessary Imports
from fastapi import FastAPI                   # The main FastAPI import
from fastapi.responses import HTMLResponse    # Used for returning HTML responses
from fastapi.staticfiles import StaticFiles   # Used for serving static files
import uvicorn                                # Used for running the app


# Configuration
app = FastAPI()                   # Specify the "app" that will run the routing
# Mount the static directory
app.mount("/public", StaticFiles(directory="public"), name="public")

#Define the root for index page
@app.get("/", response_class=HTMLResponse)
def get_html() -> HTMLResponse:
    with open("index.html") as html:
        return HTMLResponse(content=html.read())
#define the route for puppy_pong page
@app.get("/puppy_pong", response_class=HTMLResponse)
def get_html() -> HTMLResponse:
    with open("puppy_pong.html") as html:
        return HTMLResponse(content=html.read())


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=6543)