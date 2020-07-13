import { schema } from 'normalizr'

const { Entity } = schema;


const skill = new Entity('skills')

const userSkill = new Entity('userSkills', {
  skill: skill
}, {
  idAttribute: (value) => `${value.skill.id}-${value.level}`
})

export const userEntity = new Entity('users', {
  skills: [userSkill]
}, { idAttribute: 'id' })

export const userList = new schema.Array(userEntity);
