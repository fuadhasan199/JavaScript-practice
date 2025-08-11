

        // function total_salary(value){
        //   let salary=0
        //   for(let i=0;i<value.length;i++){
        //      let incries=value[i].experience*value[i].increment

        //      let current_salary=value[i].starting+incries 
        //       salary=salary+current_salary
        //   } 

        //   return salary


        // } 
        // console.log(total_salary(employees)); 

         const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ]; 
 
        function total_salary(employees){ 
            let salary=0
            for(let i=0; i<employees.length;i++){

           let incries= employees[i].experience * employees[i].increment
           let  current_salary=employees[i].starting +incries 
            salary+=current_salary

            } 
            return salary
        } 
        console.log(total_salary(employees));