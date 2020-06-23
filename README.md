# React-Node Social Login Auth App for Google, Facebook and Github.

## Social Login

<ul>
    <li><a href="#google">Google</a></li>
    <li><a href="#facebook">Facebook</a></li>
    <li><a href="#github">Github</a></li>
</ul>

## Working

1. **OAuth with Redirect**

Client makes the request **_->_** Request is received by express server **_->_** Server then sends the request to API Provider(Google, Facebook or Github) **_->_** API Provider authenticates and sends the data to express server **_->_** Express server redirects to new provided URL with data.

> **Note:** Here client and server are the same entity and are operating on the same port. We can simply redirect the user on a new callback URL after getting the data from provider, keeping our Private Key Safe. But with modern application architecture, it is not possible for a client like React to keep its Keys Private while authenticate with an OAuth Provider that needs a Private API Key.

There is a solution for this problem.

**_To use Sockets_**

2. **React Authentication via Sockets**

Socket registered with Server **_->_** Client makes request to express server **_->_** Express server sends the request to Provider API **_->_** Provider API authenticates and sends back data to express server **_->_** Express Server sends back data via sockets.

## How to use

1. Clone this repository or simply download files.

```
git clone https://github.com/Lakshya-Saini/Social_Auth_Login_App.git
```

2. Inside Server module, install dependencies and create .env file

```
cd server && npm i && touch .env
```

3. Open .env file and create variables.

```
SESSION_SECRET=
URL=
GOOGLE_KEY=
GOOGLE_SECRET=
FACEBOOK_KEY=
FACEBOOK_SECRET=
GITHUB_KEY=
GITHUB_SECRET=
```

> SESSION_SECRET should be a unique key. You can write any valid string as your key.
> URL should be <a href="NGROK">NGROK</a> URL.
> For KEYS AND SECRET <a href="KEYS-AND-SECRET">refer this</a>

4. Inside client module, open src/components/config/keys.js and write NGROK HTTPS URL

```
export const API_URL = process.env.NODE_ENV === "production" ? "" : "NGROK_URL";
```

5. Run client and server

```
npm start
npm run dev
```

## NGROK

As we are working on localhost, It is not possible to send https request from http. These APIs will not accept http request. To resolve this we have two methods -

- To install free ssl certificates on our localhost and use them.
- To use ngrok package.

Here I'll use second method.

6. Open your terminal and install ngrok globally.

```
npm i -g ngrok
```

7. Run ngrok

```
ngrok http {port_number}
```

> **Note:** Inside port_number you have to write PORT NUMBER(without curly braces) on which your server is running. In this app PORT NUMBER is 5000.

You'll get a HTTPS URL like this - **https://5f6dc6dcd.ngrok.io**

> Paste this URL in server/.env and in client/src/components/config/keys.js
