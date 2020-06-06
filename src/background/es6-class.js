class People
{
    constructor(name='Anonymous',age=0)
    {
        this.name = name;
        this.age = age;
    }
    getGreeting()
    {
        return `Hi ${this.name}!`;
    }
    getDesc()
    {
        return `${this.name} is ${this.age} years old`;
    }
}

class Traveller extends People
{
    constructor(name,age,homelocation)
    {
        super(name,age);
        this.homelocation = homelocation;
    }
    getDesc()
    {
        let desc = super.getGreeting();
        if(this.homelocation)
        {
             desc += `I'm visiting from ${this.homelocation}`;
        }
        return desc;
    }
}

const ali = new People('Ali Ayad',18);
console.log(ali.getGreeting());
console.log(ali.getDesc());
const anon = new People();
console.log(anon.getGreeting());
console.log(anon.getDesc());

const cairo = new Traveller('Nadeen Tarek',19, 'Dubai,UAE');
console.log(cairo.getDesc());
const anony = new Traveller('Nadeen Tarek Clone',19);
console.log(anony.getDesc());