# Define from what image we want to build from
FROM mhart/alpine-node:latest

# Extra tools to native dependencies
# RUN apk add --no-cache make gcc g++ python git

# Install yarn to a better package management
RUN npm install --global yarn

# Define app directory
WORKDIR /app

# Files to build the app
COPY webpack.config.js /app/
COPY .babelrc /app/

# Bundle app source
COPY src /app/src

# Install app dependencies and build
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install && yarn run build

# App server
COPY server.js /app/

# Variables and command to build a production docker image without docker-compose
ENV PORT=8080
ENV NODE_ENV=production
CMD [ "yarn", "run", "start" ]
