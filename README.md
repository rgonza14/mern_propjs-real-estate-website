<!-- prettier-ignore-start -->

# Propjs - A real estate web

![Main image](/resources/image1.png)


## Table of contents

* [Introduction](#introduction)
* [Main Features](#main-features)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation and configuration](#installation-and-configuration)
    * [Run Locally](#run-locally)
    * [Login As Admin](#login-as-admin)
* [Technologies used](#technologies-used)
* [Author](#author)


## Introduction

Propjs is a web project created with MERN Stack technologies. It is aimed at providing the user with information about the different properties that are for sale or rent. It also allows the management of administrators and real estate agents.

## Main Features

-   Responsive client view
-   Implementation of Google Maps for property locations
-   Management of admins, real estate agents and properties
-   Ability to send e-mails through the website

## Getting Started

### Prerequisites
Before you begin, make sure you have the following installed and configured:
* NodeJS
* MongoDB

### Installation and configuration
1. Clone the repository.
```
    git clone URL
```
2. Using the terminal of your choice, install the dependencies for frontend and backend.
```
    cd frontend
    npm install
```

```
    cd backend
    npm install
```

3. Create an `.env` file in the root directory of the `frontend` and `backend`. Then add the environment variables as shown in the `.env.template`. Don't forget to provide your own credentials in both files. 

In the `frontend/.env` file

* For instructions on how to obtain `GOOGLE_MAPS_API_KEY` please see the following [guide](https://developers.google.com/maps/documentation/embed/get-api-key?hl=es-419).

>[!NOTE]
> This project is built with `ViteJs`, therefore it is important that the environment variables of the frontend directory, have the `VITE` prefix to prevent accidentally leaking env variables to the client. For more information see [here](https://vitejs.dev/guide/env-and-mode#env-files).


In the `backend/.env` file

* Please follow [this tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i) to create your mongoDB connection url, which you'll use as your `DB_CONNECTION` in the environment variables file.

* In this case, Gmail will be used as a service to send emails through Nodemailer. Therefore, you must indicate `ACCOUNT_EMAIL` and `PASSWORD_EMAIL` (generated as [app password](https://support.google.com/mail/answer/185833?hl=en&sjid=14245756237078203308-SA) in Google).

### Run Locally

Finally, run the following command in the root of the backend and frontend directory.

```
    npm run dev
```

### Login As Admin

If you are running the project locally, you can login as admin from the URL `localhost:5173/admin` with the user **admin** and the password **adminadmin**.

## Technologies used

This project was created using the following technologies.


#### Backend
* Express 
* Node Js
* Bcryptjs
* Nodemailer

#### Frontend
* React Js
* Redux Toolkit
* React Icons
* Google Maps API
* React Router
* React Toastify
* Styled Components
* Vite Js
* React Modal
* React Data Table Component
* Axios
* Cloudinary

#### Database
* MongoDB


## Author

Made by [rgonza14](https://github.com/rgonza14)




<!-- prettier-ignore-end -->
