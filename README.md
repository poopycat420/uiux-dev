# Development

### Link to Deployed Website

Hosted at https://poopycat420.github.io/uiux-dev

### Goal and Value of the Application

The goal of Calisthenics Pal is to provide a simple and easy-to-use display to find and put together exercises to try in calisthenics workouts. For instance, a person trying to put together a full-body workout routine to do can search for and find 1-2 push exercises, 1-2 pull exercises, and a core and leg exercise at their level. The expected userbase is individuals who have some knowledge of how to program basic calisthenics workouts but who want to explore different exercises.

The app also calculates a basic difficulty score for the overall selected exercises (for instance, they are at the intermediate level on average). This can be found at the bottom of the sidebar, where selected exercises are collected.

### Usability Principles Considered

There are a fair number of usability principles at play in the website.

- Affordance is present through the use of common-sense icons that provide immediate visual feedback when clicked (i.e. when you add an exercise, it pops up on the left sidebar). When someone clicks the minus button on an exercise card either in the sidebar or in the main area, the exercise is removed from the selection.
- Consistency is implemented across the website. Exercises are held in cards both in the selection area and in the sidebar. There is a blue color scheme throughout. For the filters, there are colored Chips from Material UI that correspond to the categorizations found in the exercise cards. For instance, difficulty is represented in purple in the filter control, in the actual cards, and in the difficulty summary at the bottom of the sidebar.
- Findability is considered through the use of filtering and sorting controls at the top of the exercise selection area. This helps users quickly sort through the list of exercises to find ones that fit what they are looking for. Given more time, I could also have added a search bar to improve findability.

### Organization of Components, How Data is Passed Down, State Changes

There are two primary sections in the App component, the Header and the Main sections. The Header just contains the name of the app. The Main section is where all user interaction occurs and is split into a Sidebar component on the left and an ExerciseSelection component on the right. The Main component controls the movement of selected exercises into the sidebar by passing down functions for adding and removing selections into Sidebar and ExerciseSelection. Main holds the array of currently selected exercises in a state. When a user selects an exercise in ExerciseSelection, that (semi-)global state is then updated via the addExercise function available in the component. The exercise is added to the Sidebar as a SidebarCard, since the array of selected exercises is passed down from Main to the Sidebar component. In ExerciseSelection, the icon for an exercise changes based on whether it is included in the current selection state. These exercises are represented by cards with images via the ExerciseCard component.

From ExerciseSelection, users can sort and filter the view to find the exercises they want to add to their selection. The focus (i.e. what the exercise's target area is) and difficulty filters each have their own state - an array that contains what categories are being shown in the view. For difficulty, for instance, the state starts as ['Beginner', 'Intermediate', 'Advanced'] until the user deselects one of those categories. For instance, if they deselect 'Intermediate' and 'Advanced', the state then becomes ['Beginner'] and only beginner exercises are shown in the view. For sorts, the state is an array of the currently applied sorts. If both sorts are applied, the state would be ['Alphabetically', 'By Difficulty'].

Original data for the exercises is loaded in ExerciseSelection, and a state is held in the component that represents the data after sorts and filters are applied. The actual application of the sorts and filters occurs in a useEffect hook that updates when any changes occur to the states of the sorts and filters.
