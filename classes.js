class circle {
      constructor(radius) {
        this.radius = radius;
      }
      area() {
        return Math.PI * this.radius * this.radius;
      }
    }
    const data = new circle(10);
    console.log(data.area());
    document.getElementById("circleArea").innerHTML = data.area();