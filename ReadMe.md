# Referral System

This is a clone of a referral portal. It allows employees to get the personalized referral code to refer their friends or families.
It gives incentives to both the referee and the employee. It also depicts referral history and giving an option to the employees/referees to withdraw from the referral system if they want to.
<br>
It also sends out <b>emails and notifications</b>. Kindly request you
to use real email addresses to see the effect.
<br>
This project uses  Node Js for the backend and Mongo DB for the database.

<br>

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

- Mongo DB has been deployed on Atlas. No need to install it on desktop. 


- To install redis-server for sending out mails.
```
sudo apt-get install redis-server

redis-cli ping 
```


- Open the project directory on cmd prompt and install nodemon
``` 
npm install -g nodemon
```

- To install remaining dependencies
```
npm install
```

- To start the project

Open one terminal
```
npm start
```
Open other terminal
```
redis-server
```

- Run the code on http://localhost:8000/
<br>
<br>

## Resume and Cover Letter has also been uploaded in "Manjari Jain" Folder.

<br>

## You can visit this project on http://100.25.170.219:8000/
<br>

## For further assistance please reach me @ manjarijain98@gmail.com/9911134023

