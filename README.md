# Bloop Box Config

Configuration utility for Bloop Boxes.

This utility is written as a PWA, which allows you to run it on your phone even when you are offline (after you opened
it the first time). On both Android and iOS you can add the utility to your home screen, which makes it behave like a
native application. Some desktop browsers like Chrome allow you to do the same.

## Deployment

This repository is set up to create GitHub releases with a base path set to `/`. So if you want to deploy to it
yourself, you have to extract the release into the root directory of a (sub-) domain. Alternatively you can just use
our automatic GitHub Pages deployment which will always be kept up-to-date:

https://bloop-box.github.io/bloop-box-config/

## Usage

When opening the utility in your browser, you can choose between different commands to be written to a config tag. When
you are happy with the command, you can then either copy it to your clipboard, or when supported by your device (at the
time of writing, only Chrome on Android), directly write it to an NFC tag.

## Supported config commands

### Set WiFi Credentials

Tells the Bloop Box client to reconfigure the Raspberry WiFi to a new SSID and password.

### Set Server Credentials

Reconfigures the Bloop Server address and credentials.

### Set Max Volume

Sets the maximum volume (in percent) the Bloop Box client can be set to via the volume buttons.

### Add Config Tag

Instructs the Bloop Box client to accept an additional config tag (needs to be scanned after this config).

### Reset Config Tags

Removes all but the current config tag from the Bloop Box client.

### Shut Down

Instruct the Bloop Box client to perform a graceful shutdown of the OS. 
