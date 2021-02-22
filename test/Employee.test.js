const Employee = require("../lib/Employee");

test("Employee", () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    });

    test("name", () => {
        const name = "Saint";
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    });

    test("id", () => {
        const test = 100;
        const emp = new Employee("Valentine", test);
        expect(emp.id).toBe(test);
    });

    test("@", () => {
        const test = "pray@god.com";
        const emp = new Employee("Valentine", 1, test);
        expect(emp.email).toBe(test);
    });

    test("getName", () => {
            const test = "Saint";
            const emp = new Employee(test);
            expect(emp.getName()).toBe(test);
    });
        
    test("getId", () => {

            const test = 100;
            const emp = new Employee("Valentine", test);
            expect(emp.getId()).toBe(test);
    });
        
    test("get@", () => {
 
            const test = "test@test.com";
            const emp = new Employee("Valentine", 1, test);
            expect(emp.getEmail()).toBe(test);
        });
        
    test("getRole", () => {
            const test = "Employee";
            const emp = new Employee("Alice", 1, "test@test.com");
            expect(emp.getRole()).toBe(test);
        });
    
