---
title: "Why do we need Blockchain?"
authors: [rahul]
sidebar_label: "Need of Blockchain"
sidebar_position: 3
---

_Do you trust bank transfers?_

![D](https://media.giphy.com/media/ghuvaCOI6GOoTX0RmH/giphy.gif)

Imagine if you wanted to transfer some funds to your friend. Ideally, you would initiate the transaction and would wait for the bank to verify the amount, deduct it from your account and credit it to your friend's account. Isn't it?

But what if one day, your bank fails!? It is not a usual case, but there are possibilities of such happening.

What if I tell you that there is no need for you to check up on the bank servers, whether they are down or up?

What if there is no need to pay fixed transaction fees on your transfer? What if you have the **power to choose your transaction fees**? How amazing would that be?

And at last, what if I told you that as an alternative to a centralized banking system, there exists/may exist a more **secure and decentralized** banking system that would never fail and have **no barriers to entry**? Anybody in the world could initiate a transaction with anybody else, no need to verify your national ID or your financial position. How would you feel?

_Now, do you trust bank transfers?_

Well, blockchain is not at all about just money transfers, financial systems, or how people often relate it with Bitcoin _(I will get there soon!)_. It is more about **trust**! Now people can trust each other and can **transact anything**, be it money, an asset, food, music, even an Idea, Yes! There exists no limitation.

**_It is the underlying technology of Blockchain that would now establish trust through cryptography and using smart agreements peer-to-peer._**

_Note: If you don't understand the above statement completely, it is perfectly fine. I like the current pace, just keep your foot steady on the pedal, and it would become clearer as we progress. Let's come back!_

---

You don't need any middle person or authority like central banks to verify your transaction, it would now happen in a perfect and transparent environment visible and notable by all the participant peers. _Remember the P2P diagram from the previous article?_

:::tip

Think of Blockchain as a technology that **provides trust and is decentralized**. Now you can imagine the infinite possibilities that exist or how you can leverage such technology for the greater good!

:::

How amazing is that?

![](https://media.giphy.com/media/rVVFWyTINqG7C/giphy.gif)

In this growing world, we need to learn to trust ourselves and each other as a community, we cannot be living our life trusting a central identity to maintain a certain decorum amongst things. For example, currently, when person A transfers X amount to person B, the bank is the middle person which notes such a transaction, and we can do nothing but trust the bank in doing so!

### Double Spending: Blockchain to the rescue.

Now consider a situation where there is no central authority to store such info and a digital fund transfer is being made, then person A can transfer X amount to person B and can also transfer a copy of X amount (since it's a digital transaction after all) to person C. Now, this creates the famous scenario of **Double Spending**.

We very well know how the central system solves this problem. How blockchain solves this problem is it _stores such information of the transaction between A and B on every participant node (or peer) in the blockchain network._ So if person A now tries to spend another X (copy) amount and send it to C, the participant nodes when they would try to store the transaction can easily determine through **consensus (amongst other nodes, since it is a P2P system)** that this transaction is indeed an invalid one and would not allow it to take place.

Now one obvious question that may arise is - _If every transaction is available on every node, that means it is public! How do we guarantee anonymity through Blockchain?_ Well, blockchain ensures anonymity by providing each participant with a **unique decentralized identity** and every transaction that is stored on the blockchain instead of having the personal details of the user, now has a unique and anonymous decentralized identity mapped to their transaction, thus ensuring perfect anonymity.

---

We have now reached the end of this article, let us try to summarise what we have till now:

_"Blockchain is some sort of a distributed database that stores information about the transaction taking place in real life of any kind (money, asset, painting, idea, etc.). It stores such information on the participating peers (nodes) in blocks (We still don't know about it!) and provides us with trust and disintermediation through cryptography and smart agreements amongst peers."_

Up until now, we should have a rough idea of what Blockchain is and why do we need it? But we still do not know how it does what it does? We will be visiting its architecture in the next article which will make this clear even further.
