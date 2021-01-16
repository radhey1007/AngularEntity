import { Serializable } from './../interface/serialize.interface';
import { SkillsEntity } from './skillls.entity';

export class SkillEntity implements Serializable<SkillEntity> {

    public id:number=0;
    public name='';

    deserialize(input:SkillEntity , parent:SkillsEntity):SkillEntity {
        this.id= input.id;
        this.name= input.name;
        return this;
    }


    serialize(input:SkillEntity){
        const serialized = {
            id:input.id,
            name:input.name
        }
        return serialized;
    }
}