# Task App - a simple task management app for every one.

## Key features of our app:
 1. Simple and intuitive interface.
 2. Code that respect programmming principles.
 3. Secure user authentication and data protection.

## Tech stack
1. Java jdk
2. node.js installed in system
3. Docker
4. Maven(If you use intelij idea it will be probably installed.)
5. Git

## Instructions to run our app
1. Create a new folder and init the git using
```git init```
2. Clone the repository using
```git clone https://github.com/mariusss11/taskApp.git```
3. If you have postgresql installed stop it.
4. In cmd got to the folder and access the backend folder that will be inside taskApp folder.
```cd backend```
5. Create docker container for db using
```docker-compose up -d```
6. Open backend folder in intelij idea and run the code.
7. Now in cmd go back to the taskApp folder and access todo-app folder(folder with backend)
``` cd ../todo-app ```
8. Now you need to install all the dependencies for frontend. Run command the following command(You need to hav node.js installed):
```npm install```
9. To run the frontend you need to use following command:
```npm run dev```
10. Access the link that appears in cmd.

## Frontend explanation
#### You can see figma design accessing the folowing link: [Design](https://www.figma.com/design/TiYjG69zaONjtmOVqDx4Bu/Untitled?node-id=0-1&p=f&t=LBbTqqEBZvyE1uBn-0)
