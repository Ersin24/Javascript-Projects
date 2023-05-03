const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})

const startsWithS = animals.findIndex(animal => {
  return animal.startsWith('s');
  // return animal[0] === 's';
  // return animal.charAt(0) === 's';
})