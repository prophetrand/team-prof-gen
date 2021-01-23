// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email);

        this.school = school;
    }

    // getSchool() {}

    getRole() {
        return 'Intern';
    }
}