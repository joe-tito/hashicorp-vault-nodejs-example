
console.log('Using Vault at: ' + process.env.VAULT_ADDR);

const Vault = require('hashi-vault-js');

// Configure connection to Vault. If you enable https for production, you'll need to 
// supply proper cerificates. HTTP should only be run in development environments.
const vault = new Vault({
    https: false,
    // cert: './client.crt',
    // key: './client.key',
    // cacert: './ca.crt',
    baseUrl: 'http://127.0.0.1:8200/v1', 
    rootPath: 'secret',
    timeout: 1000,
    proxy: false
});

// Run a health check make sure Vault is in a good state and you can connect
const healthCheck = async () => {
    console.log('Running Vault health check.');
    return await vault.healthCheck();
}

// Read a secret from Vault
const readSecret = async(name) => {
    console.log('Reading secret name: ' + secret.name)
    return await vault.readKVSecret(process.env.VAULT_TOKEN, name);
}

// Update a secret in Vault
const writeSecret = async(name, data) => {
    console.log('Updating secret name: \'' + name + '\' to Vault');
    console.log('Updating secret data:');
    console.log(data);
    return await vault.updateKVSecret(process.env.VAULT_TOKEN, name, data);
}

let secret = {
    name: 'hello',
    data: {
        item1: 'adp is awesome',
        item2: 'vault rocks!'
    }
}

let newData = {
    item1: 'new data'
}

const callTasks = () => 
    healthCheck()
    .then((status) => {

        console.log(status);

        writeSecret(secret.name, secret.data).then(() => {

            readSecret(secret.name).then((returnedSecret) => {
                console.log(returnedSecret.data);

                writeSecret(secret.name, newData).then(() => {

                    readSecret(secret.name).then((returnedSecret) => {
                        console.log(returnedSecret.data);
                    });
                });
            });
        });
    });

callTasks();