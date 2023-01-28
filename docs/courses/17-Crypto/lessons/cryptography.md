## Cryptography

Cryptography consists of two parts: encryption and decryption. Cryptography mainly referresto encryption, which is the process of converting ordinary information (the information that needs to be passed on securely) into unintelligible text, also called ciphertext. But today, cryptography is also about the second half of decryption, which is basically the reverse, in that it entails converting the unintelligible ciphertext back to plaintext.

With the advancements of electronics and computing, cryptography has moved beyond pen and paper; it has become more complex today. As security breaches have increased in frquency and pace; there are different ways in which data can be intercepted. 

The most common technique is the brute-force search or exhaustive search; it’s a trial and error method. Also known as penerate and test, it is a very general problem-solving technique that mandates systematically enumerating all possible candidates for the solution and checking whether each candidate satisfies the problem's statement. In other words, the person wanting to intercept the data tries to do so by testing out all possible data options to gain access to the data in a readable format.

In addition to this technique keystroke logging, often referred to as keylogging or keyboard capturing. Is the action of recording (logging) the keys struck on a keyboard, typically covertly, so that the person using the keyboard is unaware that their actions are being monitored. Data can then be accessed by the person operating the logging program. A keylogger can be either software or hardware. In addition to this, there are several more complex methods that can be used today to access confidential information.

Modern cryptography, which draws heavily from the disciplines of mathematics, computer science, electrical engineering, communication science, and physics, aims to defend our data against these attacks on privacy. This brings us to the question: How is encryption usually achieved today? The answer is: algorithms.  In modern times, encryption has been made possible by using algorithms that have a key to encrypt and decrypt information. These keys convert the messages and data into “digital gibberish” through encryption and then return them to the original form through decryption.

Symmetric encryption is where the same key is used for encryption and decryption. So the message “I won’t be at work today” can read like “xCvI8?lfgh” which reads like gibberish as it is made up of different characters, i.e letters, numbers and symbols, but only the intended recipient, other than the sender, has this private key.

This is why there also exists the option of asymmetric encryption where different keys are used for encryption and decryption; both public and private keys come into play. To understand this better, think about how a mailbox works. Everyone knows where it is; the location of mailbox is public knowledge. This knowledge is a public key, but that knowledge alone is not enough to get to the letters in the mailbox. For that, one needs the private key; in this case, it’s the mailbox key that only its owner has. So when a person uses asymmetric key encryption to send a message, both the sender and the recipient begin by generating a key pair (i.e. a public and a private key each) on their respective computers. A popular way of doing this is using the RSA algorithm, which comes up with a set of a public and private key that are mathematically linked to each other. The public key is then used to encrypt data that can be decoded/ decrypted only with the help of the corresponding private key. This means that knowing / having the public key alone won’t get you the private key; it’s why this method is called asymmetric encryption and is known to be the safer option.

### Cryptanalysis

What is cryptanalysis? It’s the study of analyzing information systems in order to study/decode the hidden aspects of the systems. Cryptanalysis is what one resorts to when one wishes to breach cryptographic security systems and gain access to the contents of encrypted messages, even if the cryptographic key (including private key in cases of asymmetric encryption) is not known. Cryptanalytic methods these days usually include solving carefully constructed problems in pure mathematics, the best-known being integer factorization. Used for hacking and often also for military espionage, cryptanalysis is a complex evolving field.

### Modern Uses of Cryptography 

Historically, cryptography has been used to hide messages from third parties or unintended recipients or interceptors. Today, it is used in its modern form for information security purposes such as data confidentiality, data integrity, identity authentication, credentialing systems, digital signatures, electronic money (for instance, Bitcoin) and secure multi-party computation. Timestamping, for instance, is a cryptographic technique that can certify that a certain electronic document, communication existed or was delivered at a particular time. All of this shows that without cryptography, hackers could get into our e-mail, eavesdrop on our phone conversations, tap into cable companies, or even break into our bank accounts.

Multisig is short for multi-signature, a lock that only opens with enough keys, out of a set of predeﬁned keys. For example, you can set a multisig wallet to only send a transaction if at least 2 out of 3 key holders sign on it. Multisig is available only in a handful of Bitcoin wallets and is most useful for managing a joint account or adding extra security to an individual account.

Cold Wallets are like a normal Wallet or purse in which one stores currency. Similarly, in cryptocurrencies wallet, cryptocurrencies like Bitcoin and Ethereum are stored. Crypto wallets interact with blockchain by interacting with a special algorithm, this algorithm generates keys for the wallets. Every cryptocurrency wallet has a public address(key) and a private key. The public address is used to store cryptocurrencies and the public address is visible to everyone and the private key is only known to the user/ owner. If the private key gets lost one will not be able to access the tokens.

### Hot Wallets

Hot wallets otherwise known as software wallet is a cryptocurrency wallet that is always connected to the internet and cryptocurrency network. A hot wallet is easy to use on an exchange and is meant for everyday cryptocurrency transactions. It is used to send and receive cryptocurrency with a few clicks on the phone or computer.

Pros: These wallets are online and easy to use and they require no physical storage and no transition between offline to online for the transaction.
Hot wallets are accessible as they can be traded from hands-on devices.
These wallets can accept the various types of tokens and are ideal for traders and users with a good portfolio.
These wallets are available for free and can be created within a minutes.

Cold Wallets: Security is an issue, therefore, storing a large number of digital assets in a hot wallet is not advisable.
It leaves your funds exposed to hackers to potential security threats such as cyber theft.
Another issue is the security of the private key, which is stored on the internet and the wallet browser.
Users may lose their funds if the service decides to stop access to the service without warning.
Cold Wallets
Cold wallets otherwise known as Cold Storage, are responsible for storing private keys in an offline environment. They are not connected to the internet. Crypto transactions with cold wallets generally involve a signing process. The transaction in the cold wallets starts online and then shifts to the offline process and after completion of the signing process, the complete information of the transaction goes back to an online network. Cold Wallets have options such as hardware wallets and paper wallets.

Hardware Wallets: ardware Wallets are designed to theft-proof that even when plugged into, the computer funds cannot be stolen. 
Paper wallets function similarly to hardware wallets however paper wallets are pieces of paper that contain a public wallet address and a private key. 
It is found that cold wallets are expensive and they can store only selected cryptocurrencies others they don’t store.

Pros: 

Cold wallets have a large storage capacity. 
Most respected exchanges store the majority of the funds in the offline mode in the cold storage. 
Stealing from cold wallets is a bit difficult as they require physical possession or access to cold wallets.
Most cold wallets are encrypted with pin protection thus providing an extra layer of security.

Cons:

Cold wallets are less convenient than hot wallets because they require power and then to be connected to the internet.
These wallets are a bit expensive if someone wants to invest in crypto he also invests in these cold wallets to secure their funds.
These wallets are not suitable for trading online purchasing.
These wallets do not accept as many cryptocurrencies as most hot wallets do.
