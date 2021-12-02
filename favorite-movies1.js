function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  

  function addPersonAsFriend(personB, personA) {
    personB.friends.push(personA);
    return personB;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };
  