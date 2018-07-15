#sudo docker run --name=appserver -d -v /vagrant/bitbucket/cs6261_project5/app:/app -p 8000:8000 project5_testenv

FROM node:8

RUN npm install http-server -g

WORKDIR /vagrant/bitbucket/cs6261_project5/

ENTRYPOINT ["http-server", "-p", "8000", "-c-1"]
CMD ["/app"]

EXPOSE 8000
