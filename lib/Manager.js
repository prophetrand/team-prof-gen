// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, oNum) {
        super(name, id, email);
        if (oNum) this.officeNumber = oNum;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;