1. What problem does the context API help solve?
    `Prop drilling. Instead of passing from component to component props that are not even needed, using context API allows you to share props or state wherever needed.`

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. 
What does each piece do?
`Actions: They are a chunk of data that is sent from the application to the redux store, using dispatch.`

`Reducers: Manage how the state of your application changes, according to the payload received from the Action Creators`

`Store: This is where the state of all your applicacion lives`
Why is the store known as a 'single source of truth' in a redux application?
`Means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer. And your React components will watch this reducer and if that reducer changes, then UI will change itself too. But never other way around.`
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
`Application State is global, in redux, it lives at the redux store, and the entire application has access to it, hooked properly of course. Component state is local, meaning it lives only in a specific component and can be updated within the component and passed down to it's children via props`
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`Redux-Thunk in my personal opinion, it's a middleware, and  it allows extended functionality to React, such as actions creators being able to declare a function, such as an HTTP request with axios within that action creator`
5. What is your favorite state management system you've learned and this sprint? 
Please explain why!
`I have no favorites yet so far since I need more hands on with them to determine what are the pros and cons, but I feel Redux it's a bit more complicated, vast, yet more stable state manager than Context API`

