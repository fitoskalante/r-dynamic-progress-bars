# Project Brief: `Front End Assignment - Progress Bars`


### Key Features and Technical Implementation Plan

* Read data from endpoint (API).
* Multiple bars.
* One set of controls that can control each bar.
* Can't go under 0
* Can go over limit (defined in API), but limit thebar itself and change its colour
* Display usage amount, centered
* Implement a responsive solution: testing it on mobile, tablet, etc. Getting it working nicely. Animate the bar change, make sure it works well when you tap buttons quickly.
* Version control (git)


### Breakdown
*Data from API*

* Buttons
    * The amount of buttons to display and what value they increment or decrement the selected bar. Randomly generates between 4 and 6 buttons.
    
* Bars 
    * The number of progress bars to display and their default values. Randomly generates between 2 and 5 progress bars.

* Limit
    * The equivalent to 100% of each bar. For example, the bar should be 100% filled when the progress hits 230.
