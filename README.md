# Node.js Vault Example

This repository is meant to demonstrate some of the basic functionality of HashiCorp Vault. Specifically, it demonstrates storing and accessing secretes stored in HashiCorp's KV2 (key/value pair) engine. 

This repository demonstrates the following Vault functionality:

- How to connect a Node.js application to a running instance of Vault
- How to create a new key/value secret and store it in Vault
- How to retried an existing key/value secret from Vault
- How to delete an existing key/value secret from Vault

## NodeJS Installation

If you do not have Node.js installed on your machine already, please follow the instructions below to install the latest version of Node.js

1) Connect to your Linux instance 

2) Install Node Version Manager (nvm) by running the following.

    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
    ```

3) Activate nvm by running the following.

    ```
    . ~/.nvm/nvm.sh
    ```

4) Use nvm to install the latest version of Node.js by running the following. 
   
    ```
    nvm install node
    ```

5) Test that Node.js is installed and running correctly by running the following.

    ```
    node -e "console.log('Running Node.js ' + process.version)"
    ```

    If Node.js is installed correctly, you should see the following message:

    > Running Node.js **[VERSION]**

---

## Adding NodeVault to an existing Node.js repository

To install the NodeVault library into an existing Node.js application, run the following command:

```
npm install node-vault
```

The official Node.js library supported and recommend by HashiCorp for Vault can be found here: https://github.com/kr1sp1n/node-vault

If you look in the /examples folder, you can see more detailed examples of common Vault operations beyond what is demonstrated in this repository.

---

## Clone this repository

First, clone this repository from BitBucket

```
TODO: PUT THE GIT CLONE COMMAND HERE POINTING TO RELEVANT REPO
```