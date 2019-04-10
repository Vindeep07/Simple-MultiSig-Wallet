## Simple MultiSignature Wallet

	<p> A smart contract that implements a multi-signature wallet with facilities like adding and removing owners to the wallet, ability to sign confirmation from owners, adding ether to the wallet and finally transferring ether for its purpose with multiple required signatures. </p>


### WorkFlow -

1. Deployment of contract by Contract Owner.
2. Addition of ether to wallet by any owner using fallback function.
3. Only Contract Owner can add or remove other owners to wallet using addOwner and removeOwner repectively.
4. Any owner can request for withdrawl of amount from wallet which will initialize transaction and generate transactionId.
5. To get list of ongoing active transactions method getActiveTransactions can be invoked.
6. Atleast 2 confirmations from other owners is required to complete transaction.
7. Owners can confirm transaction with transactionId using confirmTransaction.
8. Owner can also delete the submitted transaction using deleteTransaction.
9. After 2 confirmations to transaction, it will execute and amount will be transferred.

### Steps to Execute -

To compile the project run:
```
truffle compile
```

To migrate the project run:
```
truffle migrate
```

To test the project run:
```
truffle test
```

