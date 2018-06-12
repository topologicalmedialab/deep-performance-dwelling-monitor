# Deep-Performance Dwelling – Monitor

User interface of the monitor that controls some components of the Deep-Performance Dwelling.


- [Local development](#local-development)
  - [Technical requirements](#technical-requirements)
  - [Installation](#installation)
  - [Hosts file](#hosts-file)
  - [How to run site during development](#how-to-run-site-during-development)
- [Deployment to Raspberry Pi](#deployment-to-raspberry-pi)
  - [Build project on local development machine](#build-project-on-local-development-machine)
  - [Package build](#package-build)
  - [Deploy build](#deploy-build)


## Local development

### Technical requirements

Ensure you install these modules globally on your development machine:

- [Node](https://nodejs.org/)
- [Webpack v4 or higher](https://webpack.js.org/)
- [webpack-cli](https://webpack.js.org/api/cli/)


### Installation

Once you checked out this project, run this command in a Terminal window:

    npm install


### How to run site during development

1. Run this command in a Terminal window:

        webpack -d

2. Open a browser and load `index.html` file in the `www` directory.


## Deployment to Raspberry Pi

### Build project on local development machine

Before deploying the monitor interface to the Raspberry Pi, ensure that the project is built locally:

1. Check out the project from the repository

2. Follow the following instructions of the [Local development](#local-development) section above:  

    a. [Technical requirements](#technical-requirements)
    
    b. [Installation](#installation)  

3. Run this command in a Terminal window: `webpack`. It will compile the interface assets into the appropriate directory.


### Package build

Once you ensured that you have a build of the project, run this command in a Terminal window:

    npm run package

In the case where there is no build, the command will fail.

The command above archive a `.zip` file of the necessary assets into the `assets/archives/` directory. The `.zip` file is always appended with the date at which the file is created.

This archive is what needs to be deployed to the Raspberry Pi.


### Deploy build

There are a few ways to deploy files onto the Raspberry Pi, however the most efficent one would be to use the `scp` Unix command in a Terminal.

    scp <local-file> <username>@<ip>:<remote-path>

Let's show an example. Let's assume the following:

- The Terminal window is opened from the root of the project directory;
- The Pi IP address is `10.10.10.10`;
- The Pi credentials are still at the default settings*:
    - Username: `pi`
    - Password: `raspberry`

The command would then read

    scp assets/archives/dpd-monitor-2017-07-24.zip pi@10.10.10.10.:/home/pi/www

If the Terminal prompts for a password, use the one associated with the username.

\* For security reasons, these credentials should be changed for a production environment.

From this point it's a simple matter of unarchiving the `.zip` file in the `/home/pi/www` directory of the Pi.