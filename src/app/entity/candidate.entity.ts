import { Serializable } from './../interface/serialize.interface';
import { SkillsEntity } from './skillls.entity';

export class CandidateEntity implements Serializable<CandidateEntity> {
    
    public skills : Array<SkillsEntity> = [];

    deserialize(input:CandidateEntity) : CandidateEntity {
        if(input.skills){
        this.skills = input.skills.map(skill => new SkillsEntity().deserialize(skill,this))
        }
        return this;

    }

    serialize(input : CandidateEntity) {
        const serialized = {
            skills: []
        }
        if(input.skills){
            serialized.skills = input.skills.map((skill:SkillsEntity)=>{
                new SkillsEntity().serialize(skill)
            })
        }else{
            serialized.skills = input.skills;
        }

        return serialized;
    }

}
