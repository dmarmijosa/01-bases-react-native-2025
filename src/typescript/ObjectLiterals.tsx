interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Partial<Address>
}

interface Address {
    country: string;
    houseNo: string;
    street: string;
}
const ObjectLiterals = () => {
    const person: Person = {
        age: 31,
        firstName: 'Danny',
        lastName: 'Armijos',
        address: {
            country: 'Spain',
            houseNo: '123',
            //street: 'Main St'
        }
    }
    return (
        <>{JSON.stringify(person, null, 2)}</>
    )
}

export default ObjectLiterals