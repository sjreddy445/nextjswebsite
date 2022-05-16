##FROM node:alpine

# To insyall AWS Cli while building docker image
#RUN apt-get update && apt-get install -y python3-pip && pip3 install awscli --upgrade --user

# Set working directory 
##WORKDIR /

# Install PM2 globally
##RUN npm install --global pm2

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
##COPY ./package*.json ./

# Install dependencies
##RUN npm install --production

# Copy all files from local directort to docker image working directory
##COPY ./ ./

# Build the getedge applicaation
##RUN npm install
##RUN npm run build

# To send Static Files to AWS s3 Bucket
#RUN npm next export -o .next-export \
#    && rm -rf .next/bundles \
#    && ~/.local/bin/aws s3 mv --recursive --cache-control='public, max-age=31536000, immutable' \
#       /app/.next-export/_next s3://BUCKET_NAME/_next


# To uninstall awscli after sending static files to aws s3 bucket
#pip3 uninstall awscli -y


# Expose the listening port
##EXPOSE 3030

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
##USER node

# Launch app with PM2
##CMD [ "pm2-runtime", "start", "npm", "--", "start" ]

FROM node:latest
WORKDIR /
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
EXPOSE 3030
CMD ["npm","start"]


