import User from '../models/userModel.js';

const allPossibleIds = [];
for (let i = 0; i < 100000; i++) {
  allPossibleIds.push(i.toString().padStart(5, '0'));
}

const getNewParticipantId = async () => {
  const allExistingParticipantIds = await User.find().select('participantId');
  const allAvailableIds = allPossibleIds.filter(id => !allExistingParticipantIds.includes(id));
  const newId = allAvailableIds[Math.floor(Math.random() * allAvailableIds.length)];

  return newId;
}

export default getNewParticipantId;
