{
    // type guards

    // type of -> type guard

    type Alphanumeric = string | number;

    const add = (
        param1: Alphanumeric,
        param2: Alphanumeric
    ): Alphanumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString();
        }
    };
    
    const res = add(123, 123);
    // console.log(res);


    // in guard

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: 'admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`this is ${user.name} and role is: ${user.role}`);
        } else {
            console.log(`this is normal user ${user.name}`);
        }
    }
    
    const normalUser: NormalUser = {
        name: 'Normal user'
    }
    
    const adminUser: AdminUser = {
        name: 'Admin user',
        role: 'admin'
    }

    getUser(normalUser);
    // getUser(adminUser);
    
    






    // 
}