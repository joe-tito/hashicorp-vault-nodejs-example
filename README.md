# Node.js Vault Example

This repository is meant to demonstrate some of the basic functionality of HashiCorp Vault. Specifically, it demonstrates storing and accessing secrets stored in HashiCorp's KV2 (key/value pair) engine. 

This repository demonstrates the following Vault functionality:

- How to connect a Node.js application to a running instance of Vault
- How to write a key/value secret to Vault
- How to read a key/value secret from Vault

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

## Add Hashi-Vault-JS to an existing Node.js repository

To install the Hashi-Vault-JS library into an existing Node.js application, run the following command:

```
npm install hashi-vault-js
```

To view additional documentation / how-to's for HashiVaultJS, check out Hashi-Vault-JS's github repository located here: https://github.com/rod4n4m1/hashi-vault-js

---

## Clone this repository

Clone this repository from BitBucket to your local machine.

```
git clone [TODO: PUT THE PROPER REPO HERE]
```

---

## Set environment variables

Set the following environment variables to configure which Vault server this Node.js application connects to. These variables tell NodeJs where your instance of Vault is running and which token to use for authentication.

```
export VAULT_ADDR='http://127.0.0.1:8200'
```
```
export VAULT_TOKEN='[ROOT TOKEN]'
```

---

## Run NodeJs app

Run app.js to execute the NodeJs app. You will see output when the operations performed are successful.

```
cd node_vault
node app.js
```

If the app ran successfully, you should see the following output:

    Using Vault at: http://127.0.0.1:8200
    Running Vault health check.
    {
    initialized: true,
    sealed: false,
    standby: false,
    performance_standby: false,
    replication_performance_mode: 'disabled',
    replication_dr_mode: 'disabled',
    server_time_utc: 1623348347,
    version: '1.7.2',
    cluster_name: 'vault-cluster-826c4fd5',
    cluster_id: '973965ed-654b-3eb0-50ec-bf150d1d2903'
    }
    Updating secret name: 'hello' to Vault
    Updating secret data:
    { item1: 'adp is awesome', item2: 'vault rocks!' }
    Reading secret name: hello
    { item1: 'adp is awesome', item2: 'vault rocks!' }
    Updating secret name: 'hello' to Vault
    Updating secret data:
    { item1: 'new data' }
    Reading secret name: hello
    { item1: 'new data' }
    Deleting secret name: hello

You can also login to the Vault UI to verify that the secret created in this example was stored successful. http://127.0.0.1:8200/ui