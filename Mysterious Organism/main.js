//Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//Function to return a generated DNABases and Unique Number
function pAequorFactory (Num, dnaSpec) {

  const orgObj = {
    specimenNum : Num  ,
    dna : dnaSpec,

    get SpecimenNum () {
      return this.specimenNum
    },

    get Dna () {
      return this.dna
    },

    get Mutate() {
      return this.mutate()
    }, 

    mutate() {
      randLoc = Math.floor(Math.random() * 14);
            currentDNA = this.dna[randLoc];
            newDNA = returnRandBase();

            //Checks to see if the new DNA letter is different from the current one, if not, re-roll
            while (currentDNA === newDNA) {
                newDNA = returnRandBase();
            }

            this.dna.splice(randLoc, 1, newDNA);

            //Return the current object's new DNA
            return this.dna;
      },


      compareDNA(otherpAequor) {
        let currentDna = this.dna
        let dnaCounter = 0;

        for (i = 0; i <= currentDna.length; i++) {
          if (currentDna[i] === otherpAequor.dna[i]) {
            return dnaCounter++;
          }
        }
        let IdenticalDnaPercentage = (dnaCounter / 15) * 100;
        `Specimen ${this.specimenNum} and ${otherPAqeour.
        specimenNum} have ${identicalDNAPercentage}% DNA in
        common`;
      },
      willLikelySurvive() {
        let currentDna = this.dna;
        let CandGCounter = 0;

        for (let i = 0; i <= currentDna.length; i++) {
          if (currentDna[i] === 'C' || currentDna[i] === 'G'){
            return CandGCounter++
          }
        }
        if (CandGCounter > 9) {
          return true;
        } else {
          return false;
        }
      }
  };

 return {
   'Specimen Number' : orgObj.specimenNum,
   'Organism DNA' : orgObj.dna,
   'Mutated DNA' : orgObj.mutate(),
   'Compared DNA' : orgObj.compareDNA()
 }
}

let specimenArray =  [];

for (let i = 0; i <= 30; i++) {
  let specimen = pAequorFactory(i, mockUpStrand());
  specimenArray.push(i);
}