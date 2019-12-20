(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    // CommonJS
    module.exports = factory(require("jquery"));
  } else {
    // Browser context
    root.myFetch = factory(root.jquery);
  }
})(this, function($) {
  function init(options) {
    this.APIAddress = options.address;
    this.APIKey = options.key;
    return this;
  }

  async function get(resource) {
    try {
      if (typeof fetch === "function") {
        let response = await fetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey
          }
        });
        return await response.json();
      } else if (typeof XMLHttpRequest === "function") {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            return new Promise(function(resolve, reject) {
              Promise.resolve(xhttp.responseText);
            });
          }
        };
        xhttp.open("GET", this.APIAddress + resource, true);
        xhttp.send();
      } else {
        const nodeFetch = require("node-fetch");
        let response = await nodeFetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey
          }
        });
        return await response.json();
        l;
      }
    } catch (error) {
      throw error;
    }
  }

  async function post(resource, data) {
    try {
      let response = await fetch(this.APIAddress + resource, {
        headers: {
          Authorization: this.APIKey,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
      });

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async function del(resource) {
    try {
      if (typeof fetch === "function") {
        let response = await fetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey
          },
          method: "DELETE"
        });

        return await new Promise(function(resolve, reject) {
          resolve(response.status);
        });
      } else if (typeof XMLHttpRequest === "function") {
        let xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", this.APIAddress + resource, true);
        xhttp.send();
        return await new Promise(function(resolve, reject) {
          xhttp.onreadystatechange = function() {
            resolve(xhttp.status);
          };
        });
      } else {
        let nodefetch = require("node-fetch");
        let response = await nodefetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey
          },
          method: "DELETE"
        });
        return await new Promise(function(resolve, reject) {
          resolve(response.status);
        });
      }
    } catch (error) {
      throw error;
    }
  }
  async function put(resource, data) {
    try {
      if (typeof fetch === "function") {
        let response = await fetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey,
            "Content-Type": "application/json"
          },
          method: "PUT",
          body: JSON.stringify(data)
        });
        return await response.json();
      } else if (typeof XMLHttpRequest === "function") {
        let xhttp = new XMLHttpRequest();
        xhttp.open("PUT", this.APIAddress + resource, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.setRequestHeader("Authorization", this.APIKey);
        xhttp.send(JSON.stringify(data));
        return await new Promise(function(resolve, reject) {
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              resolve(JSON.parse(xhttp.responseText));
            }
          };
        });
      } else {
        let nodeFetch = require("node-fetch");
        let response = await nodeFetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey
          },
          method: "PUT"
        });
        return await new Promise(function(resolve, reject) {
          resolve(response.status);
        });
      }
    } catch (error) {
      throw error;
    }
  }

  return {
    init,
    get,
    post,
    del,
    put
  };
});
