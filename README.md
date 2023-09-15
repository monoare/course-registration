# Questions

#### Question 1: Add at least 3 Project features

▶️ **Answer:** Here are three project features

- Virtual DOM
- Props
- Hooks

#### Question 2: Discuss how you managed the state in your assignment project.

▶️ **Answer:** The **state** in my project is managed primarily in **Home** the component, where I maintain state related to course data, user selections, total credit hours, remaining credit hours, and total price. The **Cart** component, on the other hand, receives this state information as **props** and is responsible for rendering and displaying this data to the user without managing its own local state. This approach follows a common pattern in React where state is managed at the *highest level possible* and passed down to *child components* via props for rendering and display purposes.
