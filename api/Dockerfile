FROM mcr.microsoft.com/dotnet/sdk:latest AS build
WORKDIR /srv
COPY . .
RUN dotnet publish -o ./build

FROM mcr.microsoft.com/dotnet/aspnet:latest
WORKDIR /srv
COPY --from=build /srv/build .
EXPOSE 8080
ENTRYPOINT ["./api"]