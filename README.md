### Cotu ☘️🛍️

A chrome extension which overlays the carbon prices of most items on Amazon.

## How to run 🏃:


0.) 🤖 Sign in or create an account for Microsoft Azure SQL and create a db with sample data.

Download Azure Data Service onto your machine and sign into your database with those credentials.

Run the following scripts in the notebook to create a table for a user's purchase and carbon history:


(to be filled)

1.) 🎾 Sign in and Download ngrok (lets us easily upload a server), once downloaded authenticate as instructed on the website

2.) 📂 Get server folder up and running.

By running this code in the server folder:

```npm i && node server.js```

3.)🏃 Cd into the directory ngrok file is in an run:

```./ngrok http 3000 ```

4.)👐 Open the chrome-extension folder and replace all urls that contain ```ngrok.io```
with your new url that was shown in terminal that also has ```https://..ngrok.io```
BUT KEEP THE LAST ```/getHistory``` or ```/insertItem```.

5.) 👨‍💻In chrome type into the url ```chrome://extensions```


enable developer mode on the top right.

click load unpacked and upload the chrome-extension folder

6.)🌳Now if you navigate into chrome the following should have worked and you can see the carbon footprint overlaying on the price page.

Click on the chrome extension icon to reveal Great - your personal carbon coach

Have fun.

## LIMITATIONS

1.) Currently the sql database is shared between all users - a better version would modify the databse and add user sessions
2.) The quality of the carbon data is limited by the amount of category data there is (and currently is linearly dependant on price)
3.) Currently we cant access product group in the multi product pages - it eould be cool to be able to comoare product carbon footprints to eachother


