# Exercise 1.1
### Answer:
###### When we type any url in browser and search then browser is looking for IP address for the domain.
###### browser initiate TCP connection and sends http/https request to the server, then server process the request and send the response back,
###### after that browser renders the content on webpage and displays to the end user.
### a. Main functionality of browsers are
   ###### 1. To retrieve information from web and display[render html in web pages]
   ###### 2. Browser controls like back forward stop and reload
   ###### 3. open multiple websites in multiple tabs
   ###### 4. cache memory for avoid loading of repeated data of same website
   ###### 5. firebug for inspecting the web page
### b. High Level Components of a browser
   ###### 1. User Interface
   ###### 2. Broser Engine
   ###### 3. Networking
   ###### 4. Data Storage
   ###### 5. Javascript Interpreter
### c. Rendering engine and it's use
   ###### Every browser has its own unique rendering engine 
   ###### chrome has blink, Internet Explorar has Trident, Mozilla Firefox has Gecko, ###### safari and chrom for IOS has webkit
   ##### Below are the step which are perform by rendering engine.
   ###### 1. It parsing HTML to construct the DOM tree [The HTML elements are converted into DOM nodes to form a content tree or DOM tree]
   ###### 2. then it render tree construction [This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed it also insures that the content is displayed in the desired order]
   ###### 3.then the render tree goes through the layout process [When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen]
   ###### 4.then painting the render tree [paints each node on the screen using the UI backend layer]
### d. Parsers
   ###### HTML parser is the piece of software which process the HTML markup and produces a in memory tree representation also called as DOM [Document Object Model]

### e.Script Processors
  ###### The script processor parses each incoming document's JSON source field into set of map list and premitives.
### f.Tree construction
  ###### Steps are:
  ###### 1.Process HTML markup and build the DOM tree
  ###### 2.Process CSS markup and build the CSSOM tree
  ###### 3.Combine the DOM and CSSOM into a render tree
  ###### 4.Run layout on the render tree to compute geometry of each node
  ###### 5.Paint the individual nodes to the screen