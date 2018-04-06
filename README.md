# Wrap-a-map
> A Node app that abstracts popular mapping APIs into a single generic API service.

When using third party APIs in a large enterprise, it is nice to create wrappers for those APIs in case those third parties change. The third party change is invisable to your wrapper API consumers. This is an explortory project to see how this wrapper may look written in Node. 

## Development setup

Developed against Node 9.11.1

```sh
cd wrapamap
npm install
```

Create an env file (Any file with a '.env' extension) in the root of this project to hold your API keys from Google and Bing. Currently, this project expects: 
```sh
GOOGLE_MAPS_API_KEY="<Your API Key>"
BING_MAPS_API_KEY="<Your API Key>"
```

You can create your own API keys at the following places:
1. Google (<https://developers.google.com/maps/documentation/geocoding/get-api-key>)
2. Bing (<https://www.bingmapsportal.com/>)

## Contributing

1. Fork it (<https://github.com/kyleewalters/wrapamap/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
