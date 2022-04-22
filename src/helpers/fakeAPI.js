import batman from '../assets/img/batman.jpg'
import spiderman from '../assets/img/spiderman.jpg'
import turningred from '../assets/img/turningred.jpg'
import sonic from '../assets/img/sonic.jpg'

const productos = [
    { id: '1', img:batman, name:'The Batman',stock:10 ,category:'superheroes', price:1000, description:'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.'},
    { id: '2', img:spiderman, name:'Spider-Man: No Way Home',stock:15 ,category:'superheroes', price:1000, description:'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.'},
    { id: '3', img:turningred, name:'Turning Red',stock:13 ,category:'infantiles', price:750, description:'Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.'},
    { id: '4', img:sonic, name:'Sonic the Hedgehog 2',stock:6 ,category:'infantiles', price:750, description:'After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.'},    
]

export const fakeAPI = new Promise((resolve)=> {
    setTimeout(() => {
        resolve(productos)
    }, 1000);
})