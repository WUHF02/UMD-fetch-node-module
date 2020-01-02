# NodeJS fetch

![Version](https://img.shields.io/npm/v/@happyinc/nodefetch)
![Size](https://img.shields.io/bundlephobia/min/@happyinc/nodefetch)
![License](https://img.shields.io/npm/l/@happyinc/nodefetch)

> Fetch Wrapper that can Fetch Promises in varius ways like brower, XMLHttpRequest or NodeJS

##### Includes methods: Post, Get, Delete, Put

---

### Install 

1. ```bash
    npm i @happyinc/nodefetch
    ```
2.  Locate the YOUR-FILE.js folder.

3.    In the nodeFetch function shown below, place the              address you want to Fetch.

---

### How to use

1. Write this in **YOUR-FILE.js**
    ```js
    if(typeof exports === "object") {
        var myFetch = require("@happyinc/nodefetch");
    }

    myFetch.init({
        address: "https://reqres.in/api/users?page=2",
        key: "1234"
    });

    myFetch.get("1").then(result => console.log(result))

    ```

2. Write the address which you want to fetch from. (In this example the address is: https://reqres.in/api/users?page=2 )

3. After **myFetch.** you can choose rather you want to get, put, post or del(delete). (In this example we use get)

4. In the parantheses after get, you write what you want to get.

5. In the console, write **node** & **YOUR-FILE.js**
---