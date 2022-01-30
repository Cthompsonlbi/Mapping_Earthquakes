# Mapping_Earthquakes
Mod13

## Overview of Project:

The overview of this project is to create a visually stimulating webpage that will allow the user to interact with the webpage.  They will be able to select from multiple map styles and overlay information regarding tectonic plates and earthquakes with varying magnitudes. We will achieve this by using JavaScript, CSS and HTML to refrence to JSON files from multiple websites.

### Purpose:
The purpose of this project is to create a webpage with direction from Basil and Sadhana to create an earthquake map with three different maps and multiple overlays to highlight the relationship of earthquakes in reference to the Earth's tectonic plates.  The end product will allow the user to select which map style the prefer from the three options provided. The user will then be able to select what data will be visible from three options provided.  The user will be able to turn on or off visual data pertaining to earthquakes in the last seven days, earthquakes with a magnitude of 7.5 or greater, and tectonic plates.  The user will have the ability to turn on one, some, all, or none of those options.

* Screenshot of webpage with layer, map options, and Popup selected:

![index_html_5fields](resources/index_html_5fields.png)

* When loaded, the user will see five input fields to help them search for specific UFO sightings.

![filterSearch](resources/filterSearch.png)

* The table will be built using the function created below:

![buildTableFunc](resources/buildTableFunc.png)

* The table will be fully populated upon the loading of the webpage

![InitialTablePop](resources/InitialTablePop.png)

* Now the code below, using d3.selectAll event listener, will detect and change to the input field and store it to the filters variable and later update the table using the update Filters Function.

![filterTableFunc](resources/filterTableFunc.png)

* One example of this code in action is by filter upon my hometown of Port St. Lucie Fl.  As you see below, when Port St Lucie is entered into the field:

![pslFilter](resources/pslFilter.png)

* The result of that search lead to only one UFO sighting that met the requirement of Port St. Lucie

![tableFIlterPSL](resources/tableFIlterPSL.png)

* Now, let's repeat this but changing the city from Port St. Lucie to El Cajon. Now you can see multiple sighting returned by looking at the image below.

![elcajon](resources/elcajon.png)

* To take this one step further, we can filter further to specifically look at sightings in El Cajon that have a shape of 'light'.  By modifying the 'city' field to El Cajon and the 'shape' field to return sightings characterized as lights, we see the following returned:

![elcajonlight](resources/elcajonlight.png)

## Results:

The result is a visually appealing webpage with nice functionality.  It is user friendly and inviting and has the look and feel of well thought out and designed webpage.  It can handle multiple inputs and can filter data based upon those inputs.  It delivers upon all of Dana's requests and requirements.

## Summary:
This was an interesting project and learned a lot.  However, there are many drawbacks or opportunity for improvements.  Two of the drawbacks that could be addressed through additional coding are as follows:

* Nothing in place to notify whether a parameter like, date, city, or country that is entered is valid.   
* Formatting of the inputs.  Meaning the state, country, and dates need to be inputted exactly as it is stored in the data file.  

To address this there are a couple of approaches that could be implemented. Those approaches are listed below: 

* Error messaging.  If an user inputs and invalid date, city, country or shape or the input does not exist, a message should return stating that the "Input entered by the user does not exist, please modify your input and try again".  
* Adding some "smarts" that handle date formatting, capitalization, and abbreviations for countries would be a nice add on feature to make the user experience better. 
* Another option is to offer to return data based on a date range, or a radius.  If the user of the website did not put in a location that is present in the list of available data, it could return filtered data based on dates plus or minus seven days or if a city that is inputted by the user does not return an exact match then a radius option can be selected to return locations within the selected radius.

These are just a couple of suggestions that could make the user want to use the webpage and lend itself to being a webpage that users would like to come back to and spend more time on.
