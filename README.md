# FISE3-INFO6-Architecture n-tiers

## a meeting arrangemnt web page 
## HTML, CSS, JS(Jquery), PHP, Apach Server, MySQL, Google Map API.

### Features and its description
* select tag - click the select tag to see the existed meeting of mySQL database.
* insert button - input necessary information(title, date, address, message) ,then click insert button to creat a meeting.
* modify button - select a existed meeting by clicking select tag, then modify the title, date, address, message as you want, finally dont forget click the modify botton to validate this operation.
* delete button - select a existed meeting by clicking select tag, then click delete button to delete this meeting and all its inscripted users.
* direct button - select a existed meeting by clicking select tag, then click direct button to direct you to the Meeting place from current location.
* User informations tag - select a existed meeting by clicking select tag, then click this tag to list all the users inscripted to this meeting.

### Directory structure and file description
## Demo/
* home.html - website home page

## Demo/src/*
* jquery-3.3.1.js - jquery library


## Demo/css/*
* home.css - add some css style for some objects in home.html.

## Demo/js/*
* googlemap.js - test code for direction 
* geolocation - initialize google map and locate to the current location.
* mapDirection - direct to destination.
* getOneMeeting.js - loading all details of a meeting to html.
* selectData.js -loading existed meeting title to the select tag of home.html.
* home.js - add some onclick function for some objects in home.html.

## Demo/db/*
* initialDB.php - connect to mySQL database, you will use the following configuration: $username = "root"; $password = "root";
* insertData.php - insert a meeting to DB with its related users.
* updateData.php - modify an existing meeting content. 
* deleteData.php - delete a meeting and all the users from database.
* readData.php - list all users who inscripted to a meeting.
* addUser.php - add a user to an existed meeting.
* getUsers.php - list all the users with its meeting id.
* getOneMeeting.php - show detailed information of a selected meeting.
* getData.php - list all the meeting with its title and id.

