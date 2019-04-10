## Simple MultiSignature Wallet
A smart contract that implements a multi-signature wallet with facilities like adding and removing owners to the wallet, ability to sign confirmation from owners, adding ether to the wallet and finally transferring ether for its purpose with multiple required signatures. 



### WorkFlow -

1. Deployment of contract 'SimpleMultiSigWallet.sol' by Contract Owner.
2. Addition of ether to wallet by any owner using fallback function.
3. Balance of Wallet can be checked using walletBalance.
4. Only Contract Owner can add or remove other owners to wallet using addOwner and removeOwner repectively.
5. Any owner can request for withdrawl of amount from wallet which will initialize transaction and generate transactionId.
6. To get list of ongoing active transactions method getActiveTransactions can be invoked.
7. Atleast 2 confirmations from other owners is required to complete transaction.
8. Owners can confirm transaction with transactionId using confirmTransaction.
9. Owner can also delete the submitted transaction using deleteTransaction.
10. After 2 confirmations to transaction, it will execute and amount will be transferred destination account.



