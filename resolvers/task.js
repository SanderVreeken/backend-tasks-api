const nodemailer = require('nodemailer')

const isValid = require('../functions/isValid')
const TaskM = require('../models/Task.model')

const TaskResolvers = {
    Mutation: {
        async createTask(_, { task }, context) {
            const token = isValid(context.token) 
            if (token) {
                try { 
                    task.createdBy = token._id
                    const response = await new TaskM(task).save()
                    return response
                } catch(error) {
                    throw new Error(error)
                }
            } else {
                throw new Error('The token that is used is either expired or invalid, please re-authenticate.')
            }
        },
        async updateTask(_, { _id, task }, context) {
            const token = isValid(context.token) 
            if (token) {
                try { 
                    const request = await TaskM.findById(_id)
                    if (!request) {
                        throw new Error('The task could not be found, please verify its existence and try again.')
                    }

                    if (`${request.createdBy}` === token._id) {
                        const response = await TaskM.findByIdAndUpdate(_id, task, {
                            new: true,
                            useFindAndModify: false
                        })    

                        const transporter = nodemailer.createTransport({
                            host: process.env.NODEMAILER_HOST,
                            port: process.env.NODEMAILER_PORT,
                            secure: true,
                            auth: {
                              user: process.env.NODEMAILER_USER, 
                              pass: process.env.NODEMAILER_PASS, 
                            },
                        })

                        const name = 'Sander'

                        // let info = await transporter.sendMail({
                        //     from: '"Sander from Tasks" <tasks@sandervreeken.com>', 
                        //     to: 'info@sandervreeken.com', 
                        //     subject: "Password Reset", 
                        //     html: `<b>Hello ${name}?</b>`, 
                        // })

                        console.log('Message sent: %s', info.messageId)

                        return response
                    } else {
                        throw new Error('You do not have the necessary rights to edit this task.')
                    }
                } catch(error) {
                    throw new Error(error)
                }
            } else {
                throw new Error('The token that is used is either expired or invalid, please re-authenticate.')
            }
        }
    },
    Query: {
        readTasks: () => TaskM.find()
    }
}

module.exports = TaskResolvers