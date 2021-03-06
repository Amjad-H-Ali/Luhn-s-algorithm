# Luhn-s-algorithm
###### CS50

### Credit
##### tl;dr
###### Implement a program that determines whether a provided credit card number is valid according to Luhn’s algorithm.
```
Number: 378282246310005
AMEX
```

##### Background
###### Odds are you or someone you know has a credit card. That card has a number, both printed on its face and embedded (perhaps with some other data) in the magnetic stripe on back. That number is also stored in a database somewhere, so that when your card is used to buy something, the creditor knows whom to bill. There are a lot of people with credit cards in this world, so those numbers are pretty long: American Express uses 15-digit numbers, MasterCard uses 16-digit numbers, and Visa uses 13- and 16-digit numbers. And those are decimal numbers (0 through 9), not binary, which means, for instance, that American Express could print as many as 10^(15) = 1,000,000,000,000,000 unique cards! (That’s, ahem, a quadrillion.)

###### Now that’s a bit of an exaggeration, because credit card numbers actually have some structure to them. American Express numbers all start with 34 or 37; MasterCard numbers all start with 51, 52, 53, 54, or 55; and Visa numbers all start with 4. But credit card numbers also have a "checksum" built into them, a mathematical relationship between at least one number and others. That checksum enables computers (or humans who like math) to detect typos (e.g., transpositions), if not fraudulent numbers, without having to query a database, which can be slow. (Consider the awkward silence you may have experienced at some point whilst paying by credit card at a store whose computer uses a dial-up modem to verify your card.) Of course, a dishonest mathematician could certainly craft a fake number that nonetheless respects the mathematical constraint, so a database lookup is still necessary for more rigorous checks.

###### So what’s the secret formula? Well, most cards use an algorithm invented by Hans Peter Luhn, a nice fellow from IBM. According to Luhn’s algorithm, you can determine if a credit card number is (syntactically) valid as follows:

##### 1. Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products' digits together.

##### 2. Add the sum to the sum of the digits that weren’t multiplied by 2.

##### 3. If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!

###### That’s kind of confusing, so let’s try an example with my AmEx: 378282246310005.


##### 0. For the sake of discussion, let’s first underline every other digit, starting with the number’s second-to-last digit:

###### 378282246310005

###### Okay, let’s multiply each of the underlined digits by 2:

###### 7•2 + 2•2 + 2•2 + 4•2 + 3•2 + 0•2 + 0•2

###### That gives us:

###### 14 + 4 + 4 + 8 + 6 + 0 + 0

###### Now let’s add those products' digits (i.e., not the products themselves) together:

###### 1 + 4 + 4 + 4 + 8 + 6 + 0 + 0 = 27

##### 1. Now let’s add that sum (27) to the sum of the digits that weren’t multiplied by 2:

###### 27 + 3 + 8 + 8 + 2 + 6 + 1 + 0 + 5 = 60


##### 2. Yup, the last digit in that sum (60) is a 0, so my card is legit!

###### So, validating credit card numbers isn’t hard, but it does get a bit tedious by hand.
