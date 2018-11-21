 
 docker stop $(docker ps -a | grep "dockerize-dotnet-apps-poc" | awk '{ print $1 }')
 docker rm $(docker ps -a | grep "dockerize-dotnet-apps-poc" | awk '{ print $1 }')
 docker rmi $(docker images -a | grep "^dockerize-dotnet-apps-poc" | awk '{ print $3 }')
 # Cleanup any intermediate images.
 # Use this with caution as we may delete intermediate images of other builds and processes
 docker rmi $(docker images -a | grep "^<none>" | awk '{ print $3 }')