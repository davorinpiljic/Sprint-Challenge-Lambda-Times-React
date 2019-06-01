- [x ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used as a diagnostic tool, so that future developers making modifications to your code can be sure they are passing the right types of data between components. PropTypes displays an error message in the console if the type of data being passed does not match the expected data type.

PropTypes are important in JavaScript because JavaScript uses dynamic typing where the data type is bound to the variable value and not the variable itself--- a variable can contain any type of data instead of one type of variable being reserved for a specific data type. So PropTypes checks the data type of the variable's value. 

- [x ] Describe a life-cycle event in React?

A life-cycle event in React is a phase in the life of a component. A component is mounted, updated and eventually unmounted or removed from the screen. Each phase of the lifecycle has built-in methods that can be applied at that phase. 

- [x ] Explain the details of a Higher Order Component?

A Higher Order Component is a component through which another component is passed, so that the component being passed can take-on added functionality or data. 

- [x ] What are three different ways to style components in React? Explain some of the benefits of each.

1. CSS Stylesheet
2. Inline styling
3. Styled-Components