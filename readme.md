# Task App - a simple task management app for every one.

## Key features of our app:
 1. Simple and intuitive interface.
 2. Code that respect programmming principles.
 3. Secure user authentication and data protection.

## Application Overview

1. The application is based on tasks.

2. Each task includes:

 - 🏷️ Group – category or collection the task belongs to.

 - ⚙️ Status – can be Done, In Process, or Not Done.

 - 📅 Deadline – date by which the task must be completed.

 - 📝 Description – details of the task.

 - 📆 Creation Date – when the task was created.

## Tech stack
1. Java jdk
2. node.js (must be installed on your system)
3. Docker
4. Maven(automatically available if you use IntelliJ IDEA)
5. Git

## Instructions to run our app
1. Create a new folder and init git using
```git init```
2. Clone repository using
```git clone https://github.com/mariusss11/taskApp.git```
3. If you have PostgreSQL running locally, stop it before proceeding.
4. In cmd got to the folder and access the backend folder that will be inside taskApp folder.
```cd backend```
5. Create docker container for db using
```docker-compose up -d```
6. Open backend folder in intelij idea and run the code. Alternatively, you can run it directly from terminal using Maven:
```mvn spring-boot:run```
7. Now in cmd(terminal on linux) go back to taskApp folder and access todo-app folder(folder with frontend)
``` cd ../todo-app ```
8. Now you need to install all dependencies for frontend. Run command the following command(You need to have node.js installed):
```npm install```
9. To run frontend you need to use following command:
```npm run dev```
10. After running npm run dev, a link will appear in your terminal.
Open it in your browser — that’s your running Task App 🎉

## Frontend explanation
#### You can view the Figma design of the app using the following link 👉 : [View Figma Design](https://www.figma.com/design/TiYjG69zaONjtmOVqDx4Bu/Untitled?node-id=0-1&p=f&t=LBbTqqEBZvyE1uBn-0)
Frontend respects following folder structure:

![Folder structure](/doc-images/folder-structure.png)

##### Each folder has it's meaning.
1. 📁 app/

- Contains the main application files:

- App.tsx – defines the main routes of the app.

- App.css – includes custom global styles.

2. 🌍 locales/

- Contains translation files for multiple languages.

- Used for internationalization (i18n) of pages and components.

3. 📄 pages/

- Contains all individual pages of the application.

- Each page represents a route in the app (e.g., /home, /profile).

4. 🔌 services/

- Handles communication with the backend API.

- Organized by entities — for example: userService, taskService, etc.

5. 🧩 shared/

- Contains reusable components and utilities.

- Components are organized by their purpose (e.g., auth, profile, buttons, etc.).

6. 🧱 widgets/

- Contains larger composite components that include smaller reusable parts.

- Examples: forms, sidebars, or complex UI sections.

## Tech Stack Used in Frontend

1. TypeScript – adds static typing to JavaScript for safer, more maintainable code.

2. React – library for building user interfaces.

3. React Router – handles routing and navigation between pages.

4. React Hook Form – simplifies form handling and validation.

5. Axios – used for making HTTP requests to the backend API.

6. i18n (react-i18next) – enables multi-language support and translations.

7. React Modal – for creating modal dialogs and pop-ups.

8. React Query – manages server state and API data fetching efficiently.