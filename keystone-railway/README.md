# LearnLikeSlater : Keystone-Railway

Ensure you have the following tools installed:

* [git](https://git-scm.com/downloads)
* [NodeJS](https://nodejs.org/en/download) (v14.13 or higher)
* [Yarn](https://classic.yarnpkg.com/en/docs/install) (or `npm` will also work)
* [Railway CLI](https://docs.railway.app/develop/cli)

If you're on MacOS and use [Homebrew](https://brew.sh), you can install all these at once:

```sh
# Install the prerequisite tools
brew install git node yarn railwayapp/railway/railway
```

If you're on a different platform, click though the links above and follow the relevant instructions.

## Local Development

Install the node modules:

```sh
yarn
```

Link to Railway

```sh
# This will open a browser window to authenticate you
railway login

# Replace "my-keystone6-railway-app" with your Railway project ID
railway link my-keystone6-railway-app
```

## Start The App

Make sure to [start your PostgreSQL server](https://tableplus.com/blog/2018/10/how-to-start-stop-restart-postgresql-server.html)

```sh
# Starts a PostgreSQL server on macOS
pg_ctl -D /usr/local/var/postgres start
# Runs your local code (in dev mode) against a Railway-hosted database
railway run yarn dev
```