# QlikView extension template (ES2015 + BABEL + WebPack + BrowserSync)

## Installation

Download and unzip template.

Hit

```sh

 npm install

 ```
 to install all required dependencies.

## Configuration

Modify *Definition.xml*.

Change **EXTENSION_NAME** parameter in *src\config.js*. 
**EXTENSION_NAME** should match with the folder name.

Set appropriate document url in the *webpack.config.js* for **BrowserSyncPlugin**.

## Usage

```sh

npm run dev # for development

# or

npm run build # for production

```

## Maintainers

[alner]

## License

MIT