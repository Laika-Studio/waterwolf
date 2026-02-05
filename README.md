# WaterWolf

WaterWolf is a fast, minimal browser that protects your privacy using AI features. It includes an interface designed to minimize distractions, and features such as:

- Full-text search for visited pages
- Ad and tracker blocking
- Automatic reader view
- Tasks (tab groups)
- Bookmark tagging
- Password manager integration
- Dark theme

Download WaterWolf from the [releases page](https://github.com/Laika-Studio/waterwolf/releases), or learn more on the [website](https://browser.gulyadog.ru/).

## Screenshots

<img alt="The search bar, showing information from DuckDuckGo" src="http://minbrowser.org/tour/img/searchbar_duckduckgo_answers.png" width="650"/>

<img alt="The Tasks Overlay" src="http://minbrowser.org/tour/img/tasks.png" width="650"/>

<img alt="Reader View" src="https://user-images.githubusercontent.com/10314059/53312382-67ca7d80-387a-11e9-9ccc-88ac592c9b1c.png" width="650"/>

## Installing

You can find prebuilt binaries for WaterWolf [here](https://github.com/Laika-Studio/waterwolf/releases). Alternatively, skip to the section below for instructions on how to build WaterWolf directly from source.

## Developing

If you want to develop WaterWolf:

- Install [Node](https://nodejs.org).
- Run `npm install` to install dependencies.
- Start WaterWolf in development mode by running `npm run start`.
- After you make changes, press `alt+ctrl+r` to reload the browser UI.

### Building binaries

In order to build WaterWolf from source, follow the installation instructions above, then use one of the following commands to create binaries:

- `npm run buildWindows`
<!-- - `npm run buildMacIntel`
- `npm run buildMacArm`
- `npm run buildDebian`
- `npm run buildRaspi` (for 32-bit Raspberry Pi)
- `npm run buildLinuxArm64` (for 64-bit Raspberry Pi or other ARM Linux)
- `npm run buildRedhat`-->

<!-- Depending on the platform you are building for, you may need to install additional dependencies:

- If you are building a macOS package, you'll need to install Xcode and the associated command-line tools. You may also need to set your default SDK to macOS 11.0 or higher, which you can do by running `export SDKROOT=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX11.1.sdk`. The exact command will depend on where Xcode is installed and which SDK version you're using.
- To build on Windows, you'll need to install Visual Studio. Once it's installed, you may also need to run `npm config set msvs_version 2019` (or the appropriate version). -->

## Contributing to WaterWolf

Thanks for taking the time to contribute to WaterWolf!

### Getting Help

If you're experiencing a bug or have a suggestion for how to improve WaterWolf, please open a [new issue](https://github.com/Laika-Studio/waterwolf/issues/new/choose).

<!-- ### Contributing Translations

#### Updating an existing language

- Find the language file for your language in the `localization/languages` directory.
- Look through the file for any items that have a value of "null", or that have a comment saying "missing translation".
- For each of these items, look for the item with the same name in the `en-US.json` file.
- Translate the value from the English file, replace "null" with your translation, and remove the "missing translation" comment.
- Make a pull request with the updated file.

[TelegramBadge]: https://img.shields.io/discord/764269005195968512.svg?label=Discord&logo=discord&logoColor=white
[TelegramUrl]: https://t.me/gulyatv
//[DownloadsBadge]: https://img.shields.io/github/downloads/minbrowser/min/total.svg
//[DownloadsUrl]: https://github.com/Laika-Studio/waterwolf/releases -->