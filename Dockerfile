#sudo docker run --name=appserver -d -v /vagrant/bitbucket/cs6261_project5/app:/app -p 3000:3000 project5_deploy

FROM node:8

RUN npm install http-server -g

WORKDIR /vagrant/bitbucket/cs6261_project5/

ENTRYPOINT ["http-server", "-p", "3000", "-c-1"]
CMD ["/app"]

EXPOSE 3000
