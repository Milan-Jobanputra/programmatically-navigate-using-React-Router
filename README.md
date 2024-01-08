# programmatically-navigate-using-React-Router
programmatically navigate using React Router


React Router provides a useHistory hook and useNavigate hook (starting from version 6) that allows you to programmatically navigate within your React components. Here's an example using both approaches:

Using useHistory (React Router v5): 
Check the file MyComponent.jsx 

Using useNavigate (React Router v6):

Check the file  MyComponentVSix.jsx

Here's how the directory structure might look: 

src/
|-- components/
|   |-- MyComponent.jsx
|-- App.jsx


useHistory or useNavigate hooks are imported from 'react-router-dom'.
The hook is called to get the necessary function (history or navigate) for programmatically navigating.
Inside an event handler (e.g., a button click), you call the navigation function (history.push or navigate) with the desired route as an argument.


