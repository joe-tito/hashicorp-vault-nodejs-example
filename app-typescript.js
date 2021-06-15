var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
console.log('Using Vault at: ' + process.env.VAULT_ADDR);
var Vault = require('hashi-vault-js');
// Configure connection to Vault. If you enable https for production, you'll need to 
// supply proper cerificates. HTTP should only be run in development environments.
var vault = new Vault({
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
var healthCheck = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Running Vault health check.');
                return [4 /*yield*/, vault.healthCheck()];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
// Read a secret from Vault
var readSecret = function (name) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Reading secret name: ' + secret.name);
                return [4 /*yield*/, vault.readKVSecret(process.env.VAULT_TOKEN, name)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
// Update a secret in Vault
var writeSecret = function (name, data) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Updating secret name: \'' + name);
                console.log('Updating secret data:');
                console.log(data);
                return [4 /*yield*/, vault.updateKVSecret(process.env.VAULT_TOKEN, name, data)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var secret = {
    name: 'hello',
    data: {
        item1: 'adp is awesome',
        item2: 'vault rocks!'
    }
};
var newSecretData = {
    item1: 'adp is awesome',
    item2: 'hashi vault is super cool',
    item3: 'protect your secrets!'
};
var callTasks = function () {
    return healthCheck()
        .then(function (status) {
        console.log(status);
        writeSecret(secret.name, secret.data).then(function () {
            readSecret(secret.name).then(function (returnedSecret) {
                console.log(returnedSecret.data);
                writeSecret(secret.name, newSecretData).then(function () {
                    readSecret(secret.name).then(function (returnedSecret) {
                        console.log(returnedSecret.data);
                    });
                });
            });
        });
    });
};
callTasks();
