const express = require('express')
const bodyParser = require('body-parser')

const getCounter = ({ firstName, lastName }) => (accumulator, currentValue) =>
  currentValue.firstName === firstName && currentValue.lastName === lastName
    ? ++accumulator : accumulator

// copied from MDN
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const skillMap = [
  {
    id: 'skill 1',
    name: 'fire resistance',
  },
  {
    id: 'skill 2',
    name: 'invisibility',
  },
  {
    id: 'skill 3',
    name: 'charisma',
  },
  {
    id: 'skill 4',
    name: 'flight',
  },
  {
    id: 'skill 5',
    name: 'quiet walking',
  },
]

// const getRandomSkillSet = (skillMap) => {
//   let skillSet = []

//   if (skillMap.length === 0) {
//     return skillSet
//   }

//   const numSkills = getRandomInt(1, skillMap.length)
//   const skillSetAvailableIdxs = [...Array(skillMap.length).keys()]

//   // console.log('skillMap.length ', skillMap.length)
//   // console.log('num skills ', numSkills)
//   // console.log('skillSetAvailableIdxs ', skillSetAvailableIdxs)

//   for (let i = 0; i < numSkills; i++) {
//     // get random skill
//     const skillIdx = getRandomInt(0, skillSetAvailableIdxs.length)
//     const randomSkill = skillSetAvailableIdxs.splice(skillIdx, 1)


//     skillSet = [...skillSet, skillMap[randomSkill[0]]]
//   }

//   return skillSet
// }


const PORT = 3001;
const users = [];

const app = express();
app.use(bodyParser.json());

app.get('/users', (req, res) => {
  // return res.json(users.map((user) => ({user: user.id, firstName: user.firstName, lastName: user.lastName, regnalNumber: user.regnalNumber})))
  return res.json(users)
})


app.get('/skills', (req, res) => res.json(skillMap))

app.post('/users', (req, res) => {

  const { firstName, lastName, skills: requestedSkills  } = req.body.user;
  let returnedSkills = []

  // compute regnal number
  const regnalNumber = users.reduce(getCounter({ firstName, lastName }), 1)

  // TODO delete
  console.log('got user skills: ', requestedSkills)

  for (const iterator of requestedSkills) {
    const requestedSkill = skillMap.find((element) => iterator === element.id)

    console.log('requestedSkill', iterator)

    if (!requestedSkill){
      return res.status(400).json({ message: 'Unknown skill' });
    }
    else
    {
      returnedSkills = [...returnedSkills, requestedSkill]
    }
  }
  returnedSkills = returnedSkills.map((skill) => ({ skill, level: regnalNumber * 10 }))

  const user = {
    id: `user-${users.length + 1}`,
    firstName,
    lastName,
    regnalNumber,
    skills: returnedSkills,
  };

  users.push(user);
  res.json(user);
});

app.get('/users/:id', (req, res) => {
  const requestedUserId = req.params['id']
  console.log('/users/:id was called for id ', requestedUserId)

  console.log('return details', users.find((element) => element.id === requestedUserId))
  return res.json(users.find((element) => element.id === requestedUserId))
})

app.listen(PORT, () => console.log(`The server is running on port ${PORT}!`));
