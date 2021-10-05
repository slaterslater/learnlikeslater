# LearnLikeSlater : Keystone-Railway

Ensure you have the following tools installed:

* [git](https://git-scm.com/downloads)
* [NodeJS](https://nodejs.org/en/download) (v14.13 or higher)
* [Yarn](https://classic.yarnpkg.com/en/docs/install) (or `npm` will also work)
* [Railway CLI](https://docs.railway.app/develop/cli)

If you're on MacOS and use [Homebrew](https://brew.sh), you can install all these at once:

## Create Railway App

* Go to [Railway](https://railway.app/) and create a new app.
* Add the PostgresSQL plugin
* Add a Variable named **PORT** and set its value to **${{ PGPORT }}**
* go to the **setup** tab and copy the Railway project ID

```sh
# Install the prerequisite tools
brew install git node yarn railwayapp/railway/railway

# Install the node modules:
yarn

# Open a browser window to authenticate you
railway login

# Replace "my-keystone6-railway-app" with your Railway project ID
railway link my-keystone6-railway-app

# Runs your local code (in dev mode) against a Railway-hosted database
railway run yarn dev
```

## Deploy

```sh
railway up
```