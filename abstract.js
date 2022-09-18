let House = function () {
    throw new Error("abstract")
}
House.prototype.name
House.prototype.price
House.prototype.showName = function (){
    throw new Error("method showName should be implemented")  // nếu tp instance (building) không có phương thức này TP kế thừa MyHome sẽ báo lỗi khi gọi
}
House.prototype.showPrice = function (){
    throw new Error("method showPrice should be implemented")
}


let Building = function (pr, sologan) {
    this.name
    let price = pr
    this.showName = function () {
        console.log(`${this.name}`)
    }
    this.showPrice = function () {
        console.log(price)
    }
    this.sologan = sologan
}
Building.prototype = Object.create(House.prototype) // create instance Building 

let ChildrenHouse = function (n) {
    let name = n
    this.price
    this.showName = function () {
        console.log(name + ' have price are '+`${this.price}`)
    }
}
ChildrenHouse.prototype = Object.create(House.prototype) // create instance childrenHouse

let MyHome = new Building("4000000$", "Happy")
MyHome.name = `Manh's Vila`
MyHome.showName()
MyHome.showPrice()
let MyChildren = new ChildrenHouse('Loutus')
MyChildren.price = '5000$'
MyChildren.showName()

