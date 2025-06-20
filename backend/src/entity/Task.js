import { EntitySchema } from "typeorm";



const Task = new EntitySchema({
    name:"Task",
    tableName:"task",
    columns:{
        id:{
            primary:true,
            type:"uuid" ,
            generated:"uuid",            
        },
        title:{
            type:"varchar",
        },
        description:{
            type:"text",
            nullable:true,
        },
        status:{
            type:"enum",
            enum:["todo","in_progress","done"],
        },
        dueDate:{
            type:"date",
            nullable:true,
        },
        createdAt:{
            type:"timestamp",
            createDate:true,
        },
        updatedAt:{
            type:'timestamp',
            updateDate:true,
        },
        
    },
})

export default Task