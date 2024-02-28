//class
class Cat {
    //생성자
    //클래스의 인스턴스 생성시 생성되는 것(선택)
    constructor(name, age) {
        //속성
        this.name = name;
        this.age = age;
    }
    //메소드
    mew() {
        console.log(this.name, '야옹'); // 사용할때 this를 써야함
    }
    eat() {
        console.log('먹이를 먹습니다');
    }
}

const cat1 = new Cat('나비', 1);
const cat2 = new Cat('냥이', 2);
cat1.mew();
cat1.eat();
cat2.mew();

const cat3 = new Cat();
console.log(cat3); //name, age 에 undefined 들어감
cat3.mew();
cat3.eat();

//상속
class House {
    door() {
        console.log('문을 열고 닫습니다.');
    }
    window() {
        console.log('창문을 열고 닫습니다.');
    }
}

const ho1 = new House();
ho1.door();

class Apartment extends House {
    elevator() {
        console.log('승강기를 타고 내립니다');
    }
}

const apart = new Apartment();
apart.door(); // 상속으로 인해 House 클래스의 함수 사용
apart.elevator();

//실습

class Shape {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
}
const rec1 = new Shape(3, 4);
console.log(rec1.getArea());
