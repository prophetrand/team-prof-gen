// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email);
        this.github = github;
    }

    // getGithub() {}

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;