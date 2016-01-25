/**
 * Object defined in the global namespace
 * */
var Calculus = Calculus || {};

/**
 * Sub - namespace
 * @namespace trigonometry
 * */
Calculus.trigonometry = {};

/**
 * New object defined in "trigonometry" namespace
 **/

/**
 * @description This is the constructor of the object. It defines the default properties.
 * @namespace trigonometry
 * @param perimeter
 * @param sideSize
 */
Calculus.trigonometry.triangle = function(perimeter, sideSize) {
    this.perimeter = perimeter;
    this.sideSize = sideSize;
    console.log("Instance created");
};

/**
 * @description Defining propertires on object from namespace
 * @namespace trigonometry
 * @type {number}
 */
Calculus.trigonometry.triangle.prototype.predefinedArea = 60;


/**
 * @description Defining a method on the object from namespace with defined argument
 * @namespace trigonometry
 * @type {number}
 */
Calculus.trigonometry.triangle.prototype.calcAbsoluteArea = function(absoluteValue) {
    return absoluteValue * 3;
};

/**
 * @description Defining a method on the object from namespace
 * @namespace trigonometry
 * @type {number}
 */
Calculus.trigonometry.triangle.prototype.calcRelativeArea = function() {
    return this.sideSize * 3;
};

/**
 * @description This is the constructor for the child object
 * @namespace trigonometry
 * @param perimeter
 * @param sideSize
 * @param name
 */
Calculus.trigonometry.specialTriangle = function(perimeter, sideSize, name) {
    /**
     * Calling the parent class to bind the child properties on it
     */
    Calculus.trigonometry.triangle.call(this, perimeter, sideSize);
    this.name = name;
    console.log("Child instance created");
};

/**
 * @description Bind the child class with parent class
 * @namespace trigonometry
 * @type {Calculus.trigonometry.triangle}
 */
Calculus.trigonometry.specialTriangle.prototype = Object.create(Calculus.trigonometry.triangle.prototype);

/**
 * @description Define a custom private property outside of the constructor
 * @namespace trigonometry
 * @type {string}
 */
Calculus.trigonometry.specialTriangle.prototype.motherName = "Elizabeth";

/**
 * @description Define a method on child class (Retrieve a constructor defined property)
 * @namespace trigonometry
 * @returns {*}
 */
Calculus.trigonometry.specialTriangle.prototype.sayMyName = function() {
    return this.name;
};

/**
 * @description Define a method on child class (Retrieve a private defined property)
 * @namespace trigonometry
 * @returns {string}
 */
Calculus.trigonometry.specialTriangle.prototype.sayMyMotherName = function() {
    return this.motherName;
};

/**
 * @description Define a method on child class (Retrieve a relatively defined property)
 * @namespace trigonometry
 * @param brotherName
 * @returns {*}
 */
Calculus.trigonometry.specialTriangle.prototype.sayMyBrotherName = function(brotherName) {
      return brotherName;
};

/**
 * @description Overwrite a method from parent
 * @namespace trigonometry
 * @returns {string}
 */
Calculus.trigonometry.specialTriangle.prototype.calcAbsoluteArea = function() {
    return "No need for that";
};

/**
 * @description Instantiations
 * @type {Calculus.trigonometry.triangle}
 */
var triangle1 = new Calculus.trigonometry.triangle(20, 3);
console.log(triangle1.perimeter);
console.log(triangle1.predefinedArea);
console.log(triangle1.calcAbsoluteArea(10));
console.log(triangle1.calcRelativeArea());

var triangleTommy = new Calculus.trigonometry.specialTriangle(20, 500, "Tommy");
console.log(triangleTommy.perimeter);
console.log(triangleTommy.predefinedArea);
console.log(triangleTommy.sayMyName());
console.log(triangleTommy.sayMyMotherName());
console.log(triangleTommy.sayMyBrotherName("Carl"));
console.log(triangleTommy.calcAbsoluteArea());
console.log(triangleTommy.calcRelativeArea());