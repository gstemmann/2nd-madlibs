- what is react? when and why would you use it?

react is a frontend framework for JS mainly to easily save state in a component on a page where each component can be easilt repteated

- what is babel?

babel is a () to translate code from languages and legacy code and various browser compatibilities

 - what is jsx?

jsx is way to write JS inside of html with react components using babel in a script tag

 - how is a component created in react?

a component is usually opened in it's own file as a function with a return statement that is usually containing html and jsx to render. then the component is usually called in a parent file usually called App.js and the component is inside of an html element itself

 - what is a controlled component?

form data is handled by a react component

 - what is an uncontrolled component?

form data is controlled by the DOM itself

 - what is the purpose of the 'key' prop when rendering a list of component?

gives you the ability to control component instances

 - why is using an array index a poor choice for a key prop when rendering a list of components?

usually you should use an id so that every key prop is unique

 - describe useEffect. what use cases is it used for in react components?


used in forms. it is usually rendered once after the compnent is rendered and has a paramter to tell when the state should be rendered again.

 - what does useRef do? does a change to useRef value cause a rerender of a component?

allows you to persist values between renders. it can be used to store a mutable value that deos not cause a re-render when updated

 - when would you use a ref? when wouldn't you use one?

when you want local mutable value in a component

 - what is a custom hook? in react? when would you want to write one?

to clean up code. mainly when you are repeating a hook multiple times
