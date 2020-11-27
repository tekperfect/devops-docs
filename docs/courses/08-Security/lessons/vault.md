### Vault Secrets Management

`vault operator unseal kVurBTTpmIwaXgbhsN98WXxpAdaW2gmCmq1HH9MLoz4=`

`curl -X GET -H "X-Vault-Token:s.kfluX3uiqXRgQRFk2JdsI9XS" http://3.101.119.212:8200/v1/sys/seal-status`

`vault write -address="http://3.101.119.212:8200" cubbyhole/creds/erik D0ntSh@reP@ssw0rd5`

`export VAULT_TOKEN=s.kfluX3uiqXRgQRFk2JdsI9XS`

`vault read -address="http://3.101.119.212:8200" cubbyhole/creds`

`vault write -address="http://3.101.119.212:8200" cubbyhole/creds key=erik value=rwhJYAqcT7TwfdDT`

`vault list -address="http://3.101.119.212:8200"`

`vault kv put -address="http://3.101.119.212:8200" cubbyhole/creds foo=world`

`vault namespace list -address="http://3.101.119.212:8200"`

`vault secrets enable -address="http://3.101.119.212:8200" aws`

`vault secrets enable -address="http://3.101.119.212:8200" ssh`

`vault secrets enable -address="http://3.101.119.212:8200" -max-lease-ttl=30m database`

