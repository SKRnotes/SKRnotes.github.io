# [SKRNotes.github.io](skrnotes.github.io)

This project is made using the[Yeoman Generator](https://github.com/yeoman/generator-angular). Check it out for further useful features. 
## Installation for Devs
We are going to need the following: (Where[links]()are provided, please **download** them before proceeding)
* [NodeJS](https://nodejs.org/en/) 6.11.4 LTS
  * NPM (For package installation)
* [Ruby](https://rubyinstaller.org/downloads/) or use Homebrew (For SCSS)
* Bower (For package installation)
* Grunt (For building, testing, and serving the website)
* ~~Karma~~ (For testing, but we don't need it in this simple project)

Clone this project, then run the following inside the terminal of the project root directory:
<pre>
> npm install -g grunt-cli bower yo generator-karma generator-angular
    // Installs grunt, bower, yeoman, karma, and angular generator.
> gem install compass (after installing Ruby)
    // Installs compass
> bower install
    // To install required components
</pre>
This process takes a while, so go ahead and grab a coffee.

##### npm vs bower
From what I understood, they are technically doing the same package installation, but
* **Bower** 
  * Prompts user to select a version of the package to keep if it exists. 
  * Components are kept in `bower_components` file.
* **npm** 
  * Simply installs everything, even if it exists already. Be careful, you could be wasting lots of memory with duplicates. 
  * Components are kept in `node_modules`

After any installation, include the library in `/app/scripts/app.js` as well. <br>
Hence for formalities (and to save space), we shall use `bower` to install any libraries that we will use in coding the website, and `npm` for any back-end support. 

## Build & development
Run `grunt build` for building and `grunt serve` to serve the website.

<pre>
IPv4address:port
e.g. localhost:9000
</pre>
Inside *Gruntfile.js*
* Find the `port` here, modify it if you wish. <br>
* Set `IPv4address` to `0.0.0.0` to enable LAN hosting if it isn't already, or leave it as localhost.

### Programming
About adding a new page and routing. Check [angular:route.](https://github.com/yeoman/generator-angular#route)Should I put the details here?
