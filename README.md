# Holiday Planner

Stream Two Project: Interactive Frontend Development - extra credit project.

![alt text](https://github.com/JBroks/holiday-planner/blob/master/gif/holidayPlanner.gif "Gif")

This website uses Google Maps API to create a holiday planner tool that will enable its user to filter out place types (accommodation, restaurant, tourist attractions) by country and city.

Project consists of the following sections:

1. Filters - contains two select menus to specify country and place type (accommodation, restaurant, tourist attraction), and input window that enables a user to specify the city of their choice.

2. Map - section contains Google Maps API map that contains markers pointing to places narrowed down by applied filters.

3. Results - section contains a table that presents the same outputs as the map but in tabular form. Section stays hidden if selection has not been made.

## Demo

Website demo is available [here](https://jbroks.github.io/holiday-planner/ "holiday-planner").

## UX

### UX Design

In this project I was aiming to achieve a simple and user friendly user design, while providing all required information. All sections are arranged in a logical order to provide intuitive user experience.

To create stylish, high contrast look I used the following colors in my design: white (`#ffffff`), off-white (`#f6f7f6`), light-green (`#00bc66`), dark-green (`#00703c`) and range of grey / dark-grey colors (`#222222`, `#9d9d9d`, `#333333`, `#474b4e`).

High contrast theme gives an addiional advantage for low-vision users as it is makes it easier for them to read. 

### Target Audience

This website aims to attract people that are planning their holidays and would like to find most suitable place to visit. It informs its user about accommodation and restaurant choice in the selected area. The website also provides them with information about local tourist attractions.

The main objective of the website is to provide a user with a tool that will enable them to filter out accommodation / restaurants / tourist attraction inforamtion based on a destination specified by them.

### User Stories

The following user stories were used to design this project:

**User Story 1:** As a user I would like to explore different holliday destination options so I can decide which one is the most suitable for me.

**User Story 2:** As a user I would like to understand what any destination has to offer i.e. what sort of accommodation, restaurants and / or tourists attractions are available in the area specified by me.

**User Story 3:** As a user I would like to be able to investigate any type of place (accommodation / restaurants / tourist attraction) in more detail so I am aware what are e.g. opening times, contact details and reservation requirements.

**User Story 4:** As a user I would like to have a quick way to clear all filters applied by me without refreshing the page.

**User Story 5:** As a user I would like to have an option of easy navigation throughtout the page without scrolling back and forth all the time.

**User Story 6:** As a user I would like to be informed if I am doing anythig wrong to understand how can I fix my error.

### Mockups & Wireframes

The following [wireframe](https://github.com/JBroks/holiday-planner/blob/master/wireframes/wireframes.pdf) sketches were created to design the dashboard layout options for large, medium and mobile displays.

## Features

### Existing Features

The project consists of the following features:

- Spinner - jQuery method `show()` and `hide()` was used to create spinner showing while data is loading;

- Navbar - the navbar stays collapsed on all devices and FontAwesome bar icon is used. The navbar contains brand logo and links to associated sections i.e. Filters, Map, Results;

- Select menus - select options for countries and place types (accommodation / restaurants / tourist attractions);

- Autocomplete input window - input window that autocomplete  

- Reset button - feature that enables users to reset all applied filters and clear the selection;

- Map - Maps JavaScript API that contains markers and information window after user applies appropriate filter;

- Information window - information windo is displayed when user clicks on a marker or results displayed in the results table. Window contains information about place name, address, phone number and rating;

- Results table - table appears when a user specified destination (country and city) and place type. Results table displays marker, place name and address;

- Footer - contains social media link and copyrights information;

- Back to top button - back to top button was implemented so user can go back to the top of the page without scrolling back. The feature is especially useful on mobile devices.

- Missing information alerts - alerts created using **Sweetalert2** framework that inform users about missing information. 

### Features left to implement

..........improve menus using jquery ui, 

## Technologies used

### Programming languages

- **HTML** - The project used HTML to define structure and layout of the web page;

- **CSS** - The project used CSS stylesheets to specify style of the web document elements;

- **JavaScript** - The project used Javascript to implement Maps Javascript API and customize it.

### Libraries

- [jQuery](https://code.jquery.com/jquery-3.4.1.min.js) - The project used `show()` and `hide()` method to display loading spinner. jQuery was also used to fix the bootstrap menu issue (not collapsing after clicking a link) and to clear results section heading after clicking the reset button;

- [Sweetalert2](https://sweetalert2.github.io/#download) - It was used to create customizable alert pop up boxes;

- [Font Awesome](https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css) - Font Awesome social media and navbar menu icons were used for the project;

- [Google Fonts](https://fonts.google.com/) -  Google Fonts library was used to set up font type for the document;

### Frameworks

- [Bootstrap]() - The project used Bootstrap to create nice grid layout, and position elements within grids. The framework was also used to create and customize the navbar element;

### Other

- [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial) - It was used to implement map feature on the website;

- [Places Library](https://developers.google.com/maps/documentation/javascript/places) - Library was used to enable search for places within the specified area and to implement autocomplete feature;

- [Gifox](https://gifox.io/) - Tool was used to record the gif presented in the demo secion of this README files;

- [Am I Responsive](http://ami.responsivedesign.is/#) - Online tool was used to display the project on various devices;

- [Free Logo Design](https://www.freelogodesign.org/) - Online tool that was used to create a logo for the website;

- [MockFlow WireframePro](https://www.mockflow.com/) - Online tool that was used to create wireframes.

## Testing

### Code validation

#### CSS

..........
Remaining warrnings:
```
Imported style sheets are not checked in direct input and file upload modes
```

```
-webkit-border-radius is an unknown vendor extension
-webkit-appearance is an unknown vendor extension
-moz-appearance is an unknown vendor extension
```

#### HTML

Warning about empty heading left unresolved as it is set up like that on purpose. Heading is filled when the results table is created.
```
 <h2 id="results-heading"></h2>
```
..........

#### JavaScript
https://jshint.com/
validates well only warning about $, Swal and google being undefined variables
.........

### Features testing

#### Feature 1

.........

##### Bugs:

........

#### Feature 2

..........

##### Bugs:

..........

#### Feature 3

........

##### Bugs:

...........

### Responsivness testing

............

#### Bugs:

........

### Peer-code-review

...........

#### Bugs:

............

### User stories testing

**User Story 1:**

- Solution: .......
- 
**User Story 2:** 

- Solution: ........

**User Story 3:** 

- Solution: .......

**User Story 4:** 

- Solution: .........
- 
**User Story 5:** 

- Solution: .........

**User Story 6:** 

- Solution: .........

## Deployment

The site was developed using AWS Cloud 9. To keep records of different versions of all project files git version control system was used. 

In order to track the changes in the local repository the following steps were taken:

- command `git add 'filename'` - to update what will be committed;

- command `git commit` - to commit the changes.

Using `git push` command all changes from the local repository were pushed to the remote one on GitHub.


This project is hosted using GitHub pages, deployed directly from the `master` branch. 

To deploy my project from GitHub I followed these steps:

1. On GitHub website I logged onto my account and navigated to [my repository](https://github.com/JBroks/holiday-planner);

2. Under my repository name, I clicked on **Settings** tab;

3. I scrolled down to the **GitHub Pages** section;

4. On the **Select source** drop-down menu I selected `master` as my GitHub Pages publishing source;

5. I clicked **Save**.

The deployed site will update automatically upon new commits to the `master` branch. It is important to remember that for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

In order to clone my GitHub repository to your local one you should follow these steps:

1. On GitHub navigate to [my repository](https://github.com/JBroks/holiday-planner);

2. Under the repository name, click **Clone or download**;

3. In the Clone with HTTPs section, copy the clone URL for the repository;

4. Go to IDE that you are using and open terminal;

5. Change the current working directory to the location where you want the cloned directory to be made;

6. Type `git clone` and then paste the URL you copied in Step 3;

```
$ git clone https://github.com/JBroks/holiday-planner.git
```

7. Lastly press **Enter** and your local repository will be created.

## Credits

### Content

...........

### Media

Favicon used for the project was download from [here](.............).

### Acknowledgements

.......

Many thanks to my mentor **Maranatha Ilesanmi** for support and advice throughout the project.



### Disclaimer

*This is for educational use.*