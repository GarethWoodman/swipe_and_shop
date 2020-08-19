# Swipe and Shop
An app to buy and sell items using a Tinder style selection process

# Tech Stack:

- MongoDB
- Express JS
- React JS/React Native
- Node JS
- Bootstrap
- Cypress

## User Stores (Behavioural Driven Development)
```
As a User
So that I can create my account
I want to be able to sign up
```
```
As a User
So that I can use Swipe and Shop
I want to be able to login
```
```
As a User
So that I can sell an item
I want to be able to post an item 
```
```
As a User
So that I can buy an item
I can view all posted items
```
```
As a User
So that I can make my searches more specific
I want to be able to filter posted results
```
```
As a User
So that I can sell my item
I want to be able to set the price of my item
```
```
As a User
So that I can tell buyers what the item is
I want to be able to create a description for the item
```
```
As a User
So that I can find out more about the item
I want to be able to message the buyer to discuss the details
```
```
As a User
So that I can talk to my customers
I want to be able to message the customers to discuss the details
```


## Database

`USER` table:

| field | type |
| --- | --- |
| USER ID | PRIMARY SERIAL ID |
| EMAIL | VARCHAR(200) |
| PASSWORD | VARCHAR(60) |
| USERNAME | VARCHAR(100) |
| REAL NAME | VARCHAR(100) |
| PICTURE | URL |
| LOCATION | VARCHAR(100) |


`ITEM ADVERTISEMENT` table:

| field | type |
| --- | --- |
| ITEM ID | PRIMARY SERIAL ID |
| USER ID (seller) | VARCHAR(100) (FOREIGN KEY) |
| NAME OF ITEM | VARCHAR(100) |
| DESCRIPTION | VARCHAR(250) |
| PRICE | Integer |
| EXPIRY DATE | VARCHAR |
| PICTURE | URL |

## Domain Models 

| class | methods |
| --- | --- |
| user | @itemsToBuy @itemsToSell |
| | .logIn	 |
| | .signUp |


| class | methods |
| --- | --- |
| Item | @name @price @description|
| | .addItem(user,name, description, price) |
| | .viewItems(searchCriteria) |
