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

**User Story 1:** 

**User Story 2:** 

**User Story 3:** 

**User Story 4:** 

**User Story 5:** 

### Mockups & Wireframes

The following [wireframe](https://github.com/JBroks/holiday-planner/blob/master/wireframes/wireframes.pdf) sketches were created to design the dashboard layout options for large, medium and mobile displays.

## Features

### Existing Features

The project consists of the following features:

- Spinner - 

- Navbar - 

- Select menus - 

- Autocomplete input window - 

- Reset button - 

- Map - 

- Information window - 

- Results table - 

- Footer - contains social media link and copyrights information;

- Back to top button - 

### Features left to implement

..........improve menus using jquery ui

## Technologies used

### Programming languages

- HTML - The project used **HTML** to define structure and layout of the web page;

- CSS - The project used **CSS** stylesheets to specify style of the web document elements;

- JavaScript - ...............

### Libraries

- [jQuery]() - 

- [Sweetalert2]() - 

- [Font Awesome]() - 

- [Google Fonts]() - 

### Frameworks

- [Bootstrap]() - 

### Other

- [Maps JavaScript API]() - 

- [Places Library]() - 

- [Gifox]() - 

- [Am I Responsive]() - 

- [Free Logo Design](https://www.freelogodesign.org/) - 

- [MockFlow WireframePro]() - 

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