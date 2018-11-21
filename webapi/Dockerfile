FROM microsoft/dotnet:2.1-sdk-alpine AS builder
COPY . /app
WORKDIR /app
LABEL intermediate="true"
LABEL purpose="build-code"
RUN ["dotnet", "restore"]
RUN ["dotnet", "publish", "-c", "Release", "-o", "./Publish"]


FROM microsoft/dotnet:aspnetcore-runtime AS runtime
COPY --from=builder /app/Publish /app
WORKDIR /app
ENV ASPNETCORE_URLS "https://*:80"
ENTRYPOINT ["dotnet", "/app/king.dll"]
EXPOSE 80/tcp
