# Questions

### *Question 1*: Add at least 3 Project features

▶️ **Answer:** Here are three project features

#### 1. Course Selection and Summary
- **Home Component:** In the **Home** component, users can select courses by clicking a **Select** button. The component keeps track of these selections and ensures users don't make mistakes like selecting the same course twice or exceeding a 20 hours credit limit.
- **Cart Component:** The **Cart** component provides users with a clear summary of their selected courses, total credit hours, and total price. This allows users to easily review their choices at a glance, making the course selection process straightforward.

#### 2. Error Handling and Alerts
- **Home Component:** To enhance user experience, the **Home** component utilizes pop-up alerts (using SweetAlert2) when users make mistakes. For example, if a user attempts to select the same course twice or exceeds the credit hour limit, an alert informs them about the issue. This helps users avoid errors and make valid selections.

#### 3. Component Reusability
- **Home and Cart Components:** Both the **Home** and **Cart** components are designed with reusability in mind. This means these components can be easily integrated into different parts of the application, promoting code efficiency and consistency. For example, the **Cart** component can be used to display summaries in various sections of the app.

These features collectively contribute to a user-friendly course selection experience, ensuring that users can make informed choices, receive feedback on errors, and have a clear summary of their selections. Additionally, the modular design of the components enhances code reusability and maintainability, allowing for efficient development and scalability.

### *Question 2*: Discuss how you managed the state in your assignment project.

▶️ **Answer:** The **state** in my project is managed primarily in the **Home** component, where I maintain state related to course data, user selections, total credit hours, remaining credit hours, and total price. The **Cart** component, on the other hand, receives this state information as **props** and is responsible for rendering and displaying this data to the user without managing its own local state. This approach follows a common pattern in React where state is managed at the *highest level possible* and passed down to *child components* via props for rendering and display purposes. 
