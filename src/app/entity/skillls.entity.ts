import { Serializable } from './../interface/serialize.interface';
import { CandidateEntity } from './candidate.entity';
import { SkillEntity } from './skill.entity';


export class SkillsEntity implements Serializable<SkillsEntity> {
 
    public type = '';
    public skill:Array<SkillEntity> = [];


    deserialize(input:SkillsEntity,parent:CandidateEntity):SkillsEntity {
        
        if(input.skill){
            this.skill = input.skill.
            map(skillValue => new SkillEntity().deserialize(skillValue , this));
        } else {
            this.skill = input.skill;
        }
        
        return this;

    }
    serialize(input:SkillsEntity){
        const serialized = {
            type:input.type,
            skill:[]
        }

        if(input.skill) {
            serialized.skill = input.skill.
            map(skillValue => new SkillEntity().serialize(skillValue));
        } else {
            serialized.skill = input.skill;
        }
        return serialized;
    }
}