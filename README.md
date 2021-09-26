# ATM_machine

It's a software for an ATM machine. This program is a command line tool.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

1. Clone down the repository:

```
git clone git@github.com:carolinadias25/atm_machine.git
```

2. Open the repo in you terminal:

```
cd atm_machine/
```

### Installing

3. Install the project:

```
npm install
```

to install the necessary libraries required for Node.js to run.

## Running the tests

4. Run the tests:

```
npm test
```

## Built With

- JavaScript - The language used;

## User Stories

```
- 1

> As a Costumer,
> I need to have a bank account
> So I can save and spend money

- 2

> As a Costumer,
> I want to have a bank balance
> So I can check how much money I have to spend

- 3

As a Customer,
I want to be able to withdraw from my account
So I can spend my money

- 3.1

> As a Bank,
> I want withdrawals to only be allowed to occur if the customer's pin provided is correct
> So that we only dispose of money to the correct customer

- 3.2

> As a Bank,
> I want withdrawals to only be allowed to occur if the customer has sufficient funds & atm machine has sufficient funds available
> So I don't go out of pocket
```

## Acceptance criteria

**Given** a costumer that has an account number 12345678 and a pin number 1234  
**And** the customer has a balance of £500, and overdraft facility of £100  
**And** the costumer made a cash withdrawal of £100 and balance inquiry after that transaction                                                        
**Then** the costumer would see:

```

12345678 1234
---------------
500 100
---------------
W 100
---------------
B 400
---------------
```

## Built With

- JavaScript - The language used;

## Authors

- **Carolina Dias**
