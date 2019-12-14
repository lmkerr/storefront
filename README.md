# PROJECTS
api
presentation

# API
To dockerize and deploy:

cd api
sudo docker build --rm -f Dockerfile -t storefront-api:latest
sudo docker run -p 3000:3000 storefront-api:latest

# PRESENTATION
cd presentation
sudo docker build --rm -f Dockerfile -t storefront:latest
sudo docker run -p 80:80 storefront:latest