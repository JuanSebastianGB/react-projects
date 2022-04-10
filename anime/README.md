Requires docker, docker-compose.

To run:

git clone https://github.com/JuanSebastianGB/react-projects.git'
cd anime
docker-compose up
# or, to daemonize
docker-compose up -d

Troubleshooting

docker-compose stop
docker stop $(docker ps -aq)
docker rm -f $(docker ps -aq)
docker rmi -f $(docker images -aq)
Make sure your docker is working by running something like docker run hello-world

