# Project Brief: `Front End Dynamic Progress Bars`

### Key Features and Technical Implementation Plan

- Read data from endpoint (API).
- Multiple bars.
- One set of controls that can control each bar.
- Can't go under 0
- Can go over limit (defined in API), but limit thebar itself and change its colour
- Display usage amount, centered
- Implement a responsive solution: testing it on mobile, tablet, etc. Getting it working nicely. Animate the bar change, make sure it works well when you tap buttons quickly.
- Sass styling
- Version control (git)

### Breakdown

_Data from API_

- Buttons
  - The amount of buttons to display and what value they increment or decrement the selected bar. Randomly generates between 4 and 6 buttons.
- Bars

  - The number of progress bars to display and their default values. Randomly generates between 2 and 5 progress bars.

- Limit
  - The equivalent to 100% of each bar. For example, the bar should be 100% filled when the progress hits 230.

### Deployed on Netlify

- _Link_: https://github.com/fitoskalante/r-dynamic-progress-bars

### My Resume Link

- _Link_: https://drive.google.com/file/d/1ccxspkyElxrbwLFEj2_5oH9IaspKmlYO/view?usp=sharing
