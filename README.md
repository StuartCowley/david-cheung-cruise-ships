# Cruise Ships

## Purpose:
To building and working with many objects that allow a cruise ship to operate.

## User Stories and DOMAIN MODEL:
As a cruise ship captain,
So I can get passengers aboard a **ship**,
I want a ship to have a **starting port**.

| Object | Methods | Properties |
| ----------- | ----------- | ----------- |
| Ship | | startingPort |

As a cruise ship captain,
So I can get passengers started on their journey,
I want a ship to be able to **set sail from a port**.

| Object | Methods | Properties |
| ----------- | ----------- | ----------- |
| Ship | setSail | startingPort |

As a cruise ship captain,
So I can get passengers to a new destination,
I want a ship to be able to **dock** at a **different port**.
Renaming startingPort to currentPort because ship can be at different ports.

| Object | Methods | Properties |
| ----------- | ----------- | ----------- |
| Ship | setSail | currentPort |
|      | dock    |              |
| Port | | |

As a tour representative,
So I can decide which destinations passengers visit,
I want a ship to take an **itinerary** which determines at which port it **next docks**.

| Object | Methods | Properties |
| ----------- | ----------- | ----------- |
| Ship | setSail | currentPort |
| | dock | |
| Port | | |
| Itinerary | | ports |

As a port operations manager,
So I can best utilise a port,
I want a port to **keep track of the ships currently docked**.

| Object | Methods | Properties |
| ----------- | ----------- | ----------- |
| Ship | setSail | currentPort |
| | dock | |
| Port | addShip | |
| | removeShip | |
| Itinerary | | ports |
 
## Object and functions
```
Ship = {
    currentPort : any port
    previousPort : any port
    setSail() : to assign the currentPort to the previousPort and empty currentPort 
                to removes itself from a previousPort's ships list
    dock() : to assign currentPort with itinerary 
}

Port = {
    ships : a list of ships currently docking in this port
    addShip() : to add ship to this port
    removeShip() : to remove ship from this port
}

Itinerary = {
    ports : a list of ports which ship will go thru
}
```
## Project Installation:

