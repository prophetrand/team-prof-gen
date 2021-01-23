// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        if (name) this.name = name;
        if (id) this.id = id;
        if (email) this.email = email;
    }
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }   
}

module.exports = Employee;