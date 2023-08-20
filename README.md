# The plugin_pd_training Cartridge

This repository contains the sample component types for Salesforce B2C Commerce Page Designer. Including a Youtube banner and an Album layout with its component.

1. Youtube Banner Component

| Field Name | Required |
| --- | --- |
| The Youtube Video ID | Yes |
| The width of the video player | No |
| The height of the video player | No |
| Automatically start playing video | No |
| Display player controls | No |
| Loop the Video | No |

2. Albums Layout Component

| Field Name | Required |
| --- | --- |
| Heading Text | No |

3. Album tile with caption and action Component

| Field Name | Required |
| --- | --- |
| Image | Yes |
| Alt Text | No |
| Text Below Image | No |
| Action Button Text | No |
| Action Button Link | No |

## Compatibility

* This cartridge works with SFRA v6 and newer.
* This cartridge works with a compatibility mode of 18.10 and newer.

## Get Started

1. Clone this repository.

2. Run `npm install` to install all of the local dependencies

3. Run `npm run compile:scss` from the command line that would compile all client-side SCSS files.

4. Create `dw.json` file in the root of the project. Providing a WebDAV access key from BM in the `password` field is optional, as you will be prompted if it is not provided.
```json
{
    "hostname": "your-sandbox-hostname.demandware.net",
    "username": "AM username like me.myself@company.com",
    "password": "your_webdav_access_key",
    "code-version": "version_to_upload_to"
}
```

5. Run `npm run uploadCartridge` to upload the cartridge to the sandbox you specified in `dw.json` file.

8. You should now be ready to see the new components in BM Page Designer.


# NPM scripts

Use the provided NPM scripts to compile and upload changes to your Sandbox.

## Compiling your application

* `npm run compile:scss` - Compiles all .scss files into CSS.

If you are having an issue compiling scss files, try running 'npm rebuild node-sass' from within your local repo.

## Linting your code

* `npm run lint` - Execute linting for all JavaScript and SCSS files in the project. You should run this command before committing your code.
* `npm run lint:css` - Execute linting for all SCSS files in the project. You should run this command before committing your code.
* `npm run lint:js` - Execute linting for all JavaScript files in the project. You should run this command before committing your code.

## Watching for changes and uploading

`npm run watch` - Watches everything and recompiles (if necessary) and uploads to the sandbox. Requires a valid `dw.json` file at the root that is configured for the sandbox to upload.

## Uploading

`npm run uploadCartridge` - Will upload the cartridge to the server. Requires a valid `dw.json` file at the root that is configured for the sandbox to upload.

`npm run upload <filepath>` - Will upload a given file to the server. Requires a valid `dw.json` file.