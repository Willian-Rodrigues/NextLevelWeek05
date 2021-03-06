import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessageRepository } from "../repositories/MessageRepository";

interface IMessageCreate{
    admin_id?: string;
    text: string;
    user_id:string;
}

class MessageService{
    
    private messageRepository: Repository<Message>

    constructor(){
        this.messageRepository = getCustomRepository(MessageRepository);

    }

    async create({text, admin_id, user_id}:IMessageCreate){
        
        
        const message = this.messageRepository.create({
            admin_id,
            text,
            user_id

        })

        await this.messageRepository.save(message)

        return message;   
    }

    async listByUser(user_id: string){


        const list = await this.messageRepository.find({
            user_id,
        })
        return list;
    }
}

export {MessageService};