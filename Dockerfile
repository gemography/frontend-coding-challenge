From node:17-alpine3.14
ENV PATH="./node_modules/.bin/$PATH"
COPY . .
RUN npm run build 
CMD ["npm", "start"]