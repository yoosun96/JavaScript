/**
 * Shorthand property names
 */

{
    const ellie1 = {
        name: 'Ellie',
        age: '18',
    };

    const name = 'Ellie';
    const age = '18';
    //💩
    const ellie2 = {
        name: name,
        age: age,
    };
    //💫
    const ellie3 = {
        name,
        age,
    };

    console.log(ellie1, ellie2, ellie3);
}

console.clear();
/**
 * Destructuring Assignment 구조분해할당
 */

{
    //Object
    const student = {
        name: 'Anna',
        level: 1,
    };

    //💩
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }
    //💫
    {
        const { name, level } = student;
        console.log(name, level);

        const { name: studentName, level: studentLevel } = student;
        console.log(studentName, studentLevel);
    }

    //array
    const animals = ['🐶', '🐱'];

    //💩
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    //💫
    {
        const [first, second] = animals;
        console.log(first, second);
    }
}

