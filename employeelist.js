const graphql = require('graphql');
const Employee_details = require('./employee');
console.log(Employee_details);
const _ = require('lodash'); 
 
const { 
    GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLInt,GraphQLSchema, 
    GraphQLList,GraphQLNonNull 
} = graphql;

const EmployeeType = new GraphQLObjectType({
    name: 'Employee_details',
    fields: () => ({
        Employee_ID: { type: GraphQLString },
        First_Name: { type: GraphQLString },
        Last_Name: { type: GraphQLString },
        Phone_Number: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    type: EmployeeType,
    fields:()=>({
       Employee_details: {
            args: { Employee_ID: { type: GraphQLString } },
            resolve(parent, args) { 
			/*let result = _.find(Employee_details, function(obj) { 
			     return obj.Employee_ID		  
			})*/
                    return _.find(Employee_details,{Employee_ID:args.Employee_ID});
                     // console.log(result);
                   }
              }
            
        })      
});

module.exports = new GraphQLSchema({
    query: RootQuery   
});
