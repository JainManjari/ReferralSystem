# Referral System

It allows employees to get the personalized referral code for referring their friends or families.
This project uses Node Js for the backend and Mongo DB for the database.

### Functional Requirements

1. Creating new employees. Allowing employees to personalised their referral codes.
2. Creating new referrees from referral code.
3. Depicts referral history and gives incentives to employees on referring.
4. It also sends out <b>emails and notifications</b> in real time.
5. Allowing employees or referees to wthdraw from the program any time.

### Entities

1. Person

#### Person as Employee

```
{
    "_id": {
        "$oid": "664f583d653601450dc7a233"
    },
    "referees": [
        {
            "$oid": "664f594951d2ca470b041543"
        }
    ],
    "firstName": "Manjari",
    "lastName": "Jain",
    "password": "1",
    "email": "manjarijain98@gmail.com",
    "referralCode": "MAN75JAI",
    "isEmployee": true,
    "createdAt": {
        "$date": {
            "$numberLong": "1716475965511"
        }
    },
    "updatedAt": {
        "$date": {
            "$numberLong": "1716476233388"
        }
    },
    "__v": {
        "$numberInt": "1"
    }
}

```

#### Person as Referee

```
{
    "_id": {
        "$oid": "664f594951d2ca470b041543"
    },
    "referees": [],
    "firstName": "Harry",
    "lastName": "Potter",
    "password": "1",
    "email": "harrypotter@uk.com",
    "referralCode": "MAN75JAI",
    "isEmployee": false,
    "referedBy": {
        "$oid": "664f583d653601450dc7a233"
    },
    "createdAt": {
        "$date": {
            "$numberLong": "1716476233101"
        }
    },
    "updatedAt": {
        "$date": {
            "$numberLong": "1716476233101"
        }
    },
    "__v": {
        "$numberInt": "0"
    }
}
```

### API Design

1. Create an employee:

```
POST '/employees/sign-up'
HEADER 'Content-Type: application/json'
BODY '{
    "first_name": "Raghav",
    "last_name": "Jain",
    "email": "rj@gmail.com",
    "password": 1,
    "confirm_pwd": 1
}'
RESPONSE
{
    "data": {
        "employee": {
            "first_name": "Raghav",
            "email": "rj@gmail.com"
        }
    }
}
```

2. Edit an referral code:

```
POST '/employees/edit-code'
HEADER 'Content-Type: application/json'
       'person_id'
BODY '{
    "referral_code": "MAN75JAI"
}'
RESPONSE
{
    "data": {
        "employee": {
            "first_name": "Manjari",
            "referral_code": "MAN75JAI"
        }
    }
}
```

3. Sign in for an employee

```
POST '/employees/create-session'
HEADER 'Content-Type: application/json'
       'person_id'
RESPONSE
{
    "data": {
        "employee": {
            "first_name": "Manjari",
        }
    }
}
```

4. Sign out for an employee

```
POST '/employees/sign-out'
HEADER 'Content-Type: application/json'
       'person_id'
RESPONSE
{
    "data": {
        "employee": {
            "first_name": "Manjari",
        }
    }
}
```

5. Destroy account for an employee

```
GET '/employees/delete-account'
HEADER 'Content-Type: application/json'
       'person_id'
RESPONSE
{
    "data": {
        "employee": {
            "first_name": "Manjari",
        }
    }
}
```

6. Create a referee:

```
POST '/referees/sign-up'
HEADER 'Content-Type: application/json'
BODY '{
    "first_name": "Raghav",
    "last_name": "Jain",
    "email": "rj@gmail.com",
    "password": 1,
    "confirm_pwd": 1,
    "referral_code":"MAN75JAI"
}'
RESPONSE
{
    "data": {
        "referee": {
            "first_name": "Raghav",
            "email": "rj@gmail.com",
            "referral_code":"MAN75JAI"
        }
    }
}
```

7. Sign in for an referee

```
POST '/referees/create-session'
HEADER 'Content-Type: application/json'
       'person_id'
RESPONSE
{
    "data": {
        "referee": {
            "first_name": "Raghav",
        }
    }
}
```

8. Sign out for an referee

```
POST '/referees/sign-out'
HEADER 'Content-Type: application/json'
       'person_id'
RESPONSE
{
    "data": {
        "referee": {
            "first_name": "Raghav",
        }
    }
}
```

9. Destroy account for an referee

```
GET '/referees/delete-account'
HEADER 'Content-Type: application/json'
       'person_id'
RESPONSE
{
    "data": {
        "referee": {
            "first_name": "Raghav",
        }
    }
}
```

### Current Architecture
<img width="832" alt="currentarch" src="https://github.com/JainManjari/ReferralSystem/assets/54873596/ed931e7c-a3b5-4f9e-96eb-0be229ae4a3e">



### Screenshots

<ol>
    <li> 
        <h3>Home Page</h3>
        <img width="1788" alt="home" src="https://github.com/JainManjari/ReferralSystem/assets/54873596/97a8f0d7-ac43-4573-b888-9d900ade02b9">
        <br>
        <br>
    </li>
    <li>
        <h3>Employee sign up</h3>
        <img width="1699" alt="signupemployee" src="https://github.com/JainManjari/ReferralSystem/assets/54873596/db6afa55-3725-4fbb-8772-ef5cb8967911">
        <br>
        <br>
    </li>
    <li>
        <h3>Referee sign up</h3>
        <img width="1680" alt="signupreferee" src="https://github.com/JainManjari/ReferralSystem/assets/54873596/3e07bfd9-0aa9-452e-a3a2-01a679d95de4">
        <br>
        <br>
    </li>
    <li>
        <h3>Employee login in</h3>
        <img width="1688" alt="employeelogin" src="https://github.com/JainManjari/ReferralSystem/assets/54873596/f052e855-ec10-4a5c-8b53-753fd8358e0d">
        <br>
        <br>
    </li>
       <li>
        <h3>Referee login in</h3>
        <img width="1704" alt="refereelogin" src="https://github.com/JainManjari/ReferralSystem/assets/54873596/e65c7ffb-356c-4b4c-b1f0-f6a4b2ca051a">
        <br>
        <br>
    </li>
       <li>
        <h3>Employee sign in after referring</h3>
        <img width="1594" alt="employeeloginafterreferring" src="https://github.com/JainManjari/ReferralSystem/assets/54873596/ae736469-0c71-41ff-8aae-6981da6af036">
        <br>
        <br>
    </li>
</ol>

## Installation

- First download or clone the project
- Install NVM (Ubuntu/WSL in VS Code)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

- To install Node

```
nvm install 10.19.0
```

- Please download mongo db on your system by this <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/">Link</a> or you can also use your atlas account.

- To install redis-server for sending out mails.

```
sudo apt-get update
sudo apt-get install redis-server
```

After this command, you can cross-check whether redis-server has been
properly installed or not:

```
redis-cli ping
```

<img src="assets/images/redis.JPG" >

- You can use your own gmail address and password to send out emails by replacing these lines 11 and 12 by your info.

<img src="assets/images/nodemailer.JPG" >

- Open the project directory on cmd prompt and install nodemon

```
npm install -g nodemon
```

- To install remaining dependencies

```
npm install
```

<br>

## To start the project

<br>

- Open one terminal

```
npm start
```

- Open other terminal

```
redis-server
```

- Run the code on http://localhost:8000/
  <br><br>

## For further assistance please reach me @ manjarijain98@gmail.com
